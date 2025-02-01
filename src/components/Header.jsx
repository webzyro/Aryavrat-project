import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="hidden md:block w-full bg-lime-500">
      <div className="max-w-7xl mx-auto p-2 flex flex-col md:flex-row gap-6 justify-between items-center">
        <div className="flex items-center flex-wrap gap-2 md:gap-6">
          <div className="flex items-center gap-3">
            <IoMdCall className="text-white" />
            <a href="tel:+91-7633940407" className="text-white">
              +91-7633940407
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MdEmail className="text-white" />
            <a
              href="mailto:aryavratcd@gmail.com 
"
              className="text-white"
            >
              aryavratcd@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaLocationDot className="text-white" />
            <span className="text-white">India</span>
          </div>
        </div>
        <div>
          <span className="text-white">Go Green With Aryavrat Energy</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
