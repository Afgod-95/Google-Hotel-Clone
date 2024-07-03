import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, TextField, MenuItem, Typography, Box, IconButton, CircularProgress } from '@mui/material';
import { FaCaretDown } from 'react-icons/fa';
import countryCode from '../../../countryCode.json';
import 'react-spring-bottom-sheet/dist/style.css';
import { useNavigate } from 'react-router-dom';
import BottomSheet from '../../components/BottomSheet';
import Register from './Register';
import MyCustomButton from '../../components/CustomButton';
import Forgot_password from './Forgot_password';

import Google_Logo from './../../assets/google_icon.png'
import Language_Settings from '../../components/Language_Settings';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}

const Login = () => {
  const [user, setUser] = useState({
    countryCode: '+1',
    telephone: '',
    password: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [bottomSheetContent, setBottomSheetContent] = useState(null);

  const onChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const sortedCountryCodes = countryCode.sort((a, b) => (a.dial_code < b.dial_code ? -1 : a.dial_code > b.dial_code ? 1 : 0));

  const navigate = useNavigate();

  const handleDataSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const userDetails = localStorage.getItem('user');
      
     
        console.log('User data saved to localStorage')
        setTimeout(() => {
          setIsLoading(false);
          navigate('/home');
        }, 2000); 
      
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  // Media queries
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1023 });

  const openBottomSheet = (content) => {
    setBottomSheetContent(content);
    setIsOpen(true);
  };

  return (
    <ErrorBoundary>
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Language_Settings />
        <Box textAlign="center" my={4}>
          <img src= {Google_Logo} alt="Logo" style={{width: '70px', height: '70px'}} />
          <Typography variant="h4">Google Hotel</Typography>
        </Box>
        <form onSubmit={handleDataSubmit}>
          <TextField
            select
            label={isOpen ? null : "Country Code"}
            value={user.countryCode}
            onChange={onChange}
            name="countryCode"
            fullWidth
            margin="normal"
            variant="outlined"
          >
            {sortedCountryCodes.map((option, index) => (
              <MenuItem key={index} value={option.dial_code}>
                {option.dial_code}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            placeholder="eg. 550*********"
            value={user.telephone}
            onChange={onChange}
            label={isOpen ? null : "Mobile Phone Number"}
            name="telephone"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label={isOpen ? null : "Password"}
            type="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={onChange}
            name="password"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Box textAlign="right" mt={2}>
            <Typography
              variant="body2"
              color="primary"
              sx={{ cursor: 'pointer' }}
              onClick={() => openBottomSheet('forgotPassword')}
            >
              Forgot Password?
            </Typography>
          </Box>
          <MyCustomButton title="Login to your account" type="submit" fullWidth sx={{ mt: 2 }} loading={isLoading}>
            Login
          </MyCustomButton>
          <Box display="flex" justifyContent="center" alignItems="center" mt={3}>
            <Typography variant="body2">Not Registered Yet?</Typography>
            <Typography
              variant="body2"
              color="error"
              sx={{ cursor: 'pointer', ml: 1 }}
              onClick={() => openBottomSheet('signUp')}
            >
              Sign Up Here
            </Typography>
          </Box>
        </form>
        <Box textAlign="center" mt={4} color="text.secondary">
          <Typography variant="body2">Agrees to the User Privacy Policy and</Typography>
          <Typography variant="body2">User Agreement Google Hotel</Typography>
        </Box>
      </Container>

      <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {bottomSheetContent === 'forgotPassword' && (
          <Box>
            <Typography variant="h6">Reset Password</Typography>
            <Forgot_password />
          </Box>
        )}

        {bottomSheetContent === 'signUp' && (
          <Box>
            <Typography variant="h4" pt={0.5}>Sign Up</Typography>
            <Typography variant="body2">Create a new account.</Typography>
            <Register />
          </Box>
        )}
      </BottomSheet>
    </ErrorBoundary>
  );
};

export default Login;
