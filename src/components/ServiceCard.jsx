import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="max-w-xs p-2 flex flex-col justify-start space-y-4 bg-white rounded-xl shadow-md shadow-slate-600 transition duration-700 ease-in-out hover:-translate-y-2">
      <div className="w-full h-[200px] rounded-md overflow-hidden">
        <img
          src={service.img}
          alt="image"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <h1 className="text-3xl font-bold text-slate-800">{service.title}</h1>
      <p className="leading-6 text-start text-slate-700 text-md">
        {service.desc}
      </p>
      <Link
        to="/service"
        className="w-fit py-2 flex items-center justify-center gap-1.5 text-lg text-slate-800 border-none outline-none cursor-pointer font-semibold"
      >
        Learn More <FaLongArrowAltRight />
      </Link>
    </div>
  );
};

export default ServiceCard;
