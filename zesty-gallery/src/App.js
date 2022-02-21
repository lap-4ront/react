import "./App.css";
import React, { useState } from "react";
import tabitha from "./assets/image1.jpg";
import ardy from "./assets/image2.jpg";
import elise from "./assets/image3.jpg";
import mahdi from "./assets/image4.jpg";
import osarugue from "./assets/image5.jpg";

const images = [tabitha, ardy, elise, mahdi, osarugue];

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleClick = () => {
    const length = images.length - 1;
    setCurrentImage((currentImage) => {
      return currentImage < length ? currentImage + 1 : 0;
    });
  };

  return (
    <section className="App">
      <header className="title">
        <h1>Zesty</h1>
        <h2>
          A Photo Gallery App <br /> by 4rontender
        </h2>
      </header>

      <figure className="image-container">
        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        <img alt="" src={images[currentImage]} onClick={handleClick} />
      </figure>
    </section>
  );
};

export default App;
