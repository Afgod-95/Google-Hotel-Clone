//trending 
import React, { useState } from 'react'
import Trending_Image from './../assets/trending_image.png'

const Trending = () => {
    
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
       
       <img  src= {Trending_Image} style = {styles.img}/>
    
    </div>
  )
}






export default Trending 



