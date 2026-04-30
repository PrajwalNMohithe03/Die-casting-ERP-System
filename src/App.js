import { Routes, Route } from "react-router-dom";
import React from "react";

import Login from "./pages/Login";
import Adminroutes from "./routes/Adminroutes";

import Production from "./pages/dashboards/Productiondashboard/Production";
import Quality from "./pages/dashboards/QualityDashboard/Quality";
import Procurement from "./pages/dashboards/Procurementdashboard/Procurement";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      {/* ADMIN */}
      <Route path="/admin/*" element={<Adminroutes />} />

      {/* OTHER */}
      <Route path="/production" element={<Production />} />
      <Route path="/quality" element={<Quality />} />
      <Route path="/procurement" element={<Procurement />} />
    </Routes>
  );
}

export default App;
