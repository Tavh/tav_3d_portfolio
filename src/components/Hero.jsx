import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas, JavaCanvas } from './canvas';
import { tav } from '../assets';

import React, { useState, useEffect } from "react";

const Hero = () => {
  const [iframeDimensions, setIframeDimensions] = useState({
    width: window.innerWidth > 1280 ? 1280 : window.innerWidth,
    height: ((window.innerWidth > 1280 ? 1280 : window.innerWidth) / 16) * 9
  });

  useEffect(() => {
    function handleResize() {
      const newWidth = window.innerWidth > 1280 ? 1280 : window.innerWidth;
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

  const components = [<ComputersCanvas />,  <JavaCanvas />];
  const randomIndex = Math.floor(Math.random() * components.length);
  const RandomComponent = components[randomIndex];

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute
      inset-0 top-[120px] max-w-7xl mx-auto flex
      flex-row items-start gap-5`}>
        <div className="flex flex-col
        justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full
          bg-[#915eff]"/>
          <div className="w-1 sm:5-80 h-40
          violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm &nbsp;
            <span className="text-[#915eff]">
              Tav
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Passionate and driven Software Engineer <br className="sm:block hidden"/>
          </p>
        </div>
      </div>

      <div className="absolute inset-0 flex justify-center items-center" style={{ marginTop: '100px' }}>
        <iframe 
          width={iframeDimensions.width} 
          height={iframeDimensions.height} 
          src="https://www.youtube.com/embed/msNjvbKlWRE"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen 
          title="Embedded youtube" 
        />
      </div>

      {/* {RandomComponent} */} // Random 3D model, unnecessary when the video is present

      <div className="absolute xs:bottom-10 
      bottom-32 w-full flex justify-center
      items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px]
          rounded-3xl border-4 border-secondary
          flex justify-center items-start p-2">
            <motion.dev 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full
              bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;

