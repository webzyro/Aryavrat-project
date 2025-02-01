import { Helmet } from "react-helmet";
import Breadcrumb from "../components/Breadcrumb";
import ServiceCard from "../components/ServiceCard";
import { Services } from "../utils/staticData";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const OurServices = () => {
  return (
    <>
      <Helmet>
        <title>Aryavrat | Services Page</title>
      </Helmet>
      <div className="w-full">
        <Breadcrumb title="Our Services" />

        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center my-6 p-2">
          <h1 className="text-2xl md:text-5xl text-center font-bold text-gray-800 py-10">
            Our Services
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
      </div>
    </>
  );
};

export default OurServices;
