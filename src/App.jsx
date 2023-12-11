import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import Consultation from "./components/Consultation";

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

        <div id="features">
          <Features />
        </div>

        <div id="consultation">
          <Consultation />
        </div>
      </main>
    </div>
  );
};

export default App;
