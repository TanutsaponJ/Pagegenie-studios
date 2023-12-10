import React from "react";

// ! import all file

import Logo from "../assets/logo.svg";
import Button from "../layout/Button";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center md:px-32 px-5 p-4 m-2">
      <div className="flex flex-row gap-12 items-center text-lightText p-2">
        <div>
          <img src={Logo} alt="logoImage" />
        </div>

        <nav className="hidden md:flex gap-5 ">
          <a
            className="hover:text-brightRed transition-all ease-in-out"
            href="/work"
          >
            How it work
          </a>
          <a
            className="hover:text-brightRed transition-all ease-in-out"
            href="/gallery"
          >
            Design Gallery
          </a>
          <a
            className="hover:text-brightRed transition-all ease-in-out"
            href="/architects"
          >
            Architects
          </a>
          <a
            className="hover:text-brightRed transition-all ease-in-out"
            href="/articles"
          >
            Articles
          </a>
        </nav>
      </div>

      <div className="flex flex-row items-center p-2 gap-4">
        <a href="/signIn">Sign In</a>
        <Button title="Sign Up" />
      </div>
    </div>
  );
};

export default Navbar;
