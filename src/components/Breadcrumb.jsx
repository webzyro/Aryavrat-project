import { RiArrowRightDoubleFill } from "react-icons/ri";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <div className="w-full bg-lime-700 h-44 md:h-52 flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-4xl font-bold text-slate-100 mb-4">
        {title}
      </h1>
      <div className="w-full flex justify-center items-center gap-1.5">
        <IoMdArrowDropright className="text-2xl text-slate-100 inline" />
        <Link
          to="/"
          className="text-2xl font-bold text-slate-100 hover:text-lime-300 -mt-1.5"
        >
          Home
        </Link>
        <RiArrowRightDoubleFill size={30} className="text-slate-100" />
        <h1 className="text-2xl text-slate-100 font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default Breadcrumb;
