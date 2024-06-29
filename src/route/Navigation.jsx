import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import BottomNavigator from '../components/BottomNavigator';
import Home from '../pages/Home';
import Reserve from '../pages/Reserve';
import Discover from '../pages/Discover';
import Login from '../pages/auth/Login';
import Item_Description from '../pages/Item_Description';

const Navigation = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/description/:id" element={<Item_Description />} />
      
      </Routes>
      
      {!isLogin && <BottomNavigator />}
    </>
  );
};

export default Navigation;
