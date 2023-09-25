import React from "react";
import Slides from "./Slides";

const PlayCards = (user) => {
  return (
    <div className="overflow-hidden">
      <div className="bg-purple-900 w-full  py-12">
        <div className="flex flex-col justify-center items-center">
          <div>
            <h1 className="max-w-2xl mt-6 mb-2 text-4xl font-extrabold leading-none tracking-tight md:text-9xl xl:text-7xl text-white">
              Hair it groes ! 💇🏻‍♂️
            </h1>
            <p className="text-white text-xs font-extralight">
              Oops ! Sorry Again
            </p>
          </div>
        </div>
      </div>
      <div className="pr-40 pl-48 ml-12 w-full pt-6 z-90 bg-transparent ">
        <Slides user={user} />
      </div>
      {/* <div className="bg-purple-900 w-full pt-12"></div> */}
    </div>
  );
};

export default PlayCards;
