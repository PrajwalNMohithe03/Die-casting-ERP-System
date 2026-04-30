import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = ({ setCollapsed, collapsed }) => {
  const [open, setOpen] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const profileRef = useRef(null);
  const notifRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  const cancelLogout = () => setShowConfirm(false);

  const confirmLogout = () => {
    console.log("Logged out");
    setShowConfirm(false);
    navigate("/");
  };

  const userOptions = [
    "⚙️ Profile Settings",
    "🗝️ Change Password",
    "🌙 Toggle Dark Mode",
    "➜] Logout",
  ];

  const getTitle = () => {
    const path = location.pathname.toLowerCase();

    if (path.includes("/admin/dashboard")) return "Dashboard";
    if (path.includes("/admin/usermanagement")) return "User Management";
    if (path.includes("/admin/items-bom")) return "Items & BOM";
    if (path.includes("/admin/procurement")) return "Procurement";
    if (path.includes("/admin/productionfile")) return "Production";
    if (path.includes("/admin/qualitycontrol")) return "Quality Control";
    if (path.includes("/admin/sales")) return "Sales & Orders";
    if (path.includes("/admin/analyticsoee")) return "Analytics & OEE";
    if (path.includes("/admin/camera-detection")) return "Camera Detection";
    if (path.includes("/admin/settings")) return "System Settings";

    return "Dashboard";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;

      // profile
      if (profileRef.current && !profileRef.current.contains(target)) {
        setOpen(false);
      }

      // notification
      if (notifRef.current && !notifRef.current.contains(target)) {
        setShowNotif(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="d-flex justify-content-between align-items-center p-3 bg-white shadow-sm"
      style={{
        position: "fixed",
        top: 0,
        left: collapsed ? "80px" : "250px",
        right: 0,
        transition: "left 0.3s",
        zIndex: 999,
      }}
    >
      {/* LEFT */}
      <div className="d-flex align-items-center gap-3">
        <span
          style={{ fontSize: "20px", cursor: "pointer" }}
          onClick={() => setCollapsed(!collapsed)}
        >
          ☰
        </span>

        <p
          className="mt-3 mb-0"
          style={{ fontSize: "14px", fontWeight: "500" }}
        >
          🏠 / {getTitle()}
        </p>
      </div>

      {/* RIGHT */}
      <div className="d-flex align-items-center gap-3">
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
          {/* SEARCH */}
          <FaSearch className="text-muted me-2" />
          <input
            type="text"
            className="form-control"
            placeholder="Search items, work orders, customers.."
            style={{
              width: "320px",
              border: "none",
              outline: "none",
              fontSize: "16px",
            }}
          />
        </div>
        {/* NOTIFICATION */}
        <div className="position-relative" ref={notifRef}>
          <div
            style={{
              cursor: "pointer",
              fontSize: "14px",
              marginLeft: "13px",
              marginRight: "13px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              position: "relative",
            }}
            onClick={() => setShowNotif(!showNotif)}
          >
            🔔
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              4
            </span>
          </div>
          {showNotif && (
            <div
              className="dropdown-menu show shadow p-2"
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "400px",
                right: 0,
                left: "auto",
                marginTop: "10px",
              }}
            >
              {/* HEADER */}
              <div className="px-2 py-2 border-bottom mb-2">
                <b>Recent Notifications (4 unread)</b>
              </div>

              {/* LIST */}

              <div
                style={{
                  maxHeight: "350px",
                  overflowY: "auto",
                  overflowX: "hidden",
                  width: "100%",
                  paddingRight: "5px",
                }}
              >
                {[
                  {
                    icon: "🔴",
                    text: "DCM-04 temperature alarm — Die temperature exceeded 220°C threshold",
                    small: "2 mins ago",
                  },
                  {
                    icon: "🟡",
                    text: "Die DM-001 approaching maintenance — 42,800 / 45,000 shots",
                    small: "15 mins ago",
                  },
                  {
                    icon: "🟡",
                    text: "Stock Alert — RM-003 — Below reorder level",
                    small: "1 hr ago",
                  },
                  {
                    icon: "🟢",
                    text: "WO-2024-0893 completed — 1,200 pcs produced",
                    small: "2 hr ago",
                  },
                  {
                    icon: "🟢",
                    text: "PO-2024-1101 fully received — 10,000 kg — Aluminum A380 accepted",
                    small: "Yesterday",
                  },
                  {
                    icon: "🔵",
                    text: "New quotation received from Kirloskar — RFQ-2024-0112",
                    small: "Yesterday",
                  },
                  {
                    icon: "🔵",
                    text: "NCR-004 assigned — Assigned to Priya Sharma",
                    small: "3 hrs ago",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="dropdown-item mb-1"
                    style={{
                      background: "rgba(173, 216, 230, 0.2)",
                      borderRadius: "5px",
                      padding: "8px",
                      whiteSpace: "normal",
                      wordBreak: "break-word",
                    }}
                  >
                    {item.icon} {item.text}
                    {item.small && (
                      <div className="small text-muted">{item.small}</div>
                    )}
                  </div>
                ))}
              </div>

              <div className="text-center mt-2 pt-2 border-top">
                <button
                  disabled
                  style={{
                    fontSize: "14px",
                    color: "blue",
                    fontWeight: "bold",
                    background: "none",
                    border: "none",
                    cursor: "default",
                    opacity: 1,
                  }}
                >
                  View All Notifications →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* PROFILE */}
        <div className="dropdown" ref={profileRef}>
          <div
            className="d-flex align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => setOpen(!open)}
          >
            <div
              className="text-white rounded-circle d-flex align-items-center justify-content-center me-2"
              style={{
                background: "#5557fb",
                width: "29px",
                height: "29px",
                fontWeight: "bold",
              }}
            >
              VS
            </div>

            <div>
              <div className="fw-bold" style={{ fontSize: "14px" }}>
                Vikram Singh
              </div>
              <small className="text-muted">Admin ⮟</small>
            </div>
          </div>

          {open && (
            <div
              className="dropdown-menu show mt-3 p-0 shadow"
              style={{ minWidth: "260px", right: 0, left: "auto" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-3 py-2 border-bottom">
                <div className="fw-bold">Vikram Singh</div>
                <small className="d-block text-muted">
                  vikram.singh@precisioncast.com
                </small>
                <small className="text-muted">Role: Admin</small>
              </div>

              {userOptions.map((item, index) => (
                <button
                  key={index}
                  className="dropdown-item"
                  style={{
                    padding: "10px 15px",
                    color: item.toLowerCase().includes("logout")
                      ? "red"
                      : "black",
                  }}
                  onClick={() => {
                    if (item.toLowerCase().includes("logout")) {
                      setShowConfirm(true);
                    } else {
                      console.log(item);
                    }
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* LOGOUT MODAL */}
      {showConfirm && (
        <>
          <div className="modal-backdrop fade show"></div>

          <div className="modal fade show" style={{ display: "block" }}>
            <div
              className="modal-dialog modal-dialog-centered"
              style={{ width: "400px" }}
            >
              <div className="modal-content border-0 rounded-4 p-4">
                <div className="d-flex gap-3">
                  {/* Icon */}
                  <div
                    className="bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <span className="fs-5">➜]</span>
                  </div>

                  {/* Content */}
                  <div className="flex-grow-1 pt-1">
                    <h5 className="fw-semibold mb-4">Confirm Logout</h5>

                    <p className="text-muted mb-3" style={{ fontSize: "16px" }}>
                      Are you sure you want to logout? Any unsaved changes will
                      be lost.
                    </p>

                    {/* Buttons */}
                    <div className="d-flex justify-content-center gap-2">
                      <button
                        className="btn btn-light border rounded-3 px-3 py-2"
                        style={{ width: "100%", fontWeight: "500" }}
                        onClick={cancelLogout}
                      >
                        Cancel
                      </button>

                      <button
                        className="btn btn-danger rounded-3 px-3 py-2"
                        style={{ width: "100%", fontWeight: "500" }}
                        onClick={confirmLogout}
                      >
                        Yes, Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
