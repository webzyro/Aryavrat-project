import { BiPhone } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900">
      {/* <div className="absolute inset-0 blur-3xl bg-black opacity-70"></div> */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="w-full text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col gap-2.5">
            <h2 className="text-3xl border-b-2 border-amber-400 pb-1.5">
              About
            </h2>
            <p className="text-slate-500 font-semibold">
              Aryavrat Energy provides innovative solar solutions, focusing on
              sustainability and cost savings. With over 200 projects, we aim to
              reduce bills and promote eco-friendly living.
            </p>
            {/* <p className="text-slate-500 flex items-start gap-3 font-semibold">
              <FaLocationDot /> 3417 Constitution Blvd Darlington, Pennsylvania
              (PA), 16115
            </p> */}
          </div>

          <div className="flex flex-col gap-2.5">
            <h2 className="text-3xl border-b-2 border-amber-400 pb-1.5 font-semibold">
              Quick Links
            </h2>
            <ul className="text-slate-500 list-none font-semibold">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
              <Link to="/gallery">
                <li>Gallery</li>
              </Link>
              <Link to="/service">
                <li>Service</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-2.5">
            <h2 className="text-3xl border-b-2 border-amber-400 pb-1.5 font-semibold">
              Services
            </h2>
            <ul className="text-slate-500 list-none font-semibold">
              <li>Rooftop</li>
              <li>Ground Mounted</li>
              <li>Water Pump</li>
              <li>Street Light</li>
              <li>Cold Store</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2.5">
            <h2 className="text-3xl border-b-2 border-amber-400 pb-1.5 font-semibold">
              Support
            </h2>
            <div className="text-slate-500 flex items-center justify-start gap-3 font-semibold">
              <FaLocationDot size={30} className="w-16" />
              <span>
                303, Madhurani Complex, Near Gyanoday Grukul School, Gola Road,
                Danapur, Patna-801503, Bihar
              </span>
            </div>
            <a
              href="tel:+91-7633940407"
              className="text-slate-500 font-semibold"
            >
              <BiPhone size={30} className="inline mr-2" />
              +91-7633940407
            </a>
            <a
              href="mailto:aryavratcd@gmail.com"
              className="text-slate-500 font-semibold"
            >
              <MdEmail size={30} className="inline mr-2" />
              aryavratcd@gmail.com
            </a>
          </div>
        </div>
      </div>
      <hr className="border border-slate-600" />
      <div className="max-w-7xl mx-auto p-6">
        <p className="text-slate-200 text-center">
          &copy; Copyright 2025 Aryavrat Energy - All Rights Reserved Made with
          💖 by{" "}
          <a
            href="https://www.webzyro.com/"
            target="_blank"
            rel="noreferrer"
            className="text-amber-400 font-semibold"
          >
            Webzyro
          </a>{" "}
          - Digital Marketing Agency
        </p>
      </div>
    </footer>
  );
};

export default Footer;
