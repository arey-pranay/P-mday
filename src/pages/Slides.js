import React, { useRef, useEffect, useState } from "react";
import "./SlideStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { getDatabase, ref, get, child } from "firebase/database";
import { app } from "../Firebase/Firebase";
const Slider = (user) => {
  const sliderRef = useRef(null);
  const [active, setActive] = useState(0);

  const handleNextClick = () => {
    try {
      setActive((prevActive) =>
        prevActive + 1 < items.length ? prevActive + 1 : prevActive
      );
    } catch (error) {
      alert(error);
    }

    // loadShow();
  };

  const handlePrevClick = () => {
    setActive((prevActive) =>
      prevActive - 1 >= 0 ? prevActive - 1 : prevActive
    );
    // loadShow();
  };

  useEffect(() => {
    const items = sliderRef.current.querySelectorAll(".slider .item");

    function loadShow() {
      let stt = 0;
      items[active].style.transform = "none";
      items[active].style.zIndex = 1;
      items[active].style.filter = "none";
      items[active].style.opacity = 1;
      for (let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${
          1 - 0.2 * stt
        }) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = "blur(5px)";
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
      stt = 0;
      for (let i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${
          1 - 0.2 * stt
        }) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = "blur(5px)";
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
    }

    loadShow();

    // Add event listeners for next and prev buttons
    const nextButton = sliderRef.current.querySelector("#next");
    const prevButton = sliderRef.current.querySelector("#prev");
    nextButton.addEventListener("click", handleNextClick);
    prevButton.addEventListener("click", handlePrevClick);

    // Clean up event listeners
    return () => {
      nextButton.removeEventListener("click", handleNextClick);
      prevButton.removeEventListener("click", handlePrevClick);
    };
  }, [active]);
  const [itemz, setItemz] = useState([{ name: "No No-Name", duration: "0" }]);
  const items = [
    {
      title: "Wake Up",
      content: <p>15:00</p>,
    },
    {
      title: "Slide 2",
      content: (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni
          magnam unde ipsam repudiandae explicabo expedita labore, sequi minus
          neque beatae voluptatum, quasi accusamus quia quis voluptas laborum
          ad! Ab totam doloribus, excepturi possimus rem vel quia fugit
          molestiae officiis!
        </p>
      ),
    },
    {
      title: "Slide 2",
      content: (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni
          magnam unde ipsam repudiandae explicabo expedita labore, sequi minus
          neque beatae voluptatum, quasi accusamus quia quis voluptas laborum
          ad! Ab totam doloribus, excepturi possimus rem vel quia fugit
          molestiae officiis!
        </p>
      ),
    },
    {
      title: "Slide 2",
      content: (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni
          magnam unde ipsam repudiandae explicabo expedita labore, sequi minus
          neque beatae voluptatum, quasi accusamus quia quis voluptas laborum
          ad! Ab totam doloribus, excepturi possimus rem vel quia fugit
          molestiae officiis!
        </p>
      ),
    },
    {
      title: "Slide 2",
      content: (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni
          magnam unde ipsam repudiandae explicabo expedita labore, sequi minus
          neque beatae voluptatum, quasi accusamus quia quis voluptas laborum
          ad! Ab totam doloribus, excepturi possimus rem vel quia fugit
          molestiae officiis!
        </p>
      ),
    },
    {
      title: "Slide 2",
      content: (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni
          magnam unde ipsam repudiandae explicabo expedita labore, sequi minus
          neque beatae voluptatum, quasi accusamus quia quis voluptas laborum
          ad! Ab totam doloribus, excepturi possimus rem vel quia fugit
          molestiae officiis!
        </p>
      ),
    },
    {
      title: "Slide 2",
      content: (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni
          magnam unde ipsam repudiandae explicabo expedita labore, sequi minus
          neque beatae voluptatum, quasi accusamus quia quis voluptas laborum
          ad! Ab totam doloribus, excepturi possimus rem vel quia fugit
          molestiae officiis!
        </p>
      ),
    },
    // Add more slides as needed
  ];
  const invalidCharacterRegex = /[.$[\]]/g;
  // console.log(user);
  const rawUsername = user.user.user.email.split("@")[0];
  const username = rawUsername.replace(invalidCharacterRegex, "-");
  // console.log(username);
  // const username = rawUsername.replace(invalidCharacterRegex, "-");
  // const username = "pranayparikh2004";
  const db = getDatabase(app);
  get(child(ref(db), `user/${username}`)).then((snapshot) => {
    const userData = snapshot.val();
    const newTasks = [];

    // Loop through the keys (e.g., 'a', 'b', 'c', etc.)
    for (const key in userData) {
      if (userData.hasOwnProperty(key)) {
        const taskData = userData[key];
        const newTask = {
          name: taskData[0],
          duration: taskData[1],
        };

        newTasks.push(newTask);
        // console.log(newTask);
      }
    }
    setItemz([newTasks][0]);
    // console.log("Hey");
    // setTasks([...tasks, ...newTasks]);
    // Update the tasks state with all retrieved tasks
  });
  console.log(itemz);

  return (
    <div className="-z-10 ">
      <div className="slider text-center" ref={sliderRef}>
        {itemz.map((item, index) => (
          <div
            className={`item ${index === active ? "active" : ""} text-right`}
            key={index}
          >
            <h1 className="text-3xl md:text-4xl mt-10 mx-4 font-sans text-cyan-50 font-extrabold">
              {item.name.split(" ")[1]}
            </h1>
            <div className="mt-12 ml-5 text-3xl md:text-6xl text-white">
              {item.duration}:00
            </div>
            <button className="mt-8 ml-6 text-white bg-cyan-500 rounded-2xl px-7 py-4">
              <FontAwesomeIcon icon={faPlay} /> /{" "}
              <FontAwesomeIcon icon={faPause} />
            </button>
          </div>
        ))}
        <button id="next">&gt;</button>
        <button id="prev">&lt;</button>
      </div>
    </div>
  );
};

export default Slider;
