import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useState, useEffect } from "react";
import particlesConfig from "./config/particles-config"; 

const ParticlesBackground = ( {darkMode }) => {
  const [particleSize, setParticleSize] = useState(4);
  const [lineDistance, setLineDistance] = useState(600); 

  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  const handleResize = () => {
    const isMobile = window.innerWidth <= 768; 
    setParticleSize(isMobile ? 2 : 4); 
    setLineDistance(isMobile ? 300 : 600);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 1,
        },
        particles: {
          number: {
            value: 10,
            density: {
              enable: false,
              value_area: 800,
            },
          },
          color: {
            value: darkMode ? "#fff" : "#000", 
          },
          shape: {
            type: "star",
            options: {
              sides: 5,
            },
          },
          opacity: {
            value: darkMode ? 0.6 : 0.4, 
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: particleSize,
            random: false,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          rotate: {
            value: 0,
            random: true,
            direction: "clockwise",
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: lineDistance, 
            color: darkMode ? "#ffffff" : "#000000",
            opacity: 0.4,
            width: 2,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground;
