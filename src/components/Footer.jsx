import React from "react";

// ! import  all file

import logo from "../assets/logo.svg";

// ! import All icons

import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mx-auto">
      <div className="grid lg:grid-cols-4 grid-cols-1 p-10 items-center gap-20">
        <div className="flex flex-row gap-5 mx-auto">
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[22px] list-none font-semibold font-playFair py-2 uppercase">
            Company
          </h1>
          <ul>
            <li className="my-4 list-none hover:text-brightRed transition-all ease-in-out cursor-pointer">
              About
            </li>
            <li className="my-4 list-none hover:text-brightRed transition-all  ease-in-out  cursor-pointer">
              Careers
            </li>
            <li className="my-4 list-none hover:text-brightRed transition-all  ease-in-out  cursor-pointer">
              Mobile
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-[22px] list-none font-semibold font-playFair py-2 uppercase">
            Contact
          </h1>
          <ul>
            <li className="my-4 list-none hover:text-brightRed  cursor-pointer">
              Help/FAQ
            </li>
            <li className="my-4 list-none hover:text-brightRed  cursor-pointer">
              Press
            </li>
            <li className="my-4 list-none hover:text-brightRed  cursor-pointer">
              Afflicts
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-[22px] list-none font-semibold font-playFair py-2 uppercase">
            More
          </h1>
          <ul>
            <li className="my-4 list-none  hover:text-brightRed cursor-pointer ">
              Airlinefees
            </li>
            <li className="my-4 list-none hover:text-brightRed  cursor-pointer">
              Airline
            </li>
            <li className="my-4 list-none hover:text-brightRed  cursor-pointer">
              Low fare tips
            </li>
          </ul>
        </div>
      </div>
      <div className="flex space-x-4 justify-center items-center mb-5 mx-5">
        <a
          href="/"
          className="hover:text-brightRed transform hover:scale-200 transition-all duration-200  ease-in-out "
        >
          <FaGithub />
        </a>
        <a
          href="/"
          className="hover:text-brightRed transform hover:scale-100 transition-all duration-200 ease-in-out "
        >
          <FaLinkedinIn />
        </a>
        <a
          href="/"
          className="hover:text-brightRed  transform hover:scale-100 transition-all duration-200 ease-in-out "
        >
          <FaTwitter />
        </a>
        <a
          href="/"
          className="hover:text-brightRed transform hover:scale-100 transition-all duration-200 ease-in-out "
        >
          <FaInstagram />
        </a>
        <div>
          <p>
            Copyright{" "}
            <a
              href="https://github.com/TanutsaponJ"
              className="text-lg text-brightRed"
            >
              Tanutsapon Jinaongkan
            </a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
