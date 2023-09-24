import React, { useEffect, useRef } from "react";
import StepsImg from "../assets/stepsfinal2.png";
import VanillaTilt from "vanilla-tilt";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { signInWithGoogle } from "../Firebase";

function Landinging() {
  // Find the image element you want to apply the effect to
  const imageRef = useRef(null);

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
      // imageRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <div className="bg-purple-900 h-100vh pt-10 pb-5 ">
      {/* <!-- Start block --> */}
      <section className=" dark:bg-gray-900 py-24 md:py-0">
        <div className="grid max-w-screen-xl px-4 pt-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-16">
          <div className="lg:col-span-5 lg:flex ml-20">
            {" "}
            {/* Changed the col-span to 5 */}
            <AnimationOnScroll
              initiallyVisible={false}
              animateIn="animate__bounceInLeft"
              animateOut="animate__bounceOutLeft"
            >
              <img
                src={StepsImg}
                alt="hero mage"
                className="tilt-image hidden md:block mt-12"
                style={{ transform: "scale(1.2)" }}
                ref={imageRef}
              />
            </AnimationOnScroll>
          </div>

          <div className="mr-auto place-self-center lg:col-span-7 px-6">
            {" "}
            {/* Changed the col-span to 7 */}
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white">
              Here is how !
            </h1>
            <p className="max-w-2xl md:pr-16 pl-0.5 mb-6 font-mono text-cyan-200 lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400">
              <br />
              <ul className="list-disc space-y-5 px-5">
                <li>
                  Instead of meaninglessly dumping your entire schedule due to
                  waking up late, we'll help you make the best of your day,
                  whenever you wake up.
                </li>
                <li>
                  So, step 1 is to tell us about how exactly you want your
                  routine to be, along with the duration of each task.
                </li>
                <li>
                  After this, everyday when you wake up, come here and click the
                  PlayMyDay button. From that second, we tell you the tasks you
                  planned to do, and what all tasks can be achieved if you start
                  right now.
                </li>
              </ul>
            </p>
            <button
              onClick={signInWithGoogle}
              className="mx-16 md:mx-40 mt-8 md:mt-6"
            >
              <a
                href="#"
                className=" text-purple-900 bg-white hover:bg-cyan-200 hover:text-gray-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-10 py-3 lg:py-4 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-900 focus:outline-none dark:focus:ring-purple-800"
              >
                Let's Get Started !
              </a>
            </button>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4"></div>
          </div>
        </div>
      </section>

      <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
    </div>
  );
}

export default Landinging;
