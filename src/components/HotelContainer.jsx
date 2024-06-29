import React from 'react'
import { useMediaQuery } from 'react-responsive';

const HotelContainer = ({ img, onClick, header, desc }) => {
    
    // Media queries
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1023 });
    const styles = {
        container: {
            width: isMobileOrTablet ? '150px' :  '250px',
            display: 'flex',
            gap: '10px',
            flexDirection: 'column',
            backgroundColor: '#fff',
            borderRadius: '10px',
            position: 'relative',
            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            cursor: 'pointer',
            marginTop: '10px'
        },

        img: {
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            borderRadius: '10px',
        },
        
        header: {
            fontSize: '1rem',
            fontWeight: 'bold',
            padding: '0px 15px 15px'
        },
    }
  
    return (
        <div style = {styles.container} onClick={onClick}>
            <img style = {styles.img} src = {img} alt = ''></img>
            <h3 style = {styles.header}>{header}</h3>
            <p style={{padding: '0px 15px 15px'}}>{desc}</p>
        </div>
  )
}

export default HotelContainer