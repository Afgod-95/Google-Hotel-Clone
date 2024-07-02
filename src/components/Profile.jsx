import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { GiSpeaker } from "react-icons/gi";
import { motion, useAnimation } from 'framer-motion';
import Google_Icon from './../assets/google_icon.png'
import Calendar_Icon from './../assets/calendar_icon.png'
import User_Icon from './../assets/user_icon.png'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    // Media queries
    const isMobileOrTablet = useMediaQuery({ maxWidth: 1023 });

    const styles = {
        mainContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: isMobileOrTablet ? '100%' : '50%',
            backgroundColor: '#fff',
            margin: 'auto'
        },
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
        },
        innerContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            
        },
        img: {
            width: '40px',
            height: '40px',
            cursor: 'pointer'
        },
        thinLine: {
            width: '100%',
            height: '1px',
            backgroundColor: '#acadac',
        },
        icon: {
            width: '30px',
            height: '30px',
            paddingRight: '10px'
        },
        animatedText: {
            width: '95%',
            margin: 'auto',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            position: 'relative',
            fontSize: '14px',
            paddingRight: '10px',
            color: '#000',
        },
        text: {
            color: ' #acadac'
        }
    };

    const animation = useAnimation();

    const handleAnimationComplete = () => {
        animation.start({ x: '-100%' }); 
    };

    const navigate = useNavigate()

    return (
        <div style={styles.mainContainer}>
            <div style={styles.container}>
                <div style={{...styles.innerContainer, gap: '.5rem'}}>
                    <div style={{...styles.innerContainer, gap: '.2rem'}}>
                        <img src={Google_Icon} alt="Google Logo" style={{...styles.img}} />
                        <p style = {styles.text}>Google Hotel</p>
                    </div>
                    <h4>Hotel</h4>
                </div>
                <div style={{...styles.innerContainer, gap: '1rem'}}>
                    <img src={Calendar_Icon} alt="Calendar Icon" style={styles.img} onClick={() => navigate('/user-profile')}/>
                    <img src={User_Icon} alt="Calendar Icon" style={styles.img} onClick={() => navigate('/event-calendar')} />
                </div>
            </div>
            <div style={styles.thinLine}></div>
            <div style={{ ...styles.container, alignItems: 'center' }}>
                <GiSpeaker style={styles.icon} />
                <motion.div style={styles.animatedText}>
                    <motion.p
                        ref={animation} 
                        initial={{ x: '90%' }}
                        animate={{ x: '-170%' }}
                        transition={{ duration: 20, ease: 'linear', repeat: Infinity, repeatDelay: 1 }}
                        onAnimationComplete={handleAnimationComplete} 
                    >
                        Notice first slot of customer support is currently full, please click on the customer service section again, then contact second slot customer service for a better experience.
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
};

export default Profile;
