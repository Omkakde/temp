
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './login.css'; // Assuming the CSS is the same
import photo1 from '../../assets/photo1.png'; // Path to your image

function Login() {
  // State hooks for form fields and validation errors
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  // Regex for password validation (minimum 8 characters, letters, numbers, symbols)
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error messages
    let formErrors = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      confirmPassword: ''
    };

    let isValid = true;

    // Validate First Name
    if (!firstName) {
      formErrors.firstName = 'First Name is required';
      isValid = false;
    }

    // Validate Last Name
    if (!lastName) {
      formErrors.lastName = 'Last Name is required';
      isValid = false;
    }

    // Validate Username
    if (!username) {
      formErrors.username = 'Username is required';
      isValid = false;
    }

    // Validate Password
    if (!password || !passwordRegex.test(password)) {
      formErrors.password = 'Password must be at least 8 characters long and contain letters, numbers, and special characters';
      isValid = false;
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    // Set error messages if any validation fails
    setErrors(formErrors);

    // If form is valid, proceed with form submission (for example, send data to API)
    if (isValid) {
      console.log('Form submitted');
      // Proceed with form submission logic here (e.g., send data to an API)
    }
  };

  return (
    <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
      <div className="main-container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="head">
              <h3 id="head-text">Fundoo</h3>
              <h3 className="firstLine">Create your Fundoo Account</h3>
            </div>

            {/* First Name Field */}
            <div className="name-container">
              <TextField
                id="outlined-first-name"
                label="First Name"
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
              <TextField
                id="outlined-last-name"
                label="Last Name"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </div>

            {/* Username Field */}
            <div className="UserName">
              <TextField
                id="outlined-username"
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={!!errors.username}
                helperText={errors.username}
              />
            </div>
            <h5 className="line1">You can use letters, numbers & periods</h5>

            {/* Password and Confirm Password Fields */}
            <div className="password-container">
              <TextField
                id="outlined-password"
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
              />
              <TextField
                id="outlined-confirm-password"
                label="Confirm Password"
                type="password"
                variant="outlined"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
              />
              <h5 className="line2">Use 8 or more characters with a mix of letters, numbers & symbols</h5>
            </div>

            {/* Sign In Link and Register Button */}
            <div className="signin-register">
              <a href="#" className="line3">Sign in instead</a>
              <Button className="submit-btn" variant="contained" type="submit">
                Register
              </Button>
            </div>
          </form>
        </div>

        <div className="img-container">
          <img src={photo1} alt="Fundoo" />
        </div>
      </div>
    </Box>
  );
}

export default Login;
