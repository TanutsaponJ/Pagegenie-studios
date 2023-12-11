import React from "react";
// ! import all assets file

import img from "../assets/consultationImg.svg";
import Button from "../layout/Button";

const Consultation = () => {
  return (
    <div className="min-h-screen1/2 flex flex-col items-center md:justify-center md:px-32 px-5 p-4 m-2">
      <div className="flex flex-col items-center md:flex-row mt-10 md:mt-0">
        <div className="flex flex-col gap-5 p-5 lg:w-full">
          <img src={img} alt="Consultation" className="lg:h-[700px] mx-auto" />
        </div>
        <div className="flex flex-wrap items-center mx-auto">
          <div className="flex flex-col items-center text-center space-y-5">
            <h1 className="text-6xl font-playFair md:w-2/4 mt-5 md:mt-0">
              Realize your dream project with{" "}
              <span className="text-brightRed">PageGenie Studios</span>
            </h1>
            <Button title="Free Consultation" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
