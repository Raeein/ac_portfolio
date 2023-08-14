import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particles-config";

const ParticlesBackground = ( {darkMode }) => {
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };
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
            value: darkMode ? "#fff" : "#000", // Set different colors based on darkMode
          },
          shape: {
            type: "star",
            options: {
              sides: 5,
            },
          },
          opacity: {
            value: darkMode ? 0.6 : 0.4, // Adjust opacity based on darkMode
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 4,
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
            distance: 600,
            color: darkMode ? "#ffffff" : "#000000", // Set different colors based on darkMode
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
        // interactivity: {
        //   events: {
        //     onhover: {
        //       enable: true,
        //       mode: ["grab"],
        //     },
        //     onclick: {
        //       enable: false,
        //       mode: "bubble",
        //     },
        //     resize: true,
        //   },
        //   modes: {
        //     grab: {
        //       distance: 400,
        //       line_linked: {
        //         opacity: 1,
        //       },
        //     },
        //     bubble: {
        //       distance: 400,
        //       size: 40,
        //       duration: 2,
        //       opacity: 8,
        //       speed: 3,
        //     },
        //     repulse: {
        //       distance: 200,
        //     },
        //     push: {
        //       particles_nb: 4,
        //     },
        //     remove: {
        //       particles_nb: 2,
        //     },
        //   },
        // },
        retina_detect: true,
        // background: {
        //   color: "#111",
        //   image: "",
        //   position: "50% 50%",
        //   repeat: "no-repeat",
        //   size: "cover",
        // },
      }}
    />
  );
};

export default ParticlesBackground;
