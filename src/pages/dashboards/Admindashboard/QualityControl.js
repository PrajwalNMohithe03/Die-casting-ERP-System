import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaFilter} from "react-icons/fa";
import { FaClipboardList, FaExclamationCircle, FaLayerGroup, FaCheckCircle } from "react-icons/fa";

export default function NCR() {

  const [severityFilter, setSeverityFilter] = useState("All");

  const data = [
    {
      id: "NCR-001",
      type: "Internal",
      desc: "Porosity defect in FG-005 Crankcase Cover",
      severity: "Major",
      status: "Under Review",
      assigned: "Rajesh Kumar"
    },
    {
      id: "NCR-002",
      type: "Supplier",
      desc: "Dimensional deviation in CP-001 Insert M8",
      severity: "Minor",
      status: "Closed",
      assigned: "Priya Sharma"
    },
    {
      id: "NCR-003",
      type: "Internal",
      desc: "Cold shut defect - FG-001 Gearbox Housing",
      severity: "Critical",
      status: "Corrective Action",
      assigned: "Kavita Joshi"
    },
    {
      id: "NCR-004",
      type: "Customer",
      desc: "Surface finish not as per Maruti spec",
      severity: "Major",
      status: "8D in Progress",
      assigned: "Priya Sharma"
    }
  ];

  // FILTER LOGIC
  const filteredData =
    severityFilter === "All"
      ? data
      : data.filter(
          (row) =>
            row.severity.toLowerCase() ===
            severityFilter.toLowerCase()
        );

  //  STYLE FUNCTIONS
  const getSeverityStyle = (sev) => {
    if (sev === "Critical") return { background: "#fdecea", color: "#dc3545" };
    if (sev === "Major") return { background: "#fff3cd", color: "#f59f00" };
    if (sev === "Minor") return { background: "#e7f1ff", color: "#0d6efd" };
  };

  const getStatusStyle = (status) => {
    if (status === "Closed") return { background: "#e6f4ea", color: "#198754" };
    if (status === "Under Review") return { background: "#e7f1ff", color: "#2563eb" };
    if (status === "Corrective Action") return { background: "#fff3cd", color: "#f59f00" };
    if (status === "8D in Progress") return { background: "#f3e8ff", color: "#7c3aed" };
  };

  return (
    <div style={{ marginLeft: "250px", paddingTop: "80px" }}>
      <div className="container-fluid">

      {/* HEADER */}
      <div className="d-flex justify-content-between mb-4">
        <div>
          <h2 className="fw-bold">Non-Conformance Reports (NCR)</h2>
          <p className="text-muted">Track and manage quality non-conformances</p>
        </div>

        <button className="btn btn-danger" style={{padding: "4px 16px", font:"bold", fontSize: "16px", borderRadius: "8px",  height: "48px"}}>
          + Create NCR
        </button>
      </div>

      <div className="row g-3 mb-4">

  {/* Open NCRs */}
  <div className="col-md-3">
    <div className="card p-3 shadow-sm d-flex flex-row align-items-center gap-3" style={{ borderRadius: "12px" }}>
      
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "10px",
          background: "#e7f1ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <FaClipboardList color="#0d6efd" size={20} />
      </div>

      <div>
        <div className="text-muted small">Open NCRs</div>
        <h5 className="fw-bold mb-0">3</h5>
      </div>

    </div>
  </div>

  {/* Critical */}
  <div className="col-md-3">
    <div className="card p-3 shadow-sm d-flex flex-row align-items-center gap-3" style={{ borderRadius: "12px" }}>
      
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "10px",
          background: "#fdecea",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <FaExclamationCircle color="#dc3545" size={20} />
      </div>

      <div>
        <div className="text-muted small">Critical</div>
        <h5 className="fw-bold mb-0 text-danger">1</h5>
      </div>

    </div>
  </div>

  {/* Major */}
  <div className="col-md-3">
    <div className="card p-3 shadow-sm d-flex flex-row align-items-center gap-3" style={{ borderRadius: "12px" }}>
      
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "10px",
          background: "#fff3cd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <FaLayerGroup color="#f59f00" size={20} />
      </div>

      <div>
        <div className="text-muted small">Major</div>
        <h5 className="fw-bold mb-0 text-warning">2</h5>
      </div>

    </div>
  </div>

  {/* Closed */}
  <div className="col-md-3">
    <div className="card p-3 shadow-sm d-flex flex-row align-items-center gap-3" style={{ borderRadius: "12px" }}>
      
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "10px",
          background: "#e6f4ea",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <FaCheckCircle color="#198754" size={20} />
      </div>

      <div>
        <div className="text-muted small">Closed</div>
        <h5 className="fw-bold mb-0 text-success">1</h5>
      </div>
    </div>
  </div>
</div>

      <div
  className="card p-3 mb-3 shadow-sm"
  style={{
    borderRadius: "14px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    background: "#fff",
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

    {/* 🔍 SEARCH */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flex: 1,
        minWidth: "260px",
        border: "1px solid #d0d1d4",
        borderRadius: "10px",
        height: "40px",
        padding: "0 10px",
      }}
    >
      <FaSearch className="text-muted me-2" />
      <input
        type="text"
        placeholder="Search by NCR ID or description..."
        style={{
          border: "none",
          outline: "none",
          width: "100%",
          fontSize: "14px",
        }}
      />
    </div>

    {/*  SEVERITY FILTER */}
    <select
      value={severityFilter}
      onChange={(e) => setSeverityFilter(e.target.value)}
      style={{
        width: "180px",
        height: "40px",
        borderRadius: "10px",
        border: "1px solid #d0d1d4",
        padding: "0 10px",
        background: "#fff",
        fontSize: "14px",
      }}
    >
      <option value="All">All Severity</option>
      <option value="Critical">Critical</option>
      <option value="Major">Major</option>
      <option value="Minor">Minor</option>
    </select>

    {/* 🔘 FILTER BUTTON */}
    <button
      style={{
        height: "40px",
        minWidth: "140px",
        borderRadius: "10px",
        border: "1px solid #d0d1d4",
        background: "#f9fafb",
        padding: "0 14px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        cursor: "pointer",
        fontSize: "14px",
      }}
    >
      <FaFilter className="text-muted" />
      More Filters
    </button>
  </div>
</div>

      {/* TABLE */}
      <div className="card shadow-sm">
        <table className="table align-middle mb-0">

          <thead className="table-light"
             style={{
             fontSize: "12px",         
             color: "#cdd2da",          
             textTransform: "uppercase",
             letterSpacing: "0.5px",
              }}>
            <tr>
              <th style={{ padding: "12px 10px", fontWeight: 500 }}>NCR ID</th>
              <th style={{ padding: "12px 10px", fontWeight: 500 }}>TYPE</th>
              <th style={{ padding: "12px 10px", fontWeight: 500 }}>DESCRIPTION</th>
              <th style={{ padding: "12px 10px", fontWeight: 500 }}>SEVERITY</th>
              <th style={{ padding: "12px 10px", fontWeight: 500 }}>STATUS</th>
              <th style={{ padding: "12px 10px", fontWeight: 500 }}>ASSIGNED TO</th>
              <th style={{ padding: "12px 10px", fontWeight: 500 }}>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((row, i) => (
              <tr key={i}>

                <td className="text-primary fw-semibold">{row.id}</td>

                <td>
                  <span className="badge bg-light text-dark">
                    {row.type}
                  </span>
                </td>

                <td>{row.desc}</td>

                <td>
                  <span
                    style={{
                      padding: "5px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      ...getSeverityStyle(row.severity)
                    }}
                  >
                    {row.severity}
                  </span>
                </td>

                <td>
                  <span
                    style={{
                      padding: "5px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      ...getStatusStyle(row.status)
                    }}
                  >
                    {row.status}
                  </span>
                </td>

                <td>{row.assigned}</td>

                <td>
                  <button className="btn btn-primary btn-sm">
                    View
                  </button>

                  {row.status === "8D in Progress" && (
                    <button className="btn btn-purple btn-sm ms-2"
                      style={{ background: "#7c3aed", color: "#fff" }}>
                      8D Report
                    </button>
                  )}
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
    </div>
  );
}