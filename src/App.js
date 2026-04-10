import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from "./pages/Login.js";
import Sidebar from "./pages/dashboards/Admindashboard/sidebar.js";
import Header from "./pages/dashboards/Admindashboard/header.js";
import Dashboard from "./pages/dashboards/Admindashboard/dashboard.js";
import Settings from "./pages/dashboards/Admindashboard/Settings.js";
import UserManagement from "./pages/dashboards/Admindashboard/UserManagement";
import ItemsBOM from "./pages/dashboards/Admindashboard/Items-BOM";
import AnalyticsOEE from "./pages/dashboards/Admindashboard/analyticsoee.js";
import Procurement from "./pages/dashboards/Admindashboard/Procurement.js";
import Productions from "./pages/dashboards/Admindashboard/Productions.js";
import Production from "./pages/dashboards/Productiondashboard/Production";
import Quality from "./pages/dashboards/QualityDashboard/Quality";
import Sales from "./pages/dashboards/Salesdashboard/Sales";

function App() {
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
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        {/* UserManagement */}
        <Route
          path="/UserManagement"
          element={
            <Layout>
              <UserManagement />
            </Layout>
          }
        />

        {/* Items & BOM  */}
        <Route
           path="/items-bom"
           element={
          <Layout>
        <ItemsBOM />
        </Layout>
          }
       />

       {/* Procurement */}
        <Route
           path="/Procurement"
           element={
          <Layout>
        <Procurement />
        </Layout>
          }
       />

        {/* Production  */}
        <Route
           path="/Productions"
           element={
          <Layout>
        <Productions />
        </Layout>
          }
       />
    
        <Route
          path="/users"
          element={
        <div className="d-flex">
        <Sidebar collapsed={collapsed} />
        <div className="flex-grow-1">
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <UserManagement />
      </div>
     </div>
     }
   />

        {/* Analytics & OEE  */}
        <Route
           path="/analyticsoee"
           element={
          <Layout>
        <AnalyticsOEE />
        </Layout>
          }
       />

        {/* Settings */}
        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />

        <Route
          path="/quality"
          element={
            <Layout>
              <Quality />
            </Layout>
          }
        />
          
          {/* Other Pages */}
        <Route
          path="/Production"
          element={
            <Layout>
              <Production />
            </Layout>
          }
        />
        

        <Route
          path="/sales"
          element={
            <Layout>
              <Sales />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 