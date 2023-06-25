import React, { useEffect, useState } from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { media, services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper  } from '../hoc';

const MediaFrame = ({ title, subtitle, src }) => {
    let initialWidth = window.innerWidth <= 500 ? window.innerWidth :
                     window.innerWidth <= 720 ? 500 :
                     window.innerWidth <= 1800 ? 500 : 1280;
  const [iframeDimensions, setIframeDimensions] = useState({
    width: initialWidth,
    height: (initialWidth / 16) * 9
  });

  useEffect(() => {
    function handleResize() {
      let newWidth = window.innerWidth <= 500 ? window.innerWidth :
                     window.innerWidth <= 720 ? 500 :
                     window.innerWidth <= 1800 ? 720 : 1280;
      setIframeDimensions({
        width: newWidth,
        height: (newWidth / 16) * 9
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h2 className={styles.sectionSubHeader}>{title}</h2>
      <h4 className={styles.description}>{subtitle}</h4>

      <iframe 
        width={iframeDimensions.width} 
        height={iframeDimensions.height} 
        src={src}
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen 
        title="Embedded youtube" 
      />
    </div>
  )
}

const Media = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Media</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px]
        max-w-3xl leading-[30px]"
      >
        I was fortunate to take part in these great conferences and programs
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {
          media.map((m, index) => (
            <MediaFrame 
              key={m.title} 
              index={index}
              {...m} 
            />
          ))
        }     
        
        
      </div>
    </>
  )
}

export default SectionWrapper(Media, "media")