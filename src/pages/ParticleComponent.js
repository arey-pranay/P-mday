import React, { useEffect, useRef } from "react";
// import particlesJS from "particles.js";
import Stats from "stats.js"; // Import the Stats class
import "particles.js/particles";
import StepsImg from "../assets/bunny.png";
import BunnyImage from "../assets/bunny.png";
import VanillaTilt from "vanilla-tilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCoffee,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const particlesJS = window.particlesJS;

const ParticleComponent = () => {
  useEffect(() => {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 34,
          density: { enable: true, value_area: 630.6959730062122 },
        },
        color: { value: "#ffffff" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
          image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
        },
        size: {
          value: 32,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
        },
        line_linked: {
          enable: false,
          distance: 500,
          color: "#ffffff",
          opacity: 0.4,
          width: 2,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "bottom",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "bubble" },
          onclick: { enable: true, mode: "repulse" },
          resize: true,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 0.5 } },
          bubble: {
            distance: 400,
            size: 4,
            duration: 0.3,
            opacity: 1,
            speed: 3,
          },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    });
    var count_particles, stats, update;
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "-100px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector(".js-count-particles");
    update = function () {
      stats.begin();
      stats.end();
      if (
        window.pJSDom[0].pJS.particles &&
        window.pJSDom[0].pJS.particles.array
      ) {
        // count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
      }
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, []);
  // const element = document.querySelector("img");
  // VanillaTilt.init(element);
  // element.addEventListener("tiltChange");
  const tiltRef = useRef(null);

  useEffect(() => {
    // Initialize VanillaTilt when the component mounts
    VanillaTilt.init(tiltRef.current, {
      max: 45, // Maximum tilt rotation in degrees
      speed: 6400, // Tilt transition speed in milliseconds
      glare: true, // Enable glare effect
      "max-glare": 0.2, // Maximum glare opacity
      startX: -20, // Initial tilt on the X-axis in degrees
      startY: -20, // Initial tilt on the Y-axis in degrees
      reset: true, // Reset to initial tilt on mouse leave
    });

    return () => {
      // tiltRef.current.vanillaTilt.destroy(); // Destroy the tilt instance
    };
  }, []);
  const goDownYa = () => {
    const upValue = window.innerWidth > 500 ? 650 : 1200;
    window.scrollTo({
      top: `${upValue}`,
      behavior: "smooth",
    });
  };
  const scrollDown = () => {
    // Replace 'your-element-id' with the ID of the element you want to scroll to
    const element = document.getElementById("PlayCards");

    if (element) {
      // Scroll to the element's position
      element.scrollIntoView({
        behavior: "smooth", // Adds smooth scrolling animation
      });
    }
  };
  return (
    <>
      <div
        id="particles-js"
        style={{
          position: "absolute",
          width: "100%",
          backgroundColor: "#680c9c",
          backgroundImage: 'url("")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
          zIndex: -1,
        }}
        className="h-3/4 md:h-screen"
      >
        {/* Content inside the particle.js container */}
      </div>
      {/* <!-- Start block --> */}
      <section className=" dark:bg-gray-900 py-24 md:py-0  ">
        <div className="grid max-w-screen-xl px-4 pt-4 pb-0 mx-auto lg:gap-5 xl:gap-0 lg:py-0 lg:grid-cols-12 lg:pt-8">
          <div className="lg:col-span-5 lg:flex mr-16 pb-0 hidden md:block">
            {" "}
            {/* Changed the col-span to 5 */}
            <img src={BunnyImage} alt="" ref={tiltRef} />
          </div>

          <div className="mr-auto  lg:col-span-7 px-6">
            {" "}
            {/* Changed the col-span to 7 */}
            <h1 className="max-w-2xl mt-6 mb-2 text-4xl font-extrabold leading-none tracking-tight md:text-9xl xl:text-7xl text-white">
              Hare you are !
            </h1>
            <p className="font-light text-white text-xs">
              Sorry for that bun, I mean, pun.
            </p>
            <div className="flex w-fit gap-8 my-8 justify-between">
              <button onClick={goDownYa} className="mt-8 md:mt-6">
                <div className=" flex gap-5 justify-between items-center text-lg text-purple-900 bg-purple-200 border-8 border-white  hover:bg-purple-400 hover:text-gray-50 font-medium rounded-3xl text-sm px-4 lg:px-5 py-3 lg:py-4 sm:mr-2 lg:mr-0 ">
                  <FontAwesomeIcon icon={faCalendar} className="text-3xl" />{" "}
                  <h1 className="hidden md:block">Create a Schedule</h1>
                </div>
              </button>
              <button onClick={scrollDown} className="mt-8 md:mt-6">
                <div className="flex gap-5 justify-between items-center text-lg text-white bg-cyan-400 border-white border-8 hover:bg-cyan-200 hover:text-cyan-900 font-medium rounded-3xl text-sm px-4 lg:px-10 py-3 lg:py-4 sm:mr-2 lg:mr-0">
                  Play My Day
                  <FontAwesomeIcon icon={faPlay} className="text-3xl" />{" "}
                </div>
              </button>
            </div>
            <p className="max-w-2xl md:pr-16 pl-0.5 mb-0 font-mono text-white lg:mb-0 md:text-lg lg:text-lg dark:text-gray-400">
              <br />
              As{" "}
              <a
                className="text-cyan-200 underline hover:text-cyan-400"
                href="https://twitter.com/drmikemurdock"
                target="_blank"
              >
                Mike Murdock
              </a>{" "}
              once said, <br /> "The secret of your future is hidden in your
              daily routine." So from this moment, let's start making the best
              of your day.
              {/* <li>
                  So, step 1 is to tell us about how exactly you want your
                  routine to be, along with the duration of each task.
                </li>
                <li>
                  After this, everyday when you wake up, come here and click the
                  PlayMyDay button. From that second, we tell you the tasks you
                  planned to do, and what all tasks can be achieved if you start
                  right now.
                </li> */}
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParticleComponent;
