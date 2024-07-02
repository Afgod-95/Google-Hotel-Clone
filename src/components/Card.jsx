import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import Swimming_Icon from './../assets/swimming_icon.png';
import Breakfast_Icon from './../assets/breakfast_icon.png';
import Parking_Icon from './../assets/parking_icon.png';
import Fitness_Icon from './../assets/fitness_icon.png';

import './Card.css'; 

const Card = () => {
    const isMobileOrTablet = useMediaQuery({ maxWidth: 1023 });

    const [actualWidth, setActualWidth] = useState('100%');
    const carousel = useRef(null);

    useEffect(() => {
        if (carousel.current) {
            setActualWidth(carousel.current.offsetWidth);
        }
    }, [carousel]);

    const styles = {
        cardContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            width: actualWidth,
            cursor: 'grab', 
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            minWidth: '130px',
            minHeight: '150px',
            padding: '10px',
            margin: '0 0.5rem', 
            backgroundColor: '#d1d1d1',
            borderRadius: '10px',
            cursor: 'pointer',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        },
        icon: {
            width: '40px',
            height: '40px',
            color: 'black',
        },
        text: {
            textAlign: 'center',
        },
    };
    
    const data = [
        {
            id: 0,
            icon: <img src={Fitness_Icon} style={styles.icon} alt="Fitness Room" />,
            name: 'Fitness room',
            data: {
                images: [],
                title: 'Fitness room',
                header: 'Gym Room',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero',
            },
        },
        {
            id: 1,
            icon: <img src={Parking_Icon} style={styles.icon} alt="Private Parking" />,
            name: 'Private parking',
            data: {
                images: [],
                title: 'Private Parking',
                header: 'Parking Lot',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero',
            },
        },
        {
            id: 2,
            icon: <img src={Breakfast_Icon} style={styles.icon} alt="Breakfast was great" />,
            name: 'Breakfast was great',
            data: {
                images: [],
                title: 'Breakfast was great',
                header: 'Restaurant',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero',
            },
        },
        {
            id: 3,
            icon: <img src={Swimming_Icon} style={styles.icon} alt="Indoor Swimming Pool" />,
            name: 'Indoor swimming pool',
            data: {
                images: [],
                title: 'Indoor swimming pool',
                header: 'Swimming pool',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liber',
            },
        },
    ];

    const navigate = useNavigate();

    return (
        <motion.div className="card-container">
            <AnimatePresence >
                {data.map((item, index) => (
                    <motion.div
                        key={index}
                        style={styles.container}
                        onClick={() => navigate(`/description/${item.id}`, { state: { item: item.data } })}
                    >
                        <div style={styles.icon}>{item.icon}</div>
                        <p style={styles.text}>{item.name}</p>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
};

export default Card;
