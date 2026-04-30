import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

export default function Mainapp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // FIXED USERS
  const users = [
    {
      role: "admin",
      email: "vikram.singh@precisioncast.com",
      password: "123456",
      route: "/admin/dashboard",
    },
    {
      role: "production",
      email: "rajesh.kumar@precisioncast.com",
      password: "123456",
      route: "/production",
    },
    {
      role: "quality",
      email: "priya.sharma@precisioncast.com",
      password: "123456",
      route: "/quality",
    },
    {
      role: "procurement",
      email: "amit.patel@precisioncast.com",
      password: "123456",
      route: "/procurement",
    },
    {
      role: "sales",
      email: "sneha.mehta@precisioncast.com",
      password: "123456",
      route: "/sales",
    },
  ];

  const validEmails = users.map(
    (u) => `${u.role.charAt(0).toUpperCase() + u.role.slice(1)}: ${u.email}`,
  );

  const handleLogin = () => {
    setSubmitted(true);

    if (!email || !password) {
      setError("⚠️ Please fill out this field.");
      return;
    }

    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (user) {
      localStorage.setItem("auth", "true");
      localStorage.setItem("userRole", user.role);
      setError("");
      navigate(user.route);
    } else {
      setError("invalid");
    }
  };

  const handleLogout = () => {
    setShowLogoutModal(false);
    alert("Logged out ✅");
    navigate("/");
  };

  return (
    <div
      className="container-fluid min-vh-100 text-white"
      style={{ backgroundColor: "#0436a3" }}
    >
      <div className="row align-items-center" style={{ minHeight: "100vh" }}>
        {/* LEFT SIDE */}
        <div
          className="col-md-6 d-flex flex-column justify-content-start p-7"
          style={{
            padding: "4rem 3rem",
            marginTop: "100px",
            paddingLeft: "150px",
          }}
        >
          <div className="d-flex align-items-center mb-4">
            <div
              className="bg-white text-primary rounded-3 d-flex justify-content-center align-items-center"
              style={{ width: 60, height: 60, fontSize: 32 }}
            >
              🏭
            </div>
            <div className="ms-3">
              <h1 className="mb-1" style={{ fontSize: 28 }}>
                Precision Cast Industries
              </h1>
              <p className="tagline" style={{ color: "#e0e7ff" }}>
                Excellence in Die Casting Since 1998
              </p>
            </div>
          </div>

          <h2
            className="d-flex align-items-center mb-2"
            style={{ fontSize: 22 }}
          >
            🏭 Die Casting ERP System
          </h2>

          <p
            className="mb-3"
            style={{ maxWidth: 500, fontSize: 16, color: "#e0e7ff" }}
          >
            Comprehensive enterprise resource planning for manufacturing
            excellence
          </p>

          <div className="mb-1" style={{ width: "700px" }}>
            <div
              className="p-5 rounded-2"
              style={{
                background: "#0336a4",
                border: "1px solid #033195",
                color: "#fff",
                boxShadow: "0 6px 16px #0436a3",
              }}
            >
              <strong style={{ fontSize: "15px" }}>Key Features:</strong>

              <ul
                className="mb-0 mt-3"
                style={{ fontSize: 14, paddingLeft: "0px", listStyle: "none" }}
              >
                <li className="d-flex align-items-center mb-2">
                  <span
                    style={{ color: "#fff !important", marginRight: "10px" }}
                  >
                    ✓
                  </span>
                  Planning & Work Orders
                </li>

                <li className="d-flex align-items-center mb-2">
                  <span
                    style={{ color: "#fff !important", marginRight: "10px" }}
                  >
                    ✓
                  </span>
                  Quality Control & NCR Management
                </li>

                <li className="d-flex align-items-center mb-2">
                  <span
                    style={{ color: "#fff !important", marginRight: "10px" }}
                  >
                    ✓
                  </span>
                  AI-Powered Camera Detection
                </li>

                <li className="d-flex align-items-center mb-2">
                  <span
                    style={{ color: "#fff !important", marginRight: "10px" }}
                  >
                    ✓
                  </span>
                  Real-time OEE Analytics
                </li>

                <li className="d-flex align-items-center mb-2">
                  <span
                    style={{ color: "#fff !important", marginRight: "10px" }}
                  >
                    ✓
                  </span>
                  Procurement & Supplier Management
                </li>

                <li className="d-flex align-items-center">
                  <span
                    style={{ color: "#fff !important", marginRight: "10px" }}
                  >
                    ✓
                  </span>
                  Sales & Customer Orders
                </li>
              </ul>
            </div>
          </div>

          <p className="small mt-3" style={{ maxWidth: 500, fontSize: "13px" }}>
            Pune, Maharashtra, India <br />
            GST: 27AABCP1234F1Z5
            <br />
            <br />
            Certifications: ISO 9001:2015, IATF 16949:2016
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="col-md-6 d-flex flex-column align-items-center justify-content-center p-5"
          style={{ marginTop: 40 }}
        >
          <div className="card shadow-lg p-4 rounded" style={{ width: 450 }}>
            <h1
              className="fw-bold mb-1"
              style={{ fontSize: 25, color: "#0f172a", marginBottom: "2px" }}
            >
              Welcome Back
            </h1>

            <p
              className="mb-4 text-secondary"
              style={{ fontSize: 17, marginBottom: "5px" }}
            >
              Sign in to access your dashboard
            </p>

            <div
              className="p-2 rounded mb-4"
              style={{
                fontSize: "12px",
                backgroundColor: "#e5ecfb",
                border: "1px solid #9cb9fe",
                color: "#0030a1",
              }}
            >
              <strong>Demo System:</strong> Use the demo accounts below or
              scroll down to click "Quick Login" buttons.
            </div>

            {/* ERROR */}
            {submitted && error === "invalid" && (
              <div
                className="p-3 mb-3"
                style={{
                  backgroundColor: "#fceeee",
                  borderRadius: "12px",
                  border: "1px solid #f5c2c2",
                  color: "#ad0303",
                }}
              >
                <p className="fw-bold mb-2" style={{ fontSize: "14px" }}>
                  🚫 Invalid email or password
                </p>

                <p className="small mb-3" style={{ opacity: 0.9 }}>
                  Please use one of the demo accounts below or check your
                  credentials.
                </p>

                {/* INNER DARK CARD */}
                <div
                  style={{
                    backgroundColor: "#fad4d4",
                    borderRadius: "10px",
                    padding: "15px",
                    color: "#8e0303",
                  }}
                >
                  <p className="mb-2" style={{ fontSize: "13px" }}>
                    <b>Valid Demo Accounts:</b>
                  </p>

                  <ul className="mb-0" style={{ paddingLeft: "18px" }}>
                    {validEmails.slice(0, 3).map((mail, index) => (
                      <li
                        key={index}
                        style={{
                          fontSize: "12px",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {mail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* EMAIL */}
            <label>Email Address</label>
            <div className="input-group mb-3">
              <span className="input-group-text">👤</span>
              <input
                type="email"
                className="form-control"
                placeholder="name@precisioncast.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
              />
            </div>

            {/* ERROR (EMPTY FIELDS) */}
            {submitted && error && error !== "invalid" && (
              <span
                style={{
                  backgroundColor: "#5a5a5a",
                  color: "#fff",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  fontSize: "14px",
                  display: "inline-block",
                }}
              >
                {error}
              </span>
            )}

            {/* PASSWORD */}
            <label>Password</label>
            <div className="input-group mb-3">
              <span className="input-group-text">🔒</span>
              <input
                type="password"
                className="form-control"
                placeholder="********"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
              />
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              {/* Remember Me */}
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember Me
                </label>
              </div>

              {/* Forgot Password */}
              <span
                style={{
                  cursor: "pointer",
                  color: "#2355c0",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
                onClick={() => alert("Forgot Password clicked")}
              >
                Forgot Password?
              </span>
            </div>

            <button
              className="btn btn-primary w-100 mb-3"
              style={{ background: "#0436a3" }}
              onClick={handleLogin}
            >
              Sign In
            </button>

            <hr />

            {/* DEMO LOGIN */}
            <p
              className="mb-3"
              style={{ fontSize: "13px", color: "#444444", fontWeight: "500" }}
            >
              Demo Credentials (Click to Login):
            </p>
            <div className="d-grid gap-2">
              {users.map((u, i) => (
                <button
                  key={i}
                  className="btn btn-light text-start w-100"
                  style={{
                    border: "1.5px solid #cbd5e1",
                    borderRadius: "8px",
                    background: "#fdfbfb",
                    transition: "0.3s",
                  }}
                  onClick={() => {
                    localStorage.setItem("auth", "true");
                    localStorage.setItem("userRole", u.role);
                    navigate(u.route);
                  }}
                >
                  {/* NAME / ROLE */}
                  <div style={{ fontSize: "13px", fontWeight: "600" }}>
                    {u.role.charAt(0).toUpperCase() + u.role.slice(1)}
                  </div>

                  {/* EMAIL */}
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#555",
                    }}
                  >
                    {u.email}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <footer
            className="mt-4 text-white text-center"
            style={{ fontSize: "14px" }}
          >
            © 2026 Precision Cast Industries Pvt. Ltd. All rights reserved.
          </footer>
        </div>
      </div>

      <Modal
        show={showLogoutModal}
        onHide={() => setShowLogoutModal(false)}
        centered
      >
        <Modal.Body className="p-4">
          <div className="d-flex align-items-start gap-3">
            {/* Icon Circle */}
            <div
              className="bg-danger-subtle text-danger d-flex align-items-center justify-content-center rounded-circle"
              style={{ width: "50px", height: "50px", fontSize: "20px" }}
            >
              ➜]
            </div>

            {/* Content */}
            <div className="flex-grow-1">
              <h5 className="fw-semibold mb-2">Confirm Logout</h5>
              <p className="text-muted mb-4">
                Are you sure you want to logout? 
                Any unsaved changes will be lost.
              </p>

              {/* Buttons */}
              <div className="d-flex gap-3">
                <Button
                  variant="light"
                  className="border px-4 rounded-3"
                  onClick={() => setShowLogoutModal(false)}
                >
                  Cancel
                </Button>

                <Button
                  variant="danger"
                  className="px-4 rounded-3"
                  onClick={handleLogout}
                >
                  Yes, Logout
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
