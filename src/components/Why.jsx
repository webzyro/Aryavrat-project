import { FaArrowRightLong } from "react-icons/fa6";
import { Whys } from "../utils/staticData";
import WhyCard from "./WhyCard";
import { Link } from "react-router-dom";

const Why = () => {
  return (
    <section className="w-full bg-slate-100 p-2 md:py-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-5xl text-center font-bold text-gray-800 py-10">
          Why Choose Aryavrat Energy?
        </h1>
        <div className="w-full flex flex-wrap justify-center gap-10">
          {Whys.map((why) => (
            <WhyCard key={why.id} why={why} />
          ))}
        </div>
        <Link
          to="/contact"
          className="py-2 px-3 cursor-pointer font-semibold text-slate-50 bg-orange-500 group mt-5"
        >
          Let's Talk With Us{" "}
          <FaArrowRightLong className="inline transition-all duration-100 delay-100 group-hover:translate-x-1.5" />
        </Link>
      </div>
    </section>
  );
};

export default Why;
