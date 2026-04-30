import React from "react";

const CameraDetection = () => {
  const iconGreen = {
    width: 44,
    height: 44,
    borderRadius: 12,
    background: "#d1f5dc",
    color: "#198754",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontweight: "bold",
  };
  const iconRed = {
    width: 44,
    height: 44,
    borderRadius: 12,
    background: "#fde2e2",
    color: "#dc3545",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontweight: "bold",
  };
  const iconWarning = {
    width: 44,
    height: 44,
    borderRadius: 12,
    background: "#fff3cd",
    color: "#d97706",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontweight: "bold",
  };

  const pillGreen = {
  backgroundColor: "#d1f2dd",
  color: "#099252",
  padding: "2px 6px",
  borderRadius: "6px",
  fontSize: "12px",
  display: "inline-block",
  fontWeight: "500",
};

const pillGray = {
  backgroundColor: "#f4f7f9",
  color: "#6c757d",
  padding: "2px 6px",
  borderRadius: "6px",
  fontSize: "12px",
  display: "inline-block",
  fontWeight: "500",
};

const btnSky = {
  backgroundColor: "#336de1",
  color: "#fff",
  border: "none",
  padding: "4px 8px",
  borderRadius: "6px",
  fontSize: "12px",
  marginRight: "6px",
  fontWeight: "500",
};

const btnGray = {
  backgroundColor: "#dee2e6",
  color: "#444444",
  border: "none",
  padding: "4px 8px",
  borderRadius: "6px",
  fontSize: "12px",
  fontWeight: "500",
};

  return (
    <div style={{ padding: "20px", background: "#fff" }}>
      {/*HEADER */}
      <h2 style={{ fontweight: "700" }}>AI Camera Detection System</h2>
      <p style={{ color: "#64748b", marginBottom: "25px" }}>
        Real-time AI-powered quality inspection and part recognition
      </p>

      {/* TOP CARDS */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "25px" }}>
        {[
          {
            title: "Cameras Active",
            value: "4 / 4",
            color: "#16a34a",
            icon: "📷",
            iconBg: "#dcfce7",
          },
          {
            title: "Detections Today",
            value: "1,284",
            color: "#2563eb",
            icon: "📈",
            iconBg: "#dbeafe",
          },
          {
            title: "Accuracy",
            value: "97.3%",
            color: "#9333ea",
            icon: "🎯",
            iconBg: "#efdfff",
          },
          {
            title: "Alerts Today",
            value: "3",
            color: "#ea580c",
            icon: "⚠️",
            iconBg: "#fed7aa",
          },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: "#fff",
              borderRadius: "14px",
              padding: "18px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <div
              style={{
                background: item.iconBg,
                padding: "12px",
                borderRadius: "12px",
                fontSize: "24px",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
              }}
            >
              {item.icon}
            </div>
            <div>
              <p style={{ margin: 0, color: "#64748b", fontSize: "14px" }}>
                {item.title}
              </p>
              <h4
                style={{
                  margin: "4px 0 0 0",
                  color: item.color,
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                {item.value}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* CAMERA SECTION */}
      <h5 style={{ marginBottom: "15px" }}>Live Camera Feeds</h5>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {/* CAMERA CARD */}
        {[
          {
            cam: "CAM-01",
            floor: "Production Floor - DCM-01",
            part: "Gearbox Housing",
            confidence: "99.1%",
            time: "10:42 AM",
          },
          {
            cam: "CAM-02",
            floor: "Production Floor - DCM-03",
            part: "Valve Cover",
            confidence: "98.7%",
            time: "10:38 AM",
          },
          {
            cam: "CAM-03",
            floor: "Quality Inspection Station",
            part: "Porosity defect",
            confidence: "94.2%",
            time: "10:41 AM",
          },
          {
            cam: "CAM-04",
            floor: "Receiving / GRN Area",
            part: "248 pcs",
            confidence: "98.5%",
            time: "10:40 AM",
          },
        ].map((cam, i) => (
          <div
            key={i}
            style={{
              flex: "0 0 calc(50% - 10px)",
              background: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              transition: "all 0.2s ease",
              border: "1px solid transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = "2px solid #0456d1";
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {  
              e.currentTarget.style.border = "1px solid transparent";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
            }}
          >
            {/* HEADER */}
            <div
              style={{
                background: "#0f172a",
                color: "#fff",
                padding: "12px 15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontWeight: "600" }}>🟢 {cam.cam}</div>
                <small style={{ color: "#94a3b8" }}>{cam.floor}</small>
              </div>

              <span
                style={{
                  background: "#16a34a",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  fontSize: "12px",
                }}
              >
                Online
              </span>
            </div>

            {/* LIVE FEED */}
            <div
              style={{
                height: "260px",
                background: "#2b2f4a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#cbd5f5",
                position: "relative",
                flexDirection: "column",
              }}
            >
              {/* CAMERA ICON */}
              <div style={{ fontSize: "70px", opacity: 0.5 }}>📷</div>

              <p style={{ marginTop: "8px" }}>Live Feed Active</p>

              {/* LABEL */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "#22c55e",
                  color: "#000",
                  padding: "1px 2px",
                  borderRadius: "5px",
                  fontSize: "12px",
                  fontWeight: "400",
                  textAlign: "center",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                }}
              >
                {cam.part}
                <br />- {cam.confidence}
              </div>
            </div>

            {/* FOOTER */}
            <div style={{ padding: "15px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <p style={{ margin: 0, color: "#64748b" }}>Last Detection:</p>
                  <b>{cam.part} detected</b>
                  <p style={{ fontSize: "13px", color: "#64748b" }}>
                    {cam.time}
                  </p>
                </div>

                <div style={{ textAlign: "right" }}>
                  <p style={{ margin: 0, color: "#64748b" }}>Confidence:</p>
                  <b style={{ color: "#16a34a" }}>{cam.confidence}</b>
                </div>
              </div>

              <button
                style={{
                  width: "100%",
                  marginTop: "10px",
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  padding: "10px",
                  borderRadius: "6px",
                }}
              >
                View Full Screen
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-3 mt-4">
        {/* ================= LEFT CARD ================= */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body p-0">
              {/* HEADER */}
              <div className="p-3 border-bottom">
                <h5 className="mb-0 fw-semibold">Recent Detections</h5>
              </div>

              {/* LIST */}
              <div style={{ maxHeight: "350px", overflowY: "auto" }}>
                {/* 1 */}
                <div className="d-flex gap-3 p-3 border-bottom">
                  <div style={iconGreen}>✓</div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between">
                      <strong>CAM-01</strong>
                      <small className="text-muted">10:42 AM</small>
                    </div>
                    <div className="text-muted">Gearbox Housing</div>
                    <div className="text-success small">
                      Match ✅{" "}
                      <span className="text-muted">99.1% confidence</span>
                    </div>
                  </div>
                </div>

                {/* 2 */}
                <div className="d-flex gap-3 p-3 border-bottom">
                  <div style={iconWarning}>⚠</div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between">
                      <strong>CAM-03</strong>
                      <small className="text-muted">10:41 AM</small>
                    </div>
                    <div className="text-muted">Porosity Defect</div>
                    <div style={{ color: "#d97706" }} className="small">
                      DEFECT ⚠️{" "}
                      <span className="text-muted">94.2% confidence</span>
                    </div>
                  </div>
                </div>

                {/* 3 */}
                <div className="d-flex gap-3 p-3 border-bottom">
                  <div style={iconGreen}>✓</div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between">
                      <strong>CAM-04</strong>
                      <small className="text-muted">10:40 AM</small>
                    </div>
                    <div className="text-muted">Steel Insert Qty: 248 pcs</div>
                    <div className="text-success small">
                      Match ✅{" "}
                      <span className="text-muted">98.5% confidence</span>
                    </div>
                  </div>
                </div>

                {/* 4 */}
                <div className="d-flex gap-3 p-3 border-bottom">
                  <div style={iconGreen}>✓</div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between">
                      <strong>CAM-02</strong>
                      <small className="text-muted">10:38 AM</small>
                    </div>
                    <div className="text-muted">Valve Cover</div>
                    <div className="text-success small">
                      Match ✅{" "}
                      <span className="text-muted">97.8% confidence</span>
                    </div>
                  </div>
                </div>

                {/* 5 */}
                <div className="d-flex gap-3 p-3 border-bottom">
                  <div style={iconRed}>❌</div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between">
                      <strong>CAM-01</strong>
                      <small className="text-muted">10:35 AM</small>
                    </div>
                    <div className="text-muted">Unknown item detected</div>
                    <div className="text-danger small">
                      MISMATCH ❌{" "}
                      <span className="text-muted">61.3% confidence</span>
                    </div>
                  </div>
                </div>

                {/* 6 */}
                <div className="d-flex gap-3 p-3 border-bottom">
                  <div style={iconGreen}>✓</div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between">
                      <strong>CAM-03</strong>
                      <small className="text-muted">10:30 AM</small>
                    </div>
                    <div className="text-muted">Surface inspection</div>
                    <div className="text-success small">
                      Pass ✅{" "}
                      <span className="text-muted">96.7% confidence</span>
                    </div>
                  </div>
                </div>

                {/* 7 */}
                <div className="d-flex gap-3 p-3 border-bottom">
                  <div style={iconGreen}>✓</div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between">
                      <strong>CAM-02</strong>
                      <small className="text-muted">10:28 AM</small>
                    </div>
                    <div className="text-muted">Valve Cover</div>
                    <div className="text-success small">
                      Match ✅{" "}
                      <span className="text-muted">98.1% confidence</span>
                    </div>
                  </div>
                </div>

                {/* 8 */}
                <div className="d-flex gap-3 p-3">
                  <div style={iconGreen}>✓</div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between">
                      <strong>CAM-01</strong>
                      <small className="text-muted">10:25 AM</small>
                    </div>
                    <div className="text-muted">Gearbox Housing</div>
                    <div className="text-success small">
                      Match ✅{" "}
                      <span className="text-muted">99.3% confidence</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ================= RIGHT CARD ================= */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="fw-semibold mb-3">Active Alerts</h5>

              {/* ALERT */}
              <div className="d-flex gap-3 border-bottom py-3">
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "#f0ad4e",
                    marginTop: 6,
                  }}
                ></div>

                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between">
                    <strong>CAM-01</strong>
                    <small className="text-muted">10:35 AM</small>
                  </div>

                  <div className="text-muted">
                    Unknown item detected (conf: 61.3%)
                  </div>

                  <div className="mt-2 d-flex gap-2">
                    <button className="btn btn-primary btn-sm">
                      Investigate
                    </button>
                    <button
                      className="btn btn-sm"
                      style={{
                        backgroundColor: "#c2bfbf",
                        color: "#4b4a4a",
                        fontWeight: "500",
                      }}
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>

              {/* ALERT */}
              <div className="d-flex gap-3 border-bottom py-3">
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "#f0ad4e",
                    marginTop: 6,
                  }}
                ></div>

                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between">
                    <strong>CAM-03</strong>
                    <small className="text-muted">10:41 AM</small>
                  </div>

                  <div className="text-muted">Porosity defect on FG-005</div>

                  <div className="mt-2 d-flex gap-2">
                    <button className="btn btn-primary btn-sm">
                      Investigate
                    </button>
                    <button
                      className="btn btn-sm"
                      style={{
                        backgroundColor: "#c2bfbf",
                        color: "#4b4a4a",
                        fontWeight: "500",
                      }}
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>

              {/* RESOLVED */}
              <div className="d-flex gap-3 py-3 bg-light rounded">
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "#28a745",
                    marginTop: 6,
                  }}
                ></div>

                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between">
                    <strong>CAM-04</strong>
                    <small className="text-muted">09:12 AM</small>
                  </div>

                  <div className="text-muted">
                    Quantity mismatch (247 vs 248)
                  </div>

                  <div className="text-success small mt-1">✓ Resolved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Table ================= */}
      <div className="card shadow-sm mt-4">
        <div className="card-body">
          {/* HEADER */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-semibold mb-0">AI Models Library</h5>

            <button
              className="btn btn-sm text-white"
              style={{ backgroundColor: "#7838ef", fontWeight: "500" }}
            >
              Train New Model
            </button>
          </div>

          {/* TABLE */}
          <div className="table-responsive">
            <table className="table align-middle table-hover">
              <thead
                className="table-light"
                className="text-muted"
                style={{
                  fontSize: "12px",
                  color: "#788189",
                  textTransform: "uppercase",
                  letterSpacing: "0.7px",
                  fontWeight: "500",
                }}
              >
                <tr>
                  <th className="text-muted">Model ID</th>
                  <th className="text-muted">NAME</th>
                  <th className="text-muted">VERSION</th>
                  <th className="text-muted">ACCURACY</th>
                  <th className="text-muted">DEPLOYED TO</th>
                  <th className="text-muted">ACTIONS</th>
                </tr>
              </thead>
              <tbody>

                {/* ROW 1 */}
                <tr>
                  <td>
                    <span className="fw-bold" style={{ fontSize: "13px" }}>
                      MODEL-001
                    </span>
                  </td>
                  <td>Gearbox Housing Recognition</td>
                  <td>v3.1</td>

                  {/* Accuracy*/}
                  <td className="text-success fw-bold">99.1%</td>

                  {/* Deployed*/}
                  <td>
                    <span style={pillGreen}>CAM-01</span>
                  </td>
                    
                  <td>
                    <button style={btnSky}>Redeploy</button>
                    <button style={btnGray}>Edit</button>
                  </td>
                </tr>

                {/* ROW 2 */}
                <tr>
                  <td>
                    <span className="fw-bold" style={{ fontSize: "13px" }}>
                      MODEL-002
                    </span>
                  </td>
                  <td>Defect Detection - Porosity</td>
                  <td>v2.4</td>
                  <td className="text-success fw-bold">94.2%</td>

                  <td>
                    <span style={pillGreen}>CAM-03</span>
                  </td>

                  <td>
                    <button style={btnSky}>Redeploy</button>
                    <button style={btnGray}>Edit</button>
                  </td>
                </tr>

                {/* ROW 3 */}
                <tr>
                  <td>
                    <span className="fw-bold" style={{ fontSize: "13px" }}>
                      MODEL-003
                    </span>
                  </td>
                  <td>General Part Counter</td>
                  <td>v1.8</td>
                  <td className="text-success fw-bold">98.5%</td>

                  <td>
                    <span style={pillGreen}>CAM-04</span>
                  </td>

                  <td>
                    <button style={btnSky}>Redeploy</button>
                    <button style={btnGray}>Edit</button>
                  </td>
                </tr>

                {/* ROW 4 */}
                <tr>
                  <td>
                    <span className="fw-bold" style={{ fontSize: "13px" }}>
                      MODEL-004
                    </span>
                  </td>
                  <td>Engine Bracket Recognition</td>
                  <td>v1.0</td>
                  <td className="text-success fw-bold">96.7%</td>

                  <td>
                    <span style={pillGray}>Not Deployed</span>
                  </td>

                  <td>
                    <button style={btnSky}>Deploy</button>
                    <button style={btnGray}>Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraDetection;
