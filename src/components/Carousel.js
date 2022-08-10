import React from 'react'
import '../styles/Carousel.scss'
import { motion } from 'framer-motion';
import {useRef, useEffect, useState } from 'react';
import Images from '../components/Images'

function Carousel() {
  const [width, setwidth] = useState(0);
  const carousel = useRef()

  useEffect(() => {
    setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, []);

  return (
    <div className='carousel-section'>  
      <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
        <motion.div 
          drag='x'
          dragConstraints={{ right:0, left: -width }}
          className='inner-carousel'>
          {Images.map((image) => {
            return (
            <motion.div className='item' key={image}>
              <img src={image} alt='' />
            </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Carousel