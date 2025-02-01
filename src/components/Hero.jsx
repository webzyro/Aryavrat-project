import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full bg-[url('./assets/hero.jpeg')] bg-cover bg-center h-80 md:h-[500px] relative">
      <h1 className="text-4xl md:text-6xl text-slate-600 pl-5 pt-10 md:leading-16 font-bold md:pt-20 md:pl-20 capitalize">
        Switch to energy that <br className="hidden lg:block" /> doesn’t harm
        nature
      </h1>
      <div className="flex items-center gap-6 absolute top-50 md:top-60 left-6 md:left-20">
        <Link
          to="/service"
          className="py-2 px-3 cursor-pointer font-semibold text-slate-50 bg-orange-500 group"
        >
          Learn More{" "}
          <FaArrowRightLong className="inline transition-all duration-100 delay-100 group-hover:translate-x-1.5" />
        </Link>
        <a
          href="tel:+91-7633940407"
          className="py-2 px-4 cursor-pointer font-bold text-slate-700 border-2 border-slate-500 hover:border-orange-500 hover:text-orange-500 transition-all ease-in-out delay-75 group"
        >
          Call Now{" "}
          <FaArrowRightLong className="inline transition-all duration-100 delay-100 group-hover:translate-x-1.5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
