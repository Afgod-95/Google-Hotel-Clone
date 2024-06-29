import React from 'react'
import { useNavigate } from 'react-router-dom'
import HotelContainer from './HotelContainer'
import Popular_Image from './../assets/popular_image.png'

const Popular = () => {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
        },

        img: {
            width: '100%',
            Height: '100%',
            marginBottom: '100px'
        }
    }
   
  return (
    <div style={styles.container}>
       
       <img  src= {Popular_Image} style = {styles.img}/>
    
    </div>
  )
}


export default Popular