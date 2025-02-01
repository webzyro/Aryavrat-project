import React from "react";
import { benefits } from "../utils/staticData";
import BenefitCard from "./BenefitCard";

const Benefits = () => {
  return (
    <section className="w-full p-2 md:py-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-4xl text-center font-bold text-gray-800 py-10">
          Why Go Solar Now: Save Money, Energy, and Planet!
        </h1>
        <div className="w-full flex flex-wrap justify-center gap-10">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
