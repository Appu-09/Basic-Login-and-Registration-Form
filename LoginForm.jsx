import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const mainLogo = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";
const userIcon = "https://cdn-icons-png.flaticon.com/512/1077/1077114.png";
const lockIcon = "https://cdn-icons-png.flaticon.com/512/3064/3064197.png";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    // Simulate login success: generate fake token and user info
    const fakeToken = "1234567890abcdef";
    const fakeUser = { name: "John Doe", email };

    // Save token and user to localStorage
    localStorage.setItem("token", fakeToken);
    localStorage.setItem("user", JSON.stringify(fakeUser));

    // Redirect to dashboard
    navigate("/dashboard");
  }

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Sign In</h2>

        <div style={styles.logoContainer}>
          <img src={mainLogo} alt="Logo" style={styles.mainLogo} />
        </div>

        <div style={styles.inputWrapper}>
          <img src={userIcon} alt="User Icon" style={styles.inputIcon} />
          <input
            style={{ ...styles.input, paddingLeft: "40px" }}
            type="text"
            id="email"
            placeholder="Username or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div style={styles.inputWrapper}>
          <img src={lockIcon} alt="Lock Icon" style={styles.inputIcon} />
          <input
            style={{ ...styles.input, paddingLeft: "40px" }}
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div style={styles.options}>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              style={styles.checkbox}
            />
            Remember Me
          </label>

          <Link to="/forgot-password" style={styles.forgotLink}>
            Forgot Password?
          </Link>
        </div>

        <button type="submit" style={styles.button}>Login</button>

        <p style={styles.signupText}>
          Don’t have an account?{" "}
          <Link to="/signup" style={styles.signupLink}>
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #40e0d0, #48d1cc)", // turquoise gradient
    fontFamily: "'Poppins', sans-serif",
    padding: "20px",
  },
  form: {
    backgroundColor: "#001f4d", // navy blue
    padding: "40px 35px",
    borderRadius: "20px",
    boxShadow: "0 15px 40px rgba(0, 31, 77, 0.7)", // subtle navy shadow
    width: "380px",
    aspectRatio: "1 / 1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    animation: "fadeIn 0.8s ease-in-out",
  },
  title: {
    marginBottom: "25px",
    color: "#a0e7e5", // pale turquoise for contrast
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "700",
    letterSpacing: "1.2px",
    textShadow: "1px 1px 3px #045c6b",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "35px",
  },
  mainLogo: {
    height: "70px",
    objectFit: "contain",
    filter: "drop-shadow(1px 1px 3px #40e0d0)",
  },
  inputWrapper: {
    position: "relative",
    marginBottom: "22px",
  },
  inputIcon: {
    position: "absolute",
    left: "14px",
    top: "50%",
    transform: "translateY(-50%)",
    height: "22px",
    width: "22px",
    opacity: 0.85,
    filter: "drop-shadow(0 0 2px #48d1cc)",
  },
  input: {
    width: "100%",
    padding: "14px 14px 14px 45px",
    borderRadius: "12px",
    border: "1.8px solid #6ca9b8",
    fontSize: "16px",
    outline: "none",
    backgroundColor: "#e0e6e6", // light greyish for inputs
    boxSizing: "border-box",
    boxShadow: "inset 0 2px 6px rgba(72, 209, 204, 0.3)",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  },
  inputFocus: {
    borderColor: "#40e0d0",
    boxShadow: "0 0 10px 3px rgba(64, 224, 208, 0.5)",
    backgroundColor: "#f5fdfd",
  },
  options: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },
  checkboxLabel: {
    fontSize: "15px",
    color: "#a0e7e5",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    userSelect: "none",
  },
  checkbox: {
    width: "18px",
    height: "18px",
    cursor: "pointer",
    accentColor: "#40e0d0",
  },
  forgotLink: {
    fontSize: "15px",
    color: "#48d1cc",
    textDecoration: "none",
    fontWeight: "600",
    transition: "color 0.3s ease",
  },
  forgotLinkHover: {
    color: "#a0e7e5",
  },
  button: {
    width: "100%",
    padding: "14px",
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(90deg, #40e0d0 0%, #48d1cc 100%)", // light turquoise gradient
    color: "#003340",
    fontSize: "18px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 6px 14px rgba(64, 224, 208, 0.6)",
    transition: "background 0.4s ease",
  },
  buttonHover: {
    background: "linear-gradient(90deg, #32cfcf 0%, #3fbebe 100%)",
  },
  signupText: {
    marginTop: "28px",
    textAlign: "center",
    fontSize: "15px",
    color: "#a0e7e5",
  },
  signupLink: {
    color: "#48d1cc",
    textDecoration: "none",
    fontWeight: "700",
    transition: "color 0.3s ease",
  },
  signupLinkHover: {
    color: "#40e0d0",
  },
};
