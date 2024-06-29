import React from 'react';
import { Button, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#1976d2',
  color: '#fff',
  padding: '10px 20px',
  width: '100%',
  fontSize: '16px',
  borderRadius: '15px',
  height: '55px',
  '&:hover': {
    backgroundColor: '#1565c0',
  },
  '&:active': {
    backgroundColor: '#0d47a1',
  },
  '&:disabled': {
    backgroundColor: '#b0bec5',
  },
}));

const MyCustomButton = ({ children, loading, ...props }) => {
  return (
    <CustomButton {...props} disabled={loading || props.disabled}>
      {loading ? <CircularProgress size={24} color="inherit" /> : children}
    </CustomButton>
  );
};

export default MyCustomButton;
