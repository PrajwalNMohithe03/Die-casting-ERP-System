import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaUserCog,
  FaBoxOpen,
  FaShoppingBag,
  FaIndustry,
  FaClipboardCheck,
  FaFileInvoiceDollar,
  FaChartLine,
  FaCameraRetro,
} from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const sidebarItems = [
  { name: "Dashboard", icon: <FaTachometerAlt />, path: "/admin/dashboard" },
  {
    name: "User Management",
    icon: <FaUserCog />,
    path: "/admin/usermanagement",
  },
  { name: "Items & BOM", icon: <FaBoxOpen />, path: "/admin/items-bom" },
  { name: "Procurement", icon: <FaShoppingBag />, path: "/admin/procurement" },
  { name: "Production", icon: <FaIndustry />, path: "/admin/productionfile" },
  {
    name: "Quality Control",
    icon: <FaClipboardCheck />,
    path: "/admin/qualitycontrol",
  },
  {
    name: "Sales & Orders",
    icon: <FaFileInvoiceDollar />,
    path: "/admin/sales",
  },
  {
    name: "Analytics & OEE",
    icon: <FaChartLine />,
    path: "/admin/analyticsoee",
  },
  {
    name: "Camera Detection",
    icon: <FaCameraRetro />,
    path: "/admin/camera-detection",
  },
  { name: "System Settings", icon: <FiSettings />, path: "/admin/settings" },
];

export default function Sidebar({ collapsed }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleMobileToggle = () => setMobileOpen(!mobileOpen);
  const handleLogout = () => setShowConfirm(true);

  const confirmLogout = () => {
    setShowConfirm(false);
    navigate("/");
  };

  const cancelLogout = () => setShowConfirm(false);

  return (
    <>
      {/* MOBILE BUTTON */}
      <div className="d-lg-none position-fixed top-0 start-0 m-2 zindex-tooltip">
        <button className="btn btn-primary" onClick={handleMobileToggle}>
          ☰
        </button>
      </div>

      {/* SIDEBAR */}
      <div
        className="d-flex flex-column text-white"
        style={{
          width: collapsed ? "90px" : "250px",
          height: "100vh",
          backgroundColor: "#0436a3",
          transition: "all 0.3s",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        {/* LOGO */}
        <div
          className="mt-3"
          style={{
            borderBottom: "1px solid rgba(17, 83, 252, 0.91)",
            paddingLeft: "6px",
            marginBottom: "3px",
            paddingBottom: "6px",
          }}
        >
          <h5 className="m-0 ps-3">{collapsed ? "PC" : "Precision Cast"}</h5>
          {!collapsed && (
            <small
              className="text-light ps-3"
              style={{ marginTop: "5px", display: "block" }}
            >
              ERP System
            </small>
          )}
        </div>

        {/* MENU */}
        <div
          className="flex-grow-1"
          style={{
            overflowY: "auto",
            paddingBottom: "10px",
            scrollbarWidth: "6px",
            scrollbarColor: "gray black",
          }}
        >
          <ul className="nav flex-column mt-1">
            {sidebarItems.map((item, idx) => {
              const isActive = location.pathname === item.path;

              return (
                <li
                  key={idx}
                  className="nav-item d-flex align-items-center px-3 py-3"
                  onClick={() => navigate(item.path)}
                  style={{
                    cursor: "pointer",
                    backgroundColor: isActive ? "#0d6efd" : "transparent",
                    transition: "0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#0d6efd")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = isActive
                      ? "#0d6efd"
                      : "transparent")
                  }
                >
                  <span style={{ fontSize: "20px" }}>{item.icon}</span>

                  {!collapsed && (
                    <span className="ms-3" style={{ fontSize: "16px" }}>
                      {item.name}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* USER + LOGOUT */}
        <div
          className="borderTop"
          style={{
            borderTop: "1px solid rgba(17, 83, 252, 0.91)",
          }}
        >
          <div className="d-flex align-items-center p-3">
            <div
              className="bg-light text-dark rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "30px",
                height: "30px",
                fontWeight: "bold",
              }}
            >
              VS
            </div>
            {!collapsed && (
              <div className="ms-2">
                <b className="d-block text-white">Vikram Singh</b>
                <small className="text-light">Admin</small>
              </div>
            )}
          </div>

          {/* LOGOUT BUTTON */}
          <div className="p-3 pt-0">
            <button
              onClick={handleLogout}
              style={{
                width: "100%",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                padding: "10px",
                fontSize: "14px",
                fontWeight: "bold",
                borderRadius: "6px",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#bb2d3b")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#dc3545")}
            >
              <h6 className="m-0">{collapsed ? "➜]" : "➜] Logout"}</h6>
            </button>
          </div>
        </div>
      </div>

      {/* LOGOUT MODAL */}
      {showConfirm && (
        <>
          <div className="modal-backdrop fade show"></div>

          <div className="modal fade show" style={{ display: "block" }}>
            <div
              className="modal-dialog modal-dialog-centered"
              style={{ width: "400px" }}
            >
              <div className="modal-content border-0 rounded-4 p-4">
                <div className="d-flex gap-3">
                  {/* Icon */}
                  <div
                    className="bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <span className="fs-5">➜]</span>
                  </div>

                  {/* Content */}
                  <div className="flex-grow-1 pt-1">
                    <h5 className="fw-semibold mb-4">Confirm Logout</h5>

                    <p className="text-muted mb-3" style={{ fontSize: "16px" }}>
                      Are you sure you want to logout? Any unsaved changes will
                      be lost.
                    </p>

                    {/* Buttons */}
                    <div className="d-flex justify-content-center gap-2">
                      <button
                        className="btn btn-light border rounded-3 px-3 py-2"
                        style={{ width: "100%", fontWeight: "500" }}
                        onClick={cancelLogout}
                      >
                        Cancel
                      </button>

                      <button
                        className="btn btn-danger rounded-3 px-3 py-2"
                        style={{ width: "100%", fontWeight: "500" }}
                        onClick={confirmLogout}
                      >
                        Yes, Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* BACKDROP */}
      {mobileOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 999,
          }}
          onClick={handleMobileToggle}
        />
      )}
    </>
  );
}
