import { useState } from "react";
import { Menus } from "../utils/staticData";
import { LuCircleX } from "react-icons/lu";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full shadow-sm sticky top-0 bg-white z-[999]">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 p-2 relative">
        <Link to="/" className="w-[60px]">
          <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
        </Link>
        <ul className="hidden list-none lg:flex items-center gap-5">
          {Menus.map((menu) => (
            <Link to={menu.link} key={menu.id}>
              <li className="text-gray-600 text-xl cursor-pointer capitalize font-semibold transition-all ease-in-out delay-75 hover:text-orange-500">
                {menu.title}
              </li>
            </Link>
          ))}
        </ul>
        <a
          href="tel:+91-7633940407"
          className="hidden lg:block p-2 md:py-2 md:px-3 cursor-pointer font-bold text-slate-700 border-2 border-slate-400 hover:border-orange-500 hover:text-orange-500 transition-all ease-in-out delay-75 relative"
        >
          Free Consultancy
          {/* <div className="absolute top-0 right-0 size-3 rounded-full bg-amber-800 opacity-75 animate-ping"></div> */}
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden cursor-pointer"
        >
          {open ? (
            <LuCircleX size={24} className="font-bold" />
          ) : (
            <BiMenu size={24} className="font-bold" />
          )}
        </button>

        {/* small menu list */}
        {open && (
          <ul className="list-none flex flex-col items-start gap-5 bg-white absolute top-16 left-0 shadow-md w-full p-2">
            {Menus.map((menu) => (
              <Link to={menu.link} key={menu.id} onClick={() => setOpen(!open)}>
                <li className="text-gray-600 text-xl cursor-pointer capitalize font-semibold transition-all ease-in-out delay-75 hover:text-orange-500">
                  {menu.title}
                </li>
              </Link>
            ))}
            <a
              href="tel:07633940407"
              className="text-gray-600 text-xl cursor-pointer font-semibold"
            >
              +91-7633940407
            </a>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
