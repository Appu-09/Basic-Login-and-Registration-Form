import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const users = [
    {
      name: "Jane Doe",
      dob: "1999-05-01",
      email: "jane@example.com",
      role: "admin",
      status: "active",
    },
    {
      name: "John Smith",
      dob: "2000-01-15",
      email: "john@example.com",
      role: "reviewer",
      status: "inactive",
    },
    {
      name: "Alice Brown",
      dob: "2001-12-20",
      email: "alice@example.com",
      role: "moderator",
      status: "suspended",
    },
  ];

  const getStatusDot = (status) => {
    const color =
      status === "active" ? "green" : status === "inactive" ? "orange" : "red";
    return <span className="status-dot" style={{ backgroundColor: color }} />;
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Welcome to the Dashboard!</h2>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.dob}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                {getStatusDot(user.status)} {user.status}
              </td>
              <td>
                <span
                  role="img"
                  aria-label="settings"
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    marginRight: "10px",
                    fontSize: "18px",
                  }}
                >
                  ⚙️
                </span>
                <span
                  role="img"
                  aria-label="delete"
                  style={{ cursor: "pointer", fontSize: "18px" }}
                >
                  ❌
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
