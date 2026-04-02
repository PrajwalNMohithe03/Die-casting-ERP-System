import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/dashboards/Admindashboard/Admin";
import Production from "./pages/dashboards/Productiondashboard/Production";
import Quality from "./pages/dashboards/QualityDashboard/Quality";
import Procurement from "./pages/dashboards/Procurementdashboard/Procurement";
import Sales from "./pages/dashboards/Salesdashboard/Sales";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/production" element={<Production />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/procurement" element={<Procurement />} />
        <Route path="/sales" element={<Sales />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;