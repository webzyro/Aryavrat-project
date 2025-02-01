import React from "react";

const WhyCard = ({ why }) => {
  return (
    <div className="max-w-sm flex flex-col items-center justify-center gap-3">
      <div className="w-full">
        <img
          src={why.img}
          alt={why.title}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-2xl font-bold text-gray-800">{why.title}</h2>
      <p className="text-gray-600">{why.desc}</p>
    </div>
  );
};

export default WhyCard;
