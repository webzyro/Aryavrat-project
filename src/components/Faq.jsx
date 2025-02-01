import { useState } from "react";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";
import { Faqs } from "../utils/staticData";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full p-2">
      <div className="max-w-6xl mx-auto flex flex-col justify-center gap-3.5">
        <h1 className="text-2xl md:text-5xl text-center font-bold text-gray-800 py-10">
          Frequently Asked Questions
        </h1>
        <div className="w-full flex flex-col items-center gap-3 p-3.5">
          {Faqs.map((faq, index) => (
            <div
              key={index}
              className="w-full lg:w-4/5 py-1.5 px-4 bg-slate-300 flex flex-col gap-3 rounded-2xl shadow-xs transition-all duration-300 ease-in-out"
            >
              <div
                onClick={() => handleClick(index)}
                className="w-full flex items-center justify-between gap-3 cursor-pointer mt-1.5"
              >
                <h1 className="text-lg font-bold text-gray-800">{faq.title}</h1>
                <button className="border-none cursor-pointer">
                  {openIndex === index ? (
                    <FaChevronCircleUp className="text-amber-800" />
                  ) : (
                    <FaChevronCircleDown className="text-amber-800" />
                  )}
                </button>
              </div>
              <div
                className={`w-full flex flex-col items-center gap-3 overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="text-gray-800">{faq.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
