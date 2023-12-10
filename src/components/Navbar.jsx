import React from "react";
import { Link } from "react-scroll";

// ! import all file

import Logo from "../assets/logo.svg";
import Button from "../layout/Button";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center md:px-32 px-5 py-4 mx-2">
      <div className="flex flex-row gap-12 items-center text-lightText py-2">
        <div>
          <img src={Logo} alt="Company logo" className="cursor-pointer" />
        </div>

        <nav className="hidden md:flex gap-5">
          <Link
            className="hover:text-brightRed transition-all ease-in-out"
            to="/work"
          >
            How it work
          </Link>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightRed transition-all ease-in-out cursor-pointer"
            to="gallery"
          >
            Design Gallery
          </Link>
          <Link
            className="hover:text-brightRed  transition-all ease-in-out cursor-pointer"
            to="architects"
          >
            Architects
          </Link>
          <Link
            className="hover:text-brightRed transition-all ease-in-out cursor-pointer"
            to="articles"
          >
            Articles
          </Link>
        </nav>
      </div>

      <div className="flex flex-row items-center py-2 gap-4">
        <Link className="hidden md:block" to="/signIn">
          Sign In
        </Link>
        <Button className="hidden md:block" title="Sign Up" />
      </div>
    </div>
  );
};

export default Navbar;
