import { Link } from "react-router-dom";
import solarWind from "../assets/solar-wind.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero2 = () => {
  return (
    <section className="w-full p-2">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-2">
        <div className="flex-1 flex flex-col items-start gap-6">
          <div className="flex items-center gap-2.5">
            <hr className="border-2 border-lime-400 w-16" />
            <span className="text-lime-400 text-lg font-semibold">
              Solar & Wind Energy
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 md:leading-16">
            Best Solution of <br className="hidden md:block" /> Solar and Wind{" "}
            <br className="hidden md:block" /> Energy.
          </h2>
          <p className="text-gray-600">
            Solar panels are used to convert the sun's energy into electricity,
            while wind turbines are used to convert the winds energy into
            electricity. Using a hybrid system is the best way to renewable
            resources.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/about"
              className="py-2 px-3 cursor-pointer font-semibold text-slate-50 bg-orange-500 group"
            >
              Know More{" "}
              <FaArrowRightLong className="inline transition-all duration-100 delay-100 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={solarWind}
            alt="Hero"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
