import React from "react";

// ! import all Image
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/hero.png";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center md:px-32 px-5 p-4 m-2">
      <div className="py-5 md:w-2/6">
        <p className="text-4xl font-playFair font-medium">
          Build professional valuable room
        </p>
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
          <img src={gallery1} alt="gallery1" className="w-full h-auto" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
          <img src={gallery2} alt="gallery2" className="w-full h-auto" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
          <img src={gallery3} alt="gallery3" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
