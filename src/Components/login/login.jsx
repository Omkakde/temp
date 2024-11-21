import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { loginApiCall } from "../../utils/Apis";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Box from "@mui/material/Box";

export default function Login() {
  const [showErr, setErrorMsg] = useState(false);
  const [showPass, setErrorPass] = useState(false);
  const [getEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const passwordRegex = /^[a-zA-Z0-9@^]+$/;

  const handleLogin = (e) => {
    e.preventDefault();

    let valid = true;

    // Validate email
    if (!getEmail.trim()) {
      setErrorMsg(true);
      valid = false;
    } else {
      setErrorMsg(false);
    }

    // Validate password
    if (!password || !passwordRegex.test(password)) {
      setErrorPass(true);
      valid = false;
    } else {
      setErrorPass(false);
    }

    if (valid) {
      setLoading(true);
      setErrorMessage(""); 

      loginApiCall(getEmail, password)
      .then((response) => {
        const { tokens } = response.data;
    
        if (tokens) {
          localStorage.setItem("accessToken", tokens.access);
          localStorage.setItem("refreshToken", tokens.refresh);
        }
    
        
        if (localStorage.getItem("accessToken")) {
          setErrorMessage("Login successful.");
          navigate("/home"); 
        } else {
          setErrorMessage("Login failed.");
        }
      })
      .catch(() => {
        setErrorMessage("Login failed.");
      })
      .finally(() => {
        setLoading(false);
      });
    
    }
  };

  return (
    <div className="main-container">
    <Box
    component="form"
    onSubmit={handleLogin}
    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
    noValidate
    autoComplete="off"
  >
    <div className="main">
      <div className="head">
        <h3 id="head-text">Fundoo</h3>
        <h3 className="firstLine">Sign In</h3>
        <h3 className="secondLine">Use Your Fundoo Account</h3>
      </div>


      <div className="name-container">
        <TextField
        style={{ margin: '8px', width: '80%' }}
          id="outlined-first-name"
          value={getEmail}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          fullWidth
          required
        />
        {showErr && <span className="emailErr">Email is required.</span>}
      </div>


      <div className="password-container">
      
        <TextField
        style={{ margin: '8px', width: '80%' }}
          id="outlined-password-input"
          label="Password"
          className="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          fullWidth
          required
        />
        <h5 className="line1">
          Forgot Password?
        </h5>
        {showPass && (
          <span className="passwordErr">Password is invalid.</span>
        )}
      </div>


      {errorMessage && <div className="errorMessage">{errorMessage}</div>}


      <div className="signin-register">
        <a href="#"  className="line3">
      
          <h4 onClick={() => navigate('/signUp')}>Create Account</h4>
        </a>
        <div className="buttoncnt">
        <Button
          type="submit"
          className="submit-btn"
          variant="contained"
          disabled={loading}
        >
          {loading ? "Logging In" : "Login"}
        </Button>
        </div>
      </div>
    </div>
  </Box>
  </div>
  );
}
