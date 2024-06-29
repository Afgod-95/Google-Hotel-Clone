import React, { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import Popular from '../components/Popular';
import Trending from '../components/Trending';
import Profile from '../components/Profile'

const Home = () => {
  // Media queries
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1023 });

  const styles = {
    container: {
      width: isMobileOrTablet ? '90%' : '50%',
      margin: 'auto',
      overflow: 'hidden'
    },
    innerContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '1.5rem',
    },
    tabContainer: {
      borderTopRightRadius: '20px',
      borderTopLeftRadius: '20px',
      backgroundColor: '#fff',
      padding: '15px',
      height: '100%',
      overflow: 'hidden'
    },
    tabs: {
      position: 'relative',
      display: 'flex',
      gap: '5rem',
      margin: isMobileOrTablet ? '1rem' : '2rem'
    },

    button: {
      background: 'none',
      border: 'none',
      fontSize: '18px',
    }
  };

  const [activeTab, setActiveTab] = useState(0);
  const [barStyle, setBarStyle] = useState({});
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const tabRefs = useRef([]);

  useEffect(() => {
    const activeButton = tabRefs.current[activeTab];
    if (activeButton) {
      setBarStyle({
        width: activeButton.offsetWidth,
        left: activeButton.offsetLeft
      });
    }
  }, [activeTab]);

  const topTabs = (activeTab) => {
    switch(activeTab) {
      case 0:
        return  <Popular />
      case 1:
        return <Trending/>
      default:
        return null;
    }
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  return (
    <>
      <Profile />

      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <h3 style={{ textAlign: 'left', fontSize: '1.5rem', width: isMobileOrTablet ? '70%' : '50%', paddingTop: '20px' }}>Where would you like to Travel?</h3>
          <SearchBar onFocus={handleSearchFocus} onBlur={handleSearchBlur} />
          {!isSearchFocused && <Card />}
          <div style={styles.tabContainer}>
            <div className="tabs" style={styles.tabs}>
              <button ref={(el) => (tabRefs.current[0] = el)} onClick={() => setActiveTab(0)} className={activeTab === 0 ? 'active' : ''} style={styles.button}>Popular</button>

              <button ref={(el) => (tabRefs.current[1] = el)} onClick={() => setActiveTab(1)} className={activeTab === 1 ? 'active' : ''} style={styles.button}>Trending</button>

              <motion.div
                className="active-bar"
                style={{
                  position: 'absolute',
                  bottom: -10,
                  height: '4px',
                  backgroundColor: 'red',
                  borderRadius: '10px',
                  ...barStyle
                }}
                layout
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </div>
            <div className="tab-content">
              <AnimatePresence >
                <motion.div
                  key={activeTab}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {topTabs(activeTab)}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
  
    
    
    </>
     );
};

export default Home;
