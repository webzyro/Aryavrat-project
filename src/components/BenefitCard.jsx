import React from "react";

const BenefitCard = ({ benefit }) => {
  return (
    <div className="w-xs p-4 flex items-center justify-center flex-col bg-white rounded-xl shadow-2xl shadow-grey gap-1.5 group">
      <div className="w-14 transition-all delay-75 duration-700 ease-in-out group-hover:scale-125">
        <img src={benefit.img} alt="" className="w-full h-full object-cover" />
      </div>
      <h3 className="text-2xl font-bold text-slate-700">{benefit.title}</h3>
      {/* <p>
        Switching to solar energy slashes monthly electricity costs by
        generating your own power.
      </p> */}
    </div>
  );
};

export default BenefitCard;
