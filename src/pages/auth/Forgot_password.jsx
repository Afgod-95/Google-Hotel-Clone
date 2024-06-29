import React, { useState } from 'react';
import { Container, TextField, MenuItem, Box } from '@mui/material';
import countryCode from './../../../countryCode.json';
import MyCustomButton from '../../components/CustomButton';
import { BsEye, BsEyeSlashFill } from 'react-icons/bs';

const Forgot_password = () => {
  const [user, setUser] = useState({
    countryCode: '+1',
    mobileNumber: '',
    verificationCode: '',
    newPassword: '',
    confirmNewPassword: '',
    invitationCode: ''
  });

  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false )

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const togglePasswordVisibility = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try{
      console.log(user);
      setTimeOut(() => {
        setIsLoading(true)
        navigate('/')
      }, 2000)
    }
    catch(error) {
      console.log(error.message)
    }
  };

  return (
    <Container maxWidth="sm" sx={{ backgroundColor: '#fff', paddingBottom: '15px' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          select
          label="Country Code"
          value={user.countryCode}
          onChange={handleChange}
          name="countryCode"
          fullWidth
          margin="normal"
          variant="outlined"
        >
          {countryCode.map((option, index) => (
            <MenuItem key={index} value={option.dial_code}>
              {option.dial_code}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Mobile Number"
          placeholder="Please enter your number"
          value={user.mobileNumber}
          onChange={handleChange}
          name="mobileNumber"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Verification Code"
          placeholder="Enter verification code"
          value={user.verificationCode}
          onChange={handleChange}
          name="verificationCode"
          fullWidth
          margin="normal"
          variant="outlined"
        />
         <Box position="relative">
          <TextField
            label="Password"
            type={!isVisible ? 'password' : 'text'}
            placeholder="Enter your password"
            value={user.password}
            onChange={handleChange}
            name="password"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <div
            style={{ position: 'absolute', right: '10px', top: '55%', transform: 'translateY(-55%)', cursor: 'pointer' }}
            onClick={togglePasswordVisibility}
          >
            {isVisible ? <BsEyeSlashFill /> : <BsEye />}
          </div>
        </Box>
        
        <TextField
          label="Confirm New Password"
          type="password"
          placeholder="Confirm new password"
          value={user.confirmNewPassword}
          onChange={handleChange}
          name="confirmPassword"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Invitation Code"
          placeholder="Enter invitation code (optional)"
          value={user.invitationCode}
          onChange={handleChange}
          name="invitationCode"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Box sx={{ mt: 2 }}>
          <MyCustomButton title="Register" type="submit" fullWidth loading = {isLoading}>
            Confirm
          </MyCustomButton>
        </Box>
      </form>
    </Container>
  );
};

export default Forgot_password ;
