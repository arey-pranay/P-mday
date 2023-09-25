import React from "react";

const Footer = ({ intensity }) => {
  return (
    <div
      className={`flex mt-full items-center justify-center p-2 bg-cyan-50 ${
        intensity > 500 ? `text-white` : `text-black`
      }`}
    >
      A &nbsp;{" "}
      <b>
        <a href="httpszz://www.github.com">Pranay Parikh </a>
      </b>{" "}
      &nbsp; Product
    </div>
  );
};

export default Footer;
