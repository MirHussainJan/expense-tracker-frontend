import React, { useState } from "react";
import SingleCard from "./SingleCard";

const CardSlider = () => {
  const cards = [
    {
      title: "Mercury",
      subtitle: "Planet Solar System",
      number: 1,
      color: "#4A4A4A",
    },
    {
      title: "Venus",
      subtitle: "Planet Solar System",
      number: 2,
      color: "#E74C3C",
    },
    {
      title: "Earth",
      subtitle: "Planet Solar System",
      number: 3,
      color: "#3498DB",
    },
    {
      title: "Mars",
      subtitle: "Planet Solar System",
      number: 4,
      color: "#E67E22",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex col-lg-7 col-md-7 flex-col items-center p-0">
      <div className="flex justify-center space-x-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`transition-transform duration-500 ${
              index === currentIndex ? "scale-100" : "scale-75 opacity-50"
            }`}
          >
            {index === currentIndex && (
              <SingleCard
                title={card.title}
                subtitle={card.subtitle}
                number={card.number}
                color={card.color}
                image={card.image}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-start gap-3 w-full mt-2">
        <button
          onClick={handlePrev}
          className="px-4 cursor-pointer py-2 border-2 border-black text-xs bg-white rounded-full"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 cursor-pointer py-2 border-2 border-black text-xs bg-white rounded-full"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardSlider;