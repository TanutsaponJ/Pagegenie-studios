import React from "react";
import Button from "../layout/Button";

// ! import Image

import img1 from "../assets/feature1.png";

import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: icon1,
      title: "100% guaranteed project completion",
      description:
        " Build safe, comfortable and transparent with a project management application with a joint account.",
    },
    {
      id: 2,
      icon: icon2,
      title: "No additional fees",
      description:
        "  There are no hidden costs. The value of the offer you get is the value you paid.",
    },
    {
      id: 3,
      icon: icon3,
      title: "Get escort from the Team",
      description:
        "Monitor reports from the Arista team who check directly in the field.",
    },
  ];
  return (
    <div className="min-h-screen lg:px-14 max-w-screen-2xl mx-auto my-8">
      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Image Section */}

        <div>
          <img className=" rounded-md" src={img1} alt="" />
        </div>

        {/* Features Details */}
        <div className="md:w-3/5 mx-auto">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-playFair font-semibold text-center mb-4 md:w4/5">
              Build your needs with PageGenie Studios
            </h1>

            <div className="flex flex-col gap-5 p-5">
              {features.map((featuresCard) => (
                <div
                  key={featuresCard.id}
                  className="flex flex-row items-center"
                >
                  <img src={featuresCard.icon} alt="" />
                  <div>
                    <h3 className="font-semibold pb-3">{featuresCard.title}</h3>
                    <p className="w-4/5 text-slate-300">
                      {featuresCard.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-20 flex flex-row justify-center">
        <Button title="Free Consultation" />
      </div>
    </div>
  );
};

export default Features;
