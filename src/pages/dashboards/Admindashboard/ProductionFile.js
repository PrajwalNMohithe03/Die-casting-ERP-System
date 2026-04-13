import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaFilter} from "react-icons/fa";
import {FaPlay, FaPause, FaCheckCircle, FaEye, FaPrint,} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Procurement() {

    const [showForm, setShowForm] = useState(false);
    const [mode, setMode] = useState("add");
    const [statusFilter, setStatusFilter] = useState("All Status");
    const navigate = useNavigate();
    const [show404, setShow404] = useState(false);

   const data = [
    {
      id: "WO-2024-0891",
      item: "Gearbox Housing",
      code: "FG-001",
      qty: 500,
      produced: 340,
      machine: "DCM-01",
      progress: 68,
      status: "In Progress",
      date: "10-Mar-2026",
    },
    {
      id: "WO-2024-0892",
      item: "Engine Bracket",
      code: "FG-002",
      qty: 800,
      produced: 0,
      machine: "DCM-02",
      progress: 0,
      status: "Not Started",
      date: "11-Mar-2026",
    },
    {
      id: "WO-2024-0893",
      item: "Valve Cover",
      code: "FG-004",
      qty: 1200,
      produced: 1200,
      machine: "DCM-03",
      progress: 100,
      status: "Completed",
      date: "08-Mar-2026",
    },
    {
      id: "WO-2024-0894",
      item: "Crankcase Cover",
      code: "FG-005",
      qty: 600,
      produced: 210,
      machine: "DCM-01",
      progress: 35,
      status: "On Hold",
      date: "09-Mar-2026",
    },
    {
      id: "WO-2024-0895",
      item: "LED Housing",
      code: "FG-006",
      qty: 400,
      produced: 88,
      machine: "DCM-04",
      progress: 22,
      status: "In Progress",
      date: "10-Mar-2026",
    },
    {
      id: "WO-2024-0896",
      item: "Water Pump Housing",
      code: "FG-007",
      qty: 150,
      produced: 0,
      machine: "DCM-02",
      progress: 0,
      status: "Not Started",
      date: "12-Mar-2026",
    },
  ];

  // STATUS STYLE
  const getStatusStyle = (status) => {
    switch (status) {
      case "In Progress":
        return { background: "#e7f0ff", color: "#2f6fed" };
      case "Completed":
        return { background: "#d9f5e6", color: "#1a9c52" };
      case "On Hold":
        return { background: "#fff3cd", color: "#d68900" };
      default:
        return { background: "#e9ecef", color: "#6c757d" };
    }
  };

  // PROGRESS COLOR
  const getProgressColor = (p) => {
    if (p === 100) return "#22c55e";
    if (p > 50) return "#3b82f6";
    if (p > 0) return "#f59e0b";
    return "#ced4da";
  };

  // ACTION ICONS LOGIC
  const renderActions = (row) => {
     return (
      <div className="d-flex align-items-center gap-3">

        {/* IN PROGRESS */}
        {row.status === "In Progress" && (
          <>
            <FaPause style={{ color: "#f97316", cursor: "pointer" }} />
            <FaCheckCircle style={{ color: "#22c55e", cursor: "pointer" }} />
          </>
        )}

        {/* NOT STARTED */}
        {row.status === "Not Started" && (
          <FaPlay style={{ color: "#22c55e", cursor: "pointer" }} />
        )}

        {/* COMMON */}
        <FaEye style={{ color: "#3e78f6", cursor: "pointer" }} onClick={() => setShow404(true)}/>
        <FaPrint style={{ color: "#6b7280", cursor: "pointer" }} />
      </div>
    );
  };

  const filteredData =
  statusFilter === "All Status"
    ? data
    : data.filter((row) => row.status === statusFilter);

    if (show404) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f9fafb",
      }}
    >
      <h1 style={{ fontSize: "80px" }}>404</h1>
      <h4>Page not found</h4>

      <button
        onClick={() => navigate("/dashboard")}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Go to Dashboard
      </button>
    </div>
  );
}
  return (

    <div style={{ marginLeft: "250px", paddingTop: "80px" }}>
      <div className="container-fluid">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h3 className="fw-bold">Work Orders</h3>
          <p className="text-muted mb-0">
           Manage and track production work orders
          </p>
        </div>

        <button onClick={() =>{setMode("add"); setShowForm(true);} }
                className="btn btn-primary" style={{padding: "10px 35px", background: "#17039d", color: "#fff"}}>
                  + Create Work Orders
                </button>
      </div>

     {/* CARDS */}
<div className="row g-3 mb-4 mt-4">

  {/* CARD STYLE COMMON */}
  {[
    { title: "Total Work Orders", value: "6", color: "dark" },
    { title: "In Progress", value: "2", color: "primary" },
    { title: "Completed", value: "1", color: "success" },
    { title: "On Hold", value: "1", color: "warning" },
  ].map((item, index) => (
    <div className="col-md-3" key={index}>
      <div
        className="card d-flex justify-content-center"
        style={{
          height: "100px",              
          borderRadius: "16px",
          border: "1px solid #e5e7eb",
          boxShadow: "0 4px 10px rgba(0,0,0,0.06)", 
          padding: "16px",
          transition: "0.2s ease",
          cursor: "pointer",
          fontSize: "16px"
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.boxShadow =
            "0 6px 14px rgba(0,0,0,0.1)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.boxShadow =
            "0 4px 10px rgba(0,0,0,0.06)")
        }
      >
        <div>
          <div className="text-muted small">{item.title}</div>
          <h5 className={`fw-bold mb-0 text-${item.color}`}>
            {item.value}
          </h5>
        </div>
      </div>
    </div>
  ))}

</div>

{/* SEARCH + FILTER CARD */}
<div
  className="card p-3 mb-3"
  style={{
    borderRadius: "14px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    background: "#fff",
    paddingBottom:"5px"
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      flexWrap: "wrap",
    }}
  >

    {/* SEARCH */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flex: 1,
        minWidth: "250px",
        border: "1px solid #d0d1d4",
        borderRadius: "10px",
        height: "40px",
        padding: "0 10px",
      }}
    >
      <FaSearch className="text-muted me-2" />

      <input
        type="text"
        placeholder="Search by WO ID or Item name..."
        style={{
          border: "none",
          outline: "none",
          width: "100%",
          fontSize: "14px",
        }}
      />
    </div>

   <select
  value={statusFilter}
  onChange={(e) => setStatusFilter(e.target.value)}
  style={{ width: "180px", height: "40px", borderRadius: "10px", border: "1px solid #d0d1d4", padding: "0 8px", background: "#fff", }}
