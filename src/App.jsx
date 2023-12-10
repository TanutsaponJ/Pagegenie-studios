import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
      </main>
    </div>
  );
};

export default App;
