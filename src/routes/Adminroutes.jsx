import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

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

function Adminroutes() {
  const [collapsed, setCollapsed] = useState(false);

  const Layout = ({ children }) => (
    <div className="d-flex">
      <Sidebar collapsed={collapsed} />
      <div className="flex-grow-1">
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className="p-3">{children}</div>
      </div>
    </div>
  );

  return (
    <Routes>

      {/* DEFAULT → redirect to admin dashboard */}
      <Route path="/" element={<Navigate to="/admin" />} />

      {/* ADMIN DASHBOARD */}
      <Route path="/admin" element={<Layout><Dashboard /></Layout>} />

      <Route path="/usermanagement" element={<Layout><UserManagement /></Layout>} />
      <Route path="/items-bom" element={<Layout><ItemsBOM /></Layout>} />
      <Route path="/procurement" element={<Layout><Procurement /></Layout>} />
      <Route path="/productionfile" element={<Layout><ProductionFile /></Layout>} />
      <Route path="/analyticsoee" element={<Layout><AnalyticsOEE /></Layout>} />
      <Route path="/qualitycontrol" element={<Layout><QualityControl /></Layout>} />
      <Route path="/settings" element={<Layout><Settings /></Layout>} />

    </Routes>
  );
}

export default Adminroutes;