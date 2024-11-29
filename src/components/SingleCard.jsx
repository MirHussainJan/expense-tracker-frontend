import React from "react";

const SingleCard = ({ title, subtitle, number }) => {
  return (
    <div className="flex gap-5">
      <div className="relative">
        <span
          className="text-9xl fw-bold m-0"
        >
          {number}
        </span>
      </div>
      <div className={`w-72 h-96 p-6 bg-white rounded-lg shadow-lg flex flex-col justify-between`}>
        <h3 className="text-2xl font-bold text-black">{title}</h3>
        <p className="text-lg text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};

export default SingleCard;