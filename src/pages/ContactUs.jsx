import Breadcrumb from "../components/Breadcrumb";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import ContactCard from "../components/ContactCard";
import Form from "../components/Form";
import { Helmet } from "react-helmet";

const infos = [
  {
    id: 1,
    title: "Call Us.",
    text1: "+91-7633940407",
    text2: "+91-7633940407",
    icon: <BiSolidPhoneCall className="text-amber-400" size={50} />,
  },
  {
    id: 2,
    title: "Email Us.",
    text1: "aryavratcd@gmail.com ",
    text2: "aryavratcd@gmail.com ",
    icon: <IoIosMail className="text-amber-400" size={50} />,
  },
  {
    id: 3,
    title: "Address",
    text1: "801503 Madhurani Complex",
    text2: "Patna Bihar, Gola Road",
    icon: <FaLocationDot className="text-amber-400" size={50} />,
  },
];

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Aryavrat | Contact Page</title>
      </Helmet>
      <div className="w-full">
        <Breadcrumb title="Contact Us" />
        <div className="max-w-7xl mx-auto flex items-center justify-center flex-wrap gap-5 my-6 p-2">
          {infos.map((info) => (
            <ContactCard key={info.id} info={info} />
          ))}
        </div>
        <div className="max-w-7xl mx-auto flex flex-col items-center lg:flex-row gap-4 border-2 border-slate-300 my-6 rounded-lg">
          <div className="w-full lg:w-1/2 h-full">
            <Form />
          </div>
          <div className="w-full h-[520px] lg:w-1/2 flex flex-col gap-4">
            <div className="w-full p-2 flex flex-col gap-2 lg:gap-6">
              <h1 className="text-2xl md:text-4xl text-slate-700 font-bold mb-0.5">
                Schedule Your Free Consultation
              </h1>
              <p className="max-w-sm text-lg text-slate-700 font-semibold">
                303, Madhurani Complex, Near Gyanoday Grukul School, Gola Road,
                Danapur, Patna-801503, Bihar
              </p>
              <a
                href="tel:+91-7633940407"
                className="text-lg text-state-700 font-semibold"
              >
                Call us at +91-7633940407
              </a>
              <p className="text-lg text-slate-700">
                At Aryavrat Solar, we are committed to helping people harness
                solar energy efficiently and sustainably.
              </p>
            </div>

            <div className="w-full p-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3597.6610623806387!2d85.05321177474126!3d25.61617661460436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s303%2C%20Madhurani%20Complex%2C%20Near%20Gyanoday%20Grukul%20School%2C%20Gola%20Road%2C%20Danapur%2C%20Patna-801503%2C%20Bihar!5e0!3m2!1sen!2sin!4v1738044544728!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "1rem", outline: "none" }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
