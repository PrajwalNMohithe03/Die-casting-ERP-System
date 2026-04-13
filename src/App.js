import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Login from "./pages/Login";
import Admin from "./pages/dashboards/Admindashboard/Admin";
import Production from "./pages/dashboards/Productiondashboard/Production";
import Quality from "./pages/dashboards/QualityDashboard/Quality";
import Procurement from "./pages/dashboards/Procurementdashboard/Procurement";
import Adminroutes from "./routes/Adminroutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/*" element={<Adminroutes />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/production" element={<Production />} />
      <Route path="/quality" element={<Quality />} />
      <Route path="/procurement" element={<Procurement />} />
    </Routes>
  );
}

export default App;