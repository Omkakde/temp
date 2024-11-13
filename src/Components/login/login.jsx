import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { loginApiCall } from "../../utils/Apis";

import "./login.css";

function Login() {
  const [showErr, setErrorMsg] = useState(false);
  const [showPass, setErrorPass] = useState(false);
  const [getEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const passwordRegex = /^[a-zA-Z0-9@^]+$/;

  const handleLogin = async (e) => {
    e.preventDefault();

  
    let valid = true;

    if (!getEmail.trim()) {
      setErrorMsg(true);
      valid = false;
    } else {
      setErrorMsg(false);
    }

    if (!password || !passwordRegex.test(password)) {
      setErrorPass(true);
      valid = false;
    } else {
      setErrorPass(false);
    }

    if (valid) {
      setLoading(true);
      setErrorMessage("");

      try {// try don't use use then. and .catch for handle promise
        const response = await loginApiCall(getEmail, password);
        console.log("Login successful:", response);

        const { tokens, userId } = response.data; 
        localStorage.setItem("userId", userId);
        localStorage.setItem("accessToken", tokens.access); 
        localStorage.setItem("refreshToken", tokens.refresh);
      } catch (error) {
        console.error("Login error:", error);
        setErrorMessage(
          error.response?.data?.message || "Login failed. Please try again."
        );
      } finally {
        setLoading(false);
      }
     
    
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleLogin}
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <div className="main-container">
        <div className="head">
          <h3 id="head-text">Fundoo</h3>
          <h3 className="firstLine">Sign In</h3>
          <h3 className="secondLine">Use Your Fundoo Account</h3>
        </div>

        
        <div className="name-container">
          <TextField
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
            You can use letters, numbers & @ or ^ symbols
          </h5>
          {showPass && (
            <span className="passwordErr">Password is invalid.</span>
          )}
        </div>

        
        {errorMessage && <div className="errorMessage">{errorMessage}</div>}

      
        <div className="signin-register">
          <a href="#" className="line3">
            Forgot Password?
          </a>
          <Button
            type="submit"
            className="submit-btn"
            variant="contained"
            disabled={loading}
          >
            {loading ? "Logging In..." : "Login"}
          </Button>
        </div>
      </div>
    </Box>
  );
}

export default Login;
