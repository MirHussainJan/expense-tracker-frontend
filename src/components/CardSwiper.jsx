import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // React Icons

// Swiper styles
import 'swiper/css';
import SingleCard from './SingleCard'; // Import the SingleCard component

const CardSwiper = () => {
  const cards = [
    { title: 'Mercury', subtitle: 'Planet Solar System', number: 1, color: '#4A4A4A' },
    { title: 'Venus', subtitle: 'Planet Solar System', number: 2, color: '#E74C3C' },
    { title: 'Earth', subtitle: 'Planet Solar System', number: 3, color: '#3498DB' },
    { title: 'Mars', subtitle: 'Planet Solar System', number: 4, color: '#E67E22' },
  ];

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  // Update currentIndex when the slide changes
  const onSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  return (
    <div className="col-lg-8 col-md-8 text-center p-0">
      <h1 className="text-3xl font-bold mb-6">Groups</h1>
      
      {/* Swiper Component */}
      <Swiper
        onSwiper={setSwiperInstance}
        slidesPerView={2}
        centeredSlides={true}
        onSlideChange={onSlideChange}
        className="swiper_container"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              className={`transition-transform duration-500 ${
                index === currentIndex ? 'scale-100' : 'scale-75 opacity-50'
              }`}
            >
              <SingleCard
                title={card.title}
                subtitle={card.subtitle}
                number={card.number}
                color={card.color}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full mt-4 space-x-4">
        <button
          onClick={handlePrev}
          className={`w-10 h-10 flex items-center justify-center font-semibold text-lg text-black bg-white border-2 border-black rounded-full shadow-lg hover:bg-gray-100 ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={currentIndex === 0}
        >
          <FaArrowLeft className="text-black text-lg" />
        </button>
        <button
          onClick={handleNext}
          className={`w-10 h-10 flex items-center justify-center font-semibold text-lg text-black bg-white border-2 border-black rounded-full shadow-lg hover:bg-gray-100 ${
            currentIndex === cards.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={currentIndex === cards.length - 1}
        >
          <FaArrowRight className="text-black text-lg" />
        </button>
      </div>
    </div>
  );
};

export default CardSwiper;
