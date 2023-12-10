import React from "react";

// ! import Image file

import heroImage from "../assets/hero.png";
import Button from "../layout/Button";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center md:px-32 px-5 p-4 m-2">
      <div className="md:w-3/5">
        <h1 className="text-8xl font-playFair font-semibold">
          Build Your Dream <span className="text-brightRed">House</span>
        </h1>
      </div>
      <div className="p-20 flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row">
        <div className="mb-14 lg:mb-0 lg:w-1/2">
          <h1 className="text-4xl font-playFair font-semibold max-w-xl leading-none text-center lg:text-5xl lg:text-left lg:leading-tight mb-5">
            Welcome to PageGenie Studios
          </h1>

          <p className="max-w-xl text-center lg:text-left lg:max-w-md">
            Immerse yourself in a symphony of colors, textures, and styles. From
            contemporary chic to timeless classics, uncover ideas that breathe
            life into every corner, reflecting your unique personality and
            taste.
          </p>
          <div className="flex justify-center  mt-14 lg:justify-start">
            <Button title="Free Consultation" />
          </div>
        </div>
        <div className="lg:w-1/2">
          <img src={heroImage} alt="heroImage" className="ml-auto rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
