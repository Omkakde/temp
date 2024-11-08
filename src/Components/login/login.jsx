import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import photo1 from '../../assets/photo1.png';
function Login() {
 
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  // Validation functions
  const validate = () => {
    let isValid = true;
    const newErrors = {};

    // Validate first name
    if (!formValues.firstName) {
      newErrors.firstName = 'First Name is required';
      isValid = false;
    }

    // Validate last name
    if (!formValues.lastName) {
      newErrors.lastName = 'Last Name is required';
      isValid = false;
    }

    // Validate username
    if (!formValues.username) {
      newErrors.username = 'Username is required';
      isValid = false;
    } else if (!/^[a-zA-Z0-9.]+$/.test(formValues.username)) {
      newErrors.username = 'Username can only contain letters, numbers, and periods';
      isValid = false;
    }

    // Validate password
    if (!formValues.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formValues.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    } else if (!/[a-zA-Z]/.test(formValues.password) || !/[0-9]/.test(formValues.password) || !/[^a-zA-Z0-9]/.test(formValues.password)) {
      newErrors.password = 'Password must contain letters, numbers, and symbols';
      isValid = false;
    }

    // Validate confirm password
    if (formValues.password !== formValues.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (validate()) {
      // If form is valid, you can proceed with the registration
      console.log('Form submitted successfully:', formValues);
      // You can reset the form or navigate the user to another page after successful registration
    }
  };

  // Handle form value changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}  // Handle form submission
    >
      <div className="main-container">
        <div className="form-container">
          <div className="head">
            <h3 id="head-text">Fundoo</h3>
            <h3 className="firstLine">Create your Fundoo Account</h3>
          </div>

          <div className="name-container">
            <TextField
              id="firstName"
              name="firstName"
              label="First Name"
              variant="outlined"
              value={formValues.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
            <TextField
              id="lastName"
              name="lastName"
              label="Last Name"
              variant="outlined"
              value={formValues.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
          </div>

          <div className="UserName">
            <TextField
              id="username"
              name="username"
              label="Username"
              variant="outlined"
              value={formValues.username}
              onChange={handleChange}
              error={!!errors.username}
              helperText={errors.username}
            />
          </div>
          <h5 className="line1">You can use letters, numbers & periods</h5>

          <div className="password-container">
            <TextField
              id="password"
              name="password"
              label="Password"
              className="password"
              type="password"
              value={formValues.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              className="pass-confirm"
              type="password"
              value={formValues.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />
            <h5 className="line2">Use 8 or more characters with a mix of letters, numbers & symbols</h5>
          </div>

          <div className="signin-register">
            <a href="#" className="line3">Sign in instead</a>
            <Button className="submit-btn" variant="contained" type="submit">
              Register
            </Button>
          </div>
        </div>

        <div className="img-container">
        <img src={photo1} alt="Fundoo" />
        </div>
      </div>
    </Box>
  );
}

export default Login;
