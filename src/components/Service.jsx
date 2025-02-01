import { Link } from "react-router-dom";
import { Services } from "../utils/staticData";
import ServiceCard from "./ServiceCard";
import { FaArrowRightLong } from "react-icons/fa6";

const Service = () => {
  return (
    <section className="w-full p-2 my-4 md:my-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-5xl text-center font-bold text-gray-800 py-10">
          Sustainable Solar Solutions for Every Need
        </h1>
        <div className="w-full flex flex-wrap justify-center gap-10">
          {Services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <Link
          to="/contact"
          className="py-2 px-3 mt-5 cursor-pointer font-semibold text-slate-50 bg-orange-500 group"
        >
          Let's Talk{" "}
          <FaArrowRightLong className="inline transition-all duration-100 delay-100 group-hover:translate-x-1.5" />
        </Link>
      </div>
    </section>
  );
};

export default Service;
