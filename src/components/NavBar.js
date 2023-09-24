import React from "react";
import Logo from "../assets/logo2.png";

const NavBar = () => {
  return (
    <div>
      <header
        className="w-full border-green-900 px-5 py-4 mb-12 navbar-shadow"
        style={{
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
      >
        <nav className=" border-gray-800 dark:bg-gray-900 ">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <a href="#" className="flex items-center">
              <img src={Logo} className="mr-3 h-12" alt="Landwind Logo" />
            </a>
            <span className="self-center font-mono hidden md:block ml-6 text-4xl text-purple-700  font-bold whitespace-nowrap dark:text-white">
              Play-My-Day
            </span>
            <div className="flex items-center">
              <a
                href="https://themesberg.com/product/tailwind-css/landing-page"
                className="text-white bg-purple-900 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-10 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-900 focus:outline-none dark:focus:ring-purple-800"
              >
                Log In
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
