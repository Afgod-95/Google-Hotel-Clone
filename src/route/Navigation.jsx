
import React from 'react'
import { useLocation, Route,   Routes } from 'react-router-dom';
import Login from '../pages/auth/Login.jsx';
import Home from '../pages/Home.jsx';
import Reserve from '../pages/Reserve.jsx'
import Discover from '../pages/Discover.jsx'
import Item_Description from '../pages/Item_Description.jsx';
import UserProfile from '../pages/UserProfile.jsx';
import Event_Calendar from '../pages/Event_Calendar.jsx';
import BottomNavigator from '../components/BottomNavigator.jsx';

const Navigation = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/';

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/description/:id" element={<Item_Description />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/event-calendar" element={<Event_Calendar/>} />
      
      
      </Routes>
      {!isLogin && <BottomNavigator />}  
    </>
  );
};

export default Navigation