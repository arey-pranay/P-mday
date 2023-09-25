import React from "react";

const Footer = ({ bgcolor, fontcolor }) => {
  return (
    <div
      className={`flex mt-full items-center justify-center p-2 bg-${bgcolor} text-${fontcolor}
      }`}
    >
      A &nbsp;{" "}
      <b>
        <a href="https://www.github.com">Pranay Parikh </a>
      </b>{" "}
      &nbsp; Product
    </div>
  );
};

export default Footer;
