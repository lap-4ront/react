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
    <div className="App">
      <div className="title">
        <h1>Zesty</h1>
        <h2>
          A photogallery app <br /> by 4rontender
        </h2>
      </div>

      <div className="image-container">
        <img alt="" src={images[currentImage]} onClick={handleClick} />
      </div>
    </div>
  );
};

export default App;
