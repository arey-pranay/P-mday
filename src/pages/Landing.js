import React, { useEffect, useRef } from "react";
import HeroImg from "../assets/hero.png";
import NavBar from "../components/NavBar";
import VanillaTilt from "vanilla-tilt";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Land() {
  // Find the image element you want to apply the effect to
  const imageRef = useRef(null);

  const goDownYa = () => {
    const upValue = window.innerWidth > 500 ? 650 : 1200;
    window.scrollTo({
      top: `${upValue}`,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let tilt = null; // Variable to store the Vanilla Tilt instance

    const handleMouseEnter = () => {
      // Initialize Vanilla Tilt on hover
      tilt = VanillaTilt.init(imageRef.current, {
        max: 25, // Maximum tilt rotation in degrees
        speed: 400, // Tilt transition speed in milliseconds
        glare: true, // Enable glare effect
        "max-glare": 0.2, // Maximum glare opacity
      });
    };

    const handleMouseLeave = () => {
      // Destroy the Vanilla Tilt instance on mouse leave
      if (tilt) {
        tilt.destroy();
        tilt = null;
      }
    };

    // Add event listeners for mouse enter and leave
    imageRef.current.addEventListener("mouseenter", handleMouseEnter);
    imageRef.current.addEventListener("mouseleave", handleMouseLeave);

    // Clean up event listeners when the component unmounts
    return () => {
      imageRef.current.removeEventListener("mouseenter", handleMouseEnter);
      imageRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <div className="min-h-screen">
      <NavBar />
      {/* <!-- Start block --> */}
      <section className="bg-white dark:bg-gray-900 landingPage py-24 md:py-0">
        <div className="grid max-w-screen-xl px-4 pb-0 mx-auto lg:gap-8 xl:gap-0 lg:pb-16 lg:grid-cols-12 ">
          <div className="mr-auto place-self-center lg:col-span-7 px-6">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Ever Happened ?
            </h1>
            <p className="max-w-2xl md:pr-16 pl-0.5 mb-6 font-mono text-cyan-600 lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400">
              <br />
              <ul className="list-disc space-y-5 px-5">
                <li>
                  You decide to change your life, you create a routine and set
                  an alarm.
                </li>
                <li>
                  Next morning you wake up late again and then promise yourself
                  to wake up early tomorrow.
                </li>
                <li>
                  That tomorrow never comes, you keep repeating this cycle and
                  never follow the routine because your routine depends on you
                  waking up on time.
                </li>
              </ul>
            </p>
            <button onClick={goDownYa} className="mx-16 md:mx-40 mt-8 md:mt-0">
              <a
                href="#"
                className=" text-white bg-purple-900 hover:bg-cyan-950 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-10 py-3 lg:py-3.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-900 focus:outline-none dark:focus:ring-purple-800"
              >
                Solve this problem
              </a>
            </button>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4"></div>
          </div>

          <div className="mt-10 lg:mt-0 lg:col-span-5 lg:flex">
            <AnimationOnScroll
              initiallyVisible={true}
              animateIn="animate__bounceInRight"
              animateOut="animate__bounceOutRight"
            >
              <img
                src={HeroImg}
                alt="hero mage"
                style={{ transform: "scale(0.8)" }}
                className="tilt-image hidden md:block"
                ref={imageRef}
              />
            </AnimationOnScroll>
          </div>
        </div>
      </section>

      <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
    </div>
  );
}

export default Land;
