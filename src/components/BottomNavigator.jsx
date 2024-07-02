import React, { useState } from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Home_Focused from './../assets/home.png';
import Home_Not_Focused from './../assets/home_not_focused.png';
import Reserve_Focused from './../assets/reserve.png';
import Reserve_Not_Focused from './../assets/reserve_not_focused.png';
import Discover_Not_Focused from './../assets/discover.png';
import Discover_Focused from './../assets/discover_focused.png';

const BottomNavigator = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  // Media queries
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1023 });

  const styles = {
    img: {
      width: '30px',
      height: '30px',
    },
    label: {
      fontSize: '14px',
      padding: '4px 0',
    }
  };

  return (
    <Paper
      sx={{
        width: isMobileOrTablet ? '90%' : '50%',
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 20,
        padding: 2,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        overflow: 'hidden',
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="HOME"
          icon={
            value === 0 
              ? <img src={Home_Focused} style={styles.img} /> 
              : <img src={Home_Not_Focused} style={styles.img} />
          }
          sx={{
            '& .MuiBottomNavigationAction-label': {
              fontSize: '14px',
              padding: '4px 0',
              color: value === 0 ? 'red' : 'gray',
            },
          }}
          onClick={() => navigate('/home')}
        />
        <BottomNavigationAction
          label="RESERVE"
          icon={
            value === 1 
              ? <img src={Reserve_Focused} style={styles.img} /> 
              : <img src={Reserve_Not_Focused} style={styles.img} />
          }
          sx={{
            '& .MuiBottomNavigationAction-label': {
              fontSize: '14px',
              padding: '4px 0',
              color: value === 1 ? 'red' : 'gray',
            },
          }}
          onClick={() => navigate('/reserve')}
        />
        <BottomNavigationAction
          label="DISCOVER"
          icon={
            value === 2 
              ? <img src={Discover_Focused} style={styles.img} /> 
              : <img src={Discover_Not_Focused} style={styles.img} />
          }
          sx={{
            '& .MuiBottomNavigationAction-label': {
              fontSize: '14px',
              padding: '4px 0',
              color: value === 2 ? 'red' : 'gray',
            },
          }}
          onClick={() => navigate('/discover')}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavigator;
