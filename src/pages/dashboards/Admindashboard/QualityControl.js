import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaFilter, FaPlus } from "react-icons/fa";
import { FaClipboardList, FaExclamationCircle, FaLayerGroup, FaCheckCircle,} from "react-icons/fa";

export default function QualityControl() {
  const [severityFilter, setSeverityFilter] = useState("All");

  const data = [
    {
      id: "NCR-001",
      type: "Internal",
      desc: "Porosity defect in FG-005 Crankcase Cover",
      severity: "Major",
      status: "Under Review",
      assigned: "Rajesh Kumar",
    },
    {
      id: "NCR-002",
      type: "Supplier",
      desc: "Dimensional deviation in CP-001 Insert M8",
      severity: "Minor",
      status: "Closed",
      assigned: "Priya Sharma",
    },
    {
      id: "NCR-003",
      type: "Internal",
      desc: "Cold shut defect - FG-001 Gearbox Housing",
      severity: "Critical",
      status: "Corrective Action",
      assigned: "Kavita Joshi",
    },
    {
      id: "NCR-004",
      type: "Customer",
      desc: "Surface finish not as per Maruti spec",
      severity: "Major",
      status: "8D in Progress",
      assigned: "Priya Sharma",
    },
  ];

  // FILTER LOGIC
  const filteredData =
    severityFilter === "All"
      ? data
      : data.filter(
          (row) => row.severity.toLowerCase() === severityFilter.toLowerCase(),
        );

  //  STYLE FUNCTIONS
  const getSeverityStyle = (sev) => {
    if (sev === "Critical") return { background: "#fdecea", color: "#dc3545" };
    if (sev === "Major") return { background: "#fff3cd", color: "#f59f00" };
    if (sev === "Minor") return { background: "#e7f1ff", color: "#0d6efd" };
  };

  const getStatusStyle = (status) => {
    if (status === "Closed") return { background: "#e6f4ea", color: "#198754" };
    if (status === "Under Review")
      return { background: "#e7f1ff", color: "#2563eb" };
    if (status === "Corrective Action")
      return { background: "#fff3cd", color: "#f59f00" };
    if (status === "8D in Progress")
      return { background: "#f3e8ff", color: "#7c3aed" };
  };

  return (
    <div className="container-fluid py-3">
      <div className="container-fluid">
        {/* HEADER */}
        <div className="d-flex justify-content-between mb-4 mt-3">
          <div>
            <h2 className="fw-bold">Non-Conformance Reports (NCR)</h2>
            <p className="text-muted" style={{fontSize:"17px"}}>
              Track and manage quality non-conformances
            </p>
          </div>

          <button
            className="btn btn-danger"
            style={{
              padding: "4px 10px",
              width: "160px",
              height: "50px",
              fontSize: "16px",
              borderRadius: "8px",
              fontWeight: "500",
            }}
          >
            <FaPlus style={{marginRight:"5px"}}/> Create NCR
          </button>
        </div>
        <div className="row g-3 mb-4">
          {/* Open NCRs */}
          <div className="col-md-3">
            <div
              className="card p-3 shadow-sm d-flex flex-row align-items-center gap-3"
              style={{ borderRadius: "12px" }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "10px",
                  background: "#e7f1ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
            <div
              className="card p-3 shadow-sm d-flex flex-row align-items-center gap-3"
              style={{ borderRadius: "12px" }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "10px",
                  background: "#fdecea",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
            <div
              className="card p-3 shadow-sm d-flex flex-row align-items-center gap-3"
              style={{ borderRadius: "12px" }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "10px",
                  background: "#fff3cd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
            <div
              className="card p-3 shadow-sm d-flex flex-row align-items-center gap-3"
              style={{ borderRadius: "12px" }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "10px",
                  background: "#e6f4ea",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
            {/* SEARCH */}
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
                fontWeight: "500",
              }}
            >
              <option value="All">All Severity</option>
              <option value="Critical">Critical</option>
              <option value="Major">Major</option>
              <option value="Minor">Minor</option>
            </select>

            {/* FILTER BUTTON */}
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
                fontWeight: "500",
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
                <th style={{ padding: "12px 10px", fontWeight: 500 }}>
                  NCR ID
                </th>
                <th style={{ padding: "12px 10px", fontWeight: 500 }}>TYPE</th>
                <th style={{ padding: "12px 10px", fontWeight: 500 }}>
                  DESCRIPTION
                </th>
                <th style={{ padding: "12px 10px", fontWeight: 500 }}>
                  SEVERITY
                </th>
                <th style={{ padding: "12px 10px", fontWeight: 500 }}>
                  STATUS
                </th>
                <th style={{ padding: "12px 10px", fontWeight: 500 }}>
                  ASSIGNED TO
                </th>
                <th style={{ padding: "12px 10px", fontWeight: 500 }}>
                  ACTIONS
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((row, i) => (
                <tr key={i}>
                  <td className="text-primary fw-semibold mt-3 mb-3">
                    {row.id}
                  </td>

                  <td>
                    <span className="badge bg-light text-dark mt-3 mb-3">
                      {row.type}
                    </span>
                  </td>

                  <td className="mt-3 mb-3">{row.desc}</td>

                  <td>
                    <span
                      style={{
                        padding: "5px 12px",
                        borderRadius: "20px",
                        marginTop: "3px",
                        marginBottom: "3px",
                        fontSize: "12px",
                        ...getSeverityStyle(row.severity),
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
                        marginTop: "3px",
                        marginBottom: "3px",
                        fontSize: "12px",
                        ...getStatusStyle(row.status),
                      }}
                    >
                      {row.status}
                    </span>
                  </td>

                  <td>{row.assigned}</td>

                  <td>
                    <button className="btn btn-primary btn-sm mt-3 mb-3">
                      View
                    </button>

                    {row.status === "8D in Progress" && (
                      <button
                        className="btn btn-purple btn-sm ms-2"
                        style={{ background: "#7c3aed", color: "#fff" }}
                      >
                        8D Report
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          className="card p-4 shadow-sm mt-4"
          style={{
            borderRadius: "12px",
            border: "2px solid #f5a3a3",
            background: "#fff",
          }}
        >
          {/* HEADER */}
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h5 className="fw-bold mb-1">
                NCR-003 - Critical Cold Shut Defect
              </h5>
              <small className="text-muted">
                Created: 09-Mar-2026 | Type: Internal
              </small>
            </div>

            <span
              className="badge"
              style={{
                background: "#fde2e2",
                color: "#d90429",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize:"13px",
                fontWeight: "500",
              }}
            >
              Critical
            </span>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-3">
            <h6 className="fw-semibold">Description</h6>
            <p className="mb-1">
              Cold shut defect on FG-001 Gearbox Housing | Qty: 12 pcs | Lot:
              LOT-2024-3810
            </p>
            <small className="text-muted">
              Severity: Critical (affects function — gearbox housing must be
              pressure-tight)
            </small>
          </div>

          {/* THREE BOXES */}
          <div className="row mt-1 g-3">
            {/* Containment */}
            <div className="col-md-4">
              <div
                className="p-3 h-100"
                style={{
                  background: "#fff7e6",
                  border: "1px solid #f7d27c",
                  borderRadius: "10px",
                }}
              >
                <h6 className="fw-semibold">Containment</h6>
                <p className="mb-1">12 pcs segregated & tagged "HOLD - QC"</p>
                <small className="text-muted">Disposition: Scrap</small>
              </div>
            </div>

            {/* Root Cause */}
            <div className="col-md-4">
              <div
                className="p-3 h-100"
                style={{
                  background: "#eef4ff",
                  border: "1px solid #a7c4ff",
                  borderRadius: "10px",
                }}
              >
                <h6 className="fw-semibold">Root Cause</h6>
                <p className="mb-1">5 Why analysis completed</p>
                <small className="text-muted">
                  Die temperature too low during startup
                </small>
              </div>
            </div>

            {/* Corrective Action */}
            <div className="col-md-4">
              <div
                className="p-3 h-100"
                style={{
                  background: "#f3efff",
                  border: "1px solid #d3c7ff",
                  borderRadius: "10px",
                }}
              >
                <h6 className="fw-semibold">Corrective Action</h6>
                <p className="mb-1">Implement die pre-heat cycle</p>
                <small className="text-muted">
                  Target: 15-Mar-2026 | Owner: Rajesh Kumar
                </small>
              </div>
            </div>
          </div>

          {/* PROGRESS BAR */}
          <div className="mt-4 pt-3 border-top">
            <div className="d-flex align-items-center justify-content-between">
              {[
                "Raised",
                "Investigation",
                "Containment",
                "Root Cause",
                "Corrective Action",
                "Verification",
              ].map((step, index) => {
                const isCompleted = index < 4;
                const isActive = index === 4;

                return (
                  <div
                    key={index}
                    className="d-flex align-items-center flex-grow-1"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <div
                        style={{
                          width: "32px",
                          height: "35px",
                          borderRadius: "50%",
                          background: isCompleted
                            ? "#22c55e"
                            : isActive
                              ? "#2563eb"
                              : "#ccc",
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        {isCompleted ? "✓" : index + 1}
                      </div>

                      <span
                        style={{
                          fontSize: "15px",
                          fontWeight: index <= 4 ? "600" : "400",
                          color: isActive ? "#2563eb" : "#333",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {step}
                      </span>
                    </div>

                    {index !== 5 && (
                      <div
                        style={{
                          height: "4px",
                          flexGrow: 1,
                          margin: "0 10px",
                          background:
                            index < 4
                              ? "#22c55e"
                              : index === 4
                                ? "#2563eb"
                                : "#ccc",
                        }}
                      ></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