>
  <option value="All Status">All Status</option>
  <option value="Not Started">Not Started</option>
  <option value="In Progress">In Progress</option>
  <option value="On Hold">On Hold</option>
  <option value="Completed">Completed</option>
</select>

    {/* FILTER BUTTON */}
    <button
      style={{
        height: "40px",
        minWidth: "140px",
        borderRadius: "10px",
        border: "1px solid #d0d1d4",
        background: "#f9fafb",
        padding: "0 12px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      <FaFilter className="text-muted" />
      More Filters
    </button>

  </div>
</div>
         
<table
  className="table align-middle mb-0"
  style={{ fontSize: "15px" }}   
>
  <thead
  className="table-light"
  style={{
    fontSize: "12px",         
    color: "#cdd2da",          
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  }}
>
  <tr>
    <th style={{ padding: "12px 10px", fontWeight: 500 }}>WORK ORDER ID</th>
    <th style={{ padding: "12px 10px", fontWeight: 500 }}>ITEM</th>
    <th style={{ padding: "12px 10px", fontWeight: 500 }}>QUANTITY</th>
    <th style={{ padding: "12px 10px", fontWeight: 500 }}>MACHINE</th>
    <th style={{ padding: "12px 10px", fontWeight: 500 }}>PROGRESS</th>
    <th style={{ padding: "12px 10px", fontWeight: 500 }}>STATUS</th>
    <th style={{ padding: "12px 10px", fontWeight: 500 }}>START DATE</th>
    <th style={{ padding: "12px 10px", fontWeight: 500 }}>ACTIONS</th>
  </tr>
</thead>
  <tbody>
    {filteredData.map((row, index) => (
      <tr key={index}>

        {/* ID */}
        <td
          style={{
            color: "#2563eb",
            fontWeight: 500,
            padding: "14px 10px",   
          }}
        >
          {row.id}
        </td>

        {/* ITEM */}
        <td style={{ padding: "14px 10px" }}>
          <div className="fw-semibold">{row.item}</div>
          <div className="text-muted small">{row.code}</div>
        </td>

        {/* QTY */}
        <td style={{ padding: "14px 10px" }}>
          <div className="fw-semibold">{row.qty} pcs</div>
          <div className="text-muted small">
            Produced: {row.produced}
          </div>
        </td>

        {/* MACHINE */}
        <td style={{ padding: "14px 10px" }}>{row.machine}</td>

        {/* PROGRESS */}
        <td style={{ width: "140px", padding: "14px 10px" }}>
          <div className="d-flex align-items-center gap-2">

            <div
              style={{
                height: "6px",
                width: "100%",
                background: "#e5e7eb",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${row.progress}%`,
                  height: "100%",
                  background: getProgressColor(row.progress),
                }}
              />
            </div>

            <small style={{ fontSize: "13px" }}>
              {row.progress}%
            </small>

          </div>
        </td>

        {/* STATUS */}
        <td style={{ padding: "14px 10px" }}>
          <span
            style={{
              padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "13px",
              ...getStatusStyle(row.status),
            }}
          >
            {row.status}
          </span>
        </td>

        {/* DATE */}
        <td style={{ padding: "14px 10px" }}>{row.date}</td>

        {/* ACTIONS */}
        <td style={{ padding: "14px 10px" }}>
          {renderActions(row)}
        </td>

      </tr>
    ))}
  </tbody>
</table>
    </div>
    </div>
  );
} 