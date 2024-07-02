import React, { useState } from 'react';
import { Typography, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

const Language_Settings = () => {
  const [language, setLanguage] = useState('English');
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" justifyContent="right" alignItems="center">
      <Typography variant="body1" onClick={handleLanguageClick}>
        {language}
      </Typography>
      <IconButton size="small" onClick={handleLanguageClick}>
        {isOpen ? <FaCaretUp /> : <FaCaretDown />}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={() => handleLanguageSelect('English')}>English</MenuItem>
        <MenuItem onClick={() => handleLanguageSelect('Spanish')}>Spanish</MenuItem>
        <MenuItem onClick={() => handleLanguageSelect('French')}>French</MenuItem>
        <MenuItem onClick={() => handleLanguageSelect('German')}>German</MenuItem>
      </Menu>
    </Box>
  );
};

export default Language_Settings;
