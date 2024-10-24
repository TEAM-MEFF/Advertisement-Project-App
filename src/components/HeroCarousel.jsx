import React, { useState, useEffect } from "react";
import Shopping1 from "../assets/img/Shopping1.jpg";
import Shopping2 from "../assets/img/Shopping2.jpg";
import Shopping3 from "../assets/img/Shopping3.jpg";
import Shopping4 from "../assets/img/Shopping4.jpg";

const images = [
  {
    src: Shopping1,
    text: "Welcome to DiMe Dwa, where quality meets your need ",
  },
  {
    src: Shopping2,
    text: "Enjoy hassel-free shopping right from your home!",
  },
  {
    src: Shopping3,
    text: "Fill your cart with premium items",
  },
  {
    src: Shopping4,
    text: "Quick and budget-friendly delivery",
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next image after a specific time interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the image every 3 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  // Move to the previous image
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Move to the next image
  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full mx-auto">
      {/* Image and Overlay */}
      <div
        className="relative w-full h-[450px] bg-center bg-cover duration-500 transition-all ease-in-out"
        style={{ backgroundImage: `url(${images[currentIndex].src})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          {/* Text on Image */}
          <h2 className="text-white text-2xl md:text-5xl font-semibold text-center my-auto w-2/3 h-6">
            {images[currentIndex].text}
          </h2>
        </div>
      </div>

      {/* Left Arrow */}
      <div
        className="absolute top-[50%] left-5 text-white cursor-pointer text-5xl bg-[#0e345aa4] pb-3 px-3 rounded-full"
        onClick={prevSlide}
      >
        &#8249;
      </div>

      {/* Right Arrow */}
      <div
        className="absolute top-[50%] right-5 text-white cursor-pointer text-5xl bg-[#0e345aa4] pb-3 px-3 rounded-full"
        onClick={nextSlide}
      >
        &#8250;
      </div>

      {/* Dots (for navigation) */}
      <div className="flex justify-center py-2 bg-[#0e345aa4] w-fit mx-auto mt-2 p-2 rounded-lg text-center">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer w-3 h-3 mx-1 rounded-full ${
              currentIndex === index ? "bg-themeColor" : "bg-slate-200"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
