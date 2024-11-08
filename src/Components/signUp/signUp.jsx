import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './signUp.css';
import { useState } from 'react';

const SignUp = (() => {


  const [showErr, setErrorMsg] = useState(false); 
  const [showPass, setErrorPass] = useState(false); 

  let getEmail = ""; 
  let password = ""; 


  const passwordRegex = /^[a-zA-Z0-9@^]+$/;


  const handleLogin = () => {
   
    if (!getEmail.length) {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
    }

   
    if (!password.length || !passwordRegex.test(password)) {
      setErrorPass(true);
    } else {
      setErrorPass(false);
    }

 
    console.log('Email:', getEmail);
    console.log('Password:', password);
  };

  return (
    <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
      <div className="main-container">
        <form>
          <div className="head">
            <h3 id="head-text">Fundoo</h3>
            <h3 className="firstLine">Sign up</h3>  
            <h3 className="secondLine">Use Your Fundoo Account</h3> 
          </div>

          {/* Email field */}
          <div className="name-container">
            <TextField 
              id="outlined-first-name" 
              onChange={e => getEmail = e.target.value} 
              label="Email" 
              variant="outlined" 
              fullWidth 
            />
            {showErr && <span className='emailErr'><span> Email is required. </span></span>}
          </div>

 
          <div className="password-container">
            <TextField
              id="outlined-password-input"
              label="Password"
              className="password"
              type="password"
              onChange={e => password = e.target.value}  
              autoComplete="current-password"
              fullWidth
            />
            <h5 className="line1">You can use letters, numbers & @ or ^ symbols</h5>
            {showPass && <span className="passwordErr"><span>Password is invalid.</span></span>}
          </div>

        
          <div className="signin-register">
            <a href="#" className="line3">Forget Password</a>
            <Button className="submit-btn" onClick={handleLogin} variant="contained">Login</Button>
          </div>
        </form>
      </div>
    </Box>
  );
  }); 

export default SignUp;
