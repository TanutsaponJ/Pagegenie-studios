import React from "react";

// ! import all file

import Logo from "../assets/logo3.svg";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center md:px-32 p-4 m-2">
      <div>
        <img src={Logo} alt="logoImage" />
      </div>

      <nav className="flex gap-4">
        <a href="/work">How it work</a>
        <a href="/gallery">Design Gallery</a>
        <a href="/architects">Architects</a>
        <a href="/articles">Articles</a>
      </nav>

      <div className="flex flex-row items-center p-2 gap-4">
        <a href="/signIn">Sign In</a>
        <button className="bg-brightRed px-4 py-2 rounded-md hover:bg-white hover:text-black hover:scale-105 transition-all">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
