import { useState, useEffect, useRef } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";

import Sidebar from "../pages/dashboards/Admindashboard/sidebar";
import Header from "../pages/dashboards/Admindashboard/header";

import Dashboard from "../pages/dashboards/Admindashboard/dashboard";
import Settings from "../pages/dashboards/Admindashboard/Settings";
import UserManagement from "../pages/dashboards/Admindashboard/UserManagement";
import ItemsBOM from "../pages/dashboards/Admindashboard/Items-BOM";
import AnalyticsOEE from "../pages/dashboards/Admindashboard/analyticsoee";
import Procurement from "../pages/dashboards/Admindashboard/Procurement";
import ProductionFile from "../pages/dashboards/Admindashboard/ProductionFile";
import QualityControl from "../pages/dashboards/Admindashboard/QualityControl";
import Sales from "../pages/dashboards/Admindashboard/Sales";
import CameraDetection from "../pages/dashboards/Admindashboard/CameraDetection";
import MachineStatus from "../pages/dashboards/Admindashboard/MachineStatus";

function Adminroutes() {
  const [collapsed, setCollapsed] = useState(false);

  // ====== INACTIVITY ======
  const [inactive, setInactive] = useState(false);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const logoutTime = 5 * 60 * 1000;

  const resetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setInactive(true);
    }, logoutTime);
  };

  useEffect(() => {
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("click", resetTimer);

    resetTimer();

    return () => {
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("click", resetTimer);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleLogout = () => {
    setInactive(false);
    navigate("/");
  };

  // RESPONSIVE SIDEBAR
  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 992);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // LAYOUT
  const Layout = ({ children }) => {
    const sidebarWidth = collapsed ? 100 : 250;

    return (
      <div className="d-flex">
        <Sidebar collapsed={collapsed} />

        <div
          style={{
            marginLeft: sidebarWidth,
            width: `calc(100% - ${sidebarWidth}px)`,
            transition: "all 0.3s ease",
            minHeight: "100vh",
            overflowX: "hidden",
          }}
        >
          <Header collapsed={collapsed} setCollapsed={setCollapsed} />

          <div style={{ paddingTop: "70px" }} className="container-fluid">
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* ===== ROUTES ===== */}
      <Routes>
        <Route index element={<Navigate to="dashboard" />} />

        <Route
          path="dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="usermanagement"
          element={
            <Layout>
              <UserManagement />
            </Layout>
          }
        />
        <Route
          path="items-bom"
          element={
            <Layout>
              <ItemsBOM />
            </Layout>
          }
        />
        <Route
          path="procurement"
          element={
            <Layout>
              <Procurement />
            </Layout>
          }
        />
        <Route
          path="productionfile"
          element={
            <Layout>
              <ProductionFile />
            </Layout>
          }
        />
        <Route
          path="analyticsoee"
          element={
            <Layout>
              <AnalyticsOEE />
            </Layout>
          }
        />
        <Route
          path="qualitycontrol"
          element={
            <Layout>
              <QualityControl />
            </Layout>
          }
        />
        <Route
          path="sales"
          element={
            <Layout>
              <Sales />
            </Layout>
          }
        />
        <Route
          path="camera-detection"
          element={
            <Layout>
              <CameraDetection />
            </Layout>
          }
        />
        <Route
          path="settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />
        <Route
          path="machine-status"
          element={
            <Layout>
              <MachineStatus />
            </Layout>
          }
        />
      </Routes>

      {/* ===== GLOBAL INACTIVITY MODAL ===== */}
      {inactive && (
        <Modal
          show={inactive}
          centered
          backdrop="static"
          keyboard={false}
          onHide={() => {
            setInactive(false);
            resetTimer();
          }}
          dialogStyle={{
            maxWidth: "260px",
            margin: "auto",
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Session Inactive</Modal.Title>
          </Modal.Header>

          <Modal.Body className="text-center">
            <h5>You're still logged in</h5>
            <p className="text-muted" style={{fontSize:"18px"}}>Your session is inactive.</p>

            <div className="d-flex justify-content-center gap-2 mt-3">
              {/* Stay Logged In */}
              <button
                className="btn"
                style={{
                  backgroundColor: "#bec8d1",
                  width: "150px",
                  fontWeight: "500",
                }}
                onClick={() => {
                  setInactive(false);
                  resetTimer();
                }}
              >
                Stay Logged In
              </button>

              {/* Logout */}
              <button
                className="btn btn-danger"
                style={{ width: "150px", fontWeight: "500" }}
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}

export default Adminroutes;
