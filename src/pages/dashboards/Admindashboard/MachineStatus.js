import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaExclamationTriangle } from "react-icons/fa";

export default function MachineMonitoring() {
  const machines = [
    {
      name: "DCM-01",
      desc: "Die Casting Machine #1",
      status: "Running",
      capacity: "650T Clamping",
      oee: 82,
      temp: "215°C / 220°C",
      wo: "WO-2024-0891",
    },
    {
      name: "DCM-02",
      desc: "Die Casting Machine #2",
      status: "Idle",
      capacity: "400T Clamping",
      oee: 78,
      temp: "0°C / 220°C",
      wo: "—",
    },
    {
      name: "DCM-03",
      desc: "Die Casting Machine #3",
      status: "Running",
      capacity: "800T Clamping",
      oee: 88,
      temp: "218°C / 220°C",
      wo: "Completed",
    },
    {
      name: "DCM-04",
      desc: "Die Casting Machine #4",
      status: "Alarm",
      capacity: "280T Clamping",
      oee: 61,
      temp: "234°C / 220°C",
      wo: "WO-2024-0895",
    },
    {
      name: "DCM-05",
      desc: "Trim Press #1",
      status: "Maintenance",
      capacity: "50T",
      oee: 0,
      temp: "",
      wo: "—",
    },
    {
      name: "DCM-06",
      desc: "Shot Blast Machine",
      status: "Running",
      capacity: "—",
      oee: 91,
      temp: "",
      wo: "Batch: SB-0048",
    },
  ];

  const getStatusColor = (status) => {
    if (status === "Running") return "green";
    if (status === "Idle") return "gray";
    if (status === "Maintenance") return "#f59e0b";
    if (status === "Alarm") return "red";
  };

  const getOEEColor = (oee) => {
    if (oee >= 85) return "#16a34a";
    if (oee >= 70) return "#f59e0b";
    return "#ef4444";
  };

  // Blink State
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  const statusDot = (color) => ({
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    display: "inline-block",
    background: color,
    boxShadow: `0 0 8px ${color}66`,
  });

  return (
    <div
      className="container-fluid p-4"
      style={{ background: "#f5f6fa", minHeight: "100vh" }}
    >
      {/* HEADER */}
      <h2 className="fw-bold">Machine Monitoring</h2>
      <p className="text-muted">
        Real-time monitoring of all production equipment
      </p>

      {/* CARDS */}
      <div className="row g-4 mt-2">
        <div className="col-md-3">
          <div className="card p-3 shadow-sm rounded-4">
            <p className="text-muted mb-1">Total Machines</p>
            <h3 className="fw-bold">6</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 shadow-sm rounded-4">
            <p className="text-muted mb-1">Running</p>
            <h3 className="fw-bold text-success">3</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 shadow-sm rounded-4">
            <p className="text-muted mb-1">Alarms</p>
            <h3 className="fw-bold text-danger">1</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 shadow-sm rounded-4">
            <p className="text-muted mb-1">Avg OEE</p>
            <h3 className="fw-bold text-primary">67%</h3>
          </div>
        </div>
      </div>

      {/* ALERT */}
      <div
        className="mt-4 p-4 rounded-3 shadow-sm"
        style={{ background: "#fdecea", borderLeft: "6px solid red" }}
      >
        <div className="d-flex align-items-start gap-3">
          <FaExclamationTriangle size={28} color="red" />
          <div>
            <h5 className="fw-bold text-danger">Critical Alert: DCM-04</h5>
            <p className="text-danger">
              Temperature exceeded 220°C (Current: 234°C)
            </p>
            <button
              className="btn btn-danger fw-semibold"
              style={{ fontSize: "14px" }}
            >
              {" "}
              Acknowledge Alarm{" "}
            </button>
          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="row g-4 mt-4">
        {machines.map((m, i) => (
          <div className="col-md-4" key={i}>
            <div
              className="card p-3 shadow-sm rounded-4 h-100"
              style={{
                backgroundColor:
                  m.status === "Alarm" && blink
                    ? "rgba(180, 180, 180, 0.5)"
                    : "#ffffff",

                border:
                  m.status === "Alarm" && blink
                    ? "1px solid red"
                    : "1px solid rgba(0,0,0,0.1)",

                transition: "all 0.4s ease-in-out",
              }}
            >
              {/* HEADER */}
              <div className="d-flex justify-content-between align-items-center mt-2">
                <h5 className="fw-bold">{m.name}</h5>
                <span
                  style={{
                    color: getStatusColor(m.status),
                    fontWeight: 500,
                  }}
                >
                  ● {m.status}
                </span>
              </div>

              <p className="text-muted mb-2">{m.desc}</p>

              {/* CAPACITY */}
              <p className="mb-1 text-muted">Capacity</p>
              <h6 className="fw-bold">{m.capacity}</h6>

              <hr />

              {/* OEE */}
              <div className="d-flex justify-content-between">
                <span className="text-muted">OEE</span>
                <span
                  style={{
                    color: getOEEColor(m.oee),
                    fontWeight: 600,
                  }}
                >
                  {m.oee}%
                </span>
              </div>

              <div className="progress mb-3" style={{ height: "8px" }}>
                <div
                  className="progress-bar"
                  style={{
                    width: `${m.oee}%`,
                    background: getOEEColor(m.oee),
                  }}
                ></div>
              </div>

              {/* TEMPERATURE */}
              {m.temp && (
                <>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Temperature</span>
                    <span
                      style={{
                        fontWeight: 600,
                        color: m.status === "Alarm" ? "red" : "#d97706",
                      }}
                    >
                      {m.temp}
                    </span>
                  </div>

                  <div className="progress mb-3" style={{ height: "8px" }}>
                    <div
                      className="progress-bar"
                      style={{
                        width: "95%",
                        background: m.status === "Alarm" ? "red" : "#f59e0b",
                      }}
                    ></div>
                  </div>
                </>
              )}

              {/* WORK ORDER */}
              <p className="text-muted mb-1">Current Work Order</p>
              <p className="fw-semibold">{m.wo}</p>

              {/* BUTTONS */}
              <div className="d-flex gap-2 mt-2">
                <button className="btn btn-primary w-100">
                  ⚡ View Details
                </button>

                {m.status === "Alarm" && (
                  <button className="btn btn-danger w-100">Acknowledge</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* TABLE */}
      <div className="mt-5 card p-4 shadow-sm rounded-4">
        <h5 className="fw-bold mb-3">Machine OEE Breakdown</h5>

        <table
          className="table align-middle text-muted"
          style={{ fontSize: "14px" }}
        >
          {/* HEADER */}
          <thead style={{ background: "#f1f5f9" }}>
            <tr style={{ fontSize: "13px", color: "#6b7280" }}>
              <th>MACHINE</th>
              <th>OVERALL OEE</th>
              <th>AVAILABILITY</th>
              <th>PERFORMANCE</th>
              <th>QUALITY</th>
              <th>STATUS</th>
              <th>TOP LOSS</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {/* DCM-01 */}
            <tr>
              <td className="fw-semibold text-dark">DCM-01</td>
              <td style={{ color: "#16a34a", fontWeight: 600 }}>82%</td>
              <td>88%</td>
              <td>93%</td>
              <td>99.5%</td>
              <td>
                <span style={statusDot("#22c55e")} />
              </td>
              <td>Reduced Speed</td>
            </tr>

            {/* DCM-02 */}
            <tr>
              <td className="fw-semibold text-dark">DCM-02</td>
              <td style={{ color: "#f97316", fontWeight: 600 }}>78%</td>
              <td>85%</td>
              <td>92%</td>
              <td>99.4%</td>
              <td>
                <span style={statusDot("#facc15")} />
              </td>
              <td>Setup Time</td>
            </tr>

            {/* DCM-03 */}
            <tr>
              <td className="fw-semibold text-dark">DCM-03</td>
              <td style={{ color: "#16a34a", fontWeight: 600 }}>88%</td>
              <td>93%</td>
              <td>95%</td>
              <td>99.7%</td>
              <td>
                <span style={statusDot("#22c55e")} />
              </td>
              <td>Minor Stops</td>
            </tr>

            {/* DCM-04 (ALARM FIXED + CLEAN BLINK STYLE READY) */}
            <tr
              style={{
                background: "rgba(239, 68, 68, 0.12)",
                transition: "0.3s",
              }}
            >
              <td className="fw-semibold text-dark">DCM-04</td>

              <td style={{ color: "#dc2626", fontWeight: 700 }}>61%</td>

              <td>71%</td>
              <td>87%</td>
              <td>98.9%</td>

              <td>
                <span style={statusDot("#ef4444")} />
              </td>

              <td className="fw-semibold text-black">
                Breakdowns – Needs Attention
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SMALL REUSABLE STYLE FUNCTION */}
      <script>
        {`
  function statusDot(color) {
    return {
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      display: "inline-block",
      background: color,
      boxShadow: \`0 0 8px \${color}66\`,
    };
  }
`}
      </script>
    </div>
  );
}
