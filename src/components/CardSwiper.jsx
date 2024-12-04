import  { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import SingleCard from "./SingleCard";

const fetchGroups = async (userId) => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error("Authentication token not found");
  }

  const response = await fetch(`http://localhost:3000/api/groups/${userId}`, {
    method: "GET",
    headers: {
      Authorization: `${token}`,
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch groups");
  }

  return response.json();
};

const CardSwiper = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const userId = sessionStorage.getItem("userId");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["groups", userId],
    queryFn: () => fetchGroups(userId),
    enabled: !!userId,
  });

  if (!userId || isError) {
    return <div>{error?.message || "Please log in to view your groups."}</div>;
  }

  if (isLoading) {
    return <div>Loading groups...</div>;
  }

  const cards = data.groups.map((group) => ({
    title: group.groupName,
    subtitle: group.groupType,
    number: group.members.length,
    members: group.members.map((member) => member.username),
  }));

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

  const onSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  return (
    <div className="col-lg-8 col-md-12 text-center p-0">
      <h1 className="text-3xl font-bold mb-6">Groups</h1>

      <Swiper
        onSwiper={setSwiperInstance}
        centeredSlides={true}
        onSlideChange={onSlideChange}
        className="swiper_container"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 2, spaceBetween: 30 },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              className={`transition-transform duration-500 ${
                index === currentIndex ? "scale-100" : "scale-75 opacity-50"
              }`}
            >
              <SingleCard
                title={card.title}
                subtitle={card.subtitle}
                number={card.number}
                members={card.members}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-between w-full mt-4 space-x-4">
        <button
          onClick={handlePrev}
          className={`w-10 h-10 flex items-center justify-center font-semibold text-lg text-black bg-white border-2 border-black rounded-full shadow-lg hover:bg-gray-100 ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentIndex === 0}
        >
          <FaArrowLeft className="text-black text-lg" />
        </button>
        <button
          onClick={handleNext}
          className={`w-10 h-10 flex items-center justify-center font-semibold text-lg text-black bg-white border-2 border-black rounded-full shadow-lg hover:bg-gray-100 ${
            currentIndex === cards.length - 1 ? "opacity-50 cursor-not-allowed" : ""
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
