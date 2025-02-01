import { FiArrowRightCircle } from "react-icons/fi";
import { LuCornerRightDown } from "react-icons/lu";
import { CgCornerDownRight } from "react-icons/cg";
import Breadcrumb from "../components/Breadcrumb";
import Img from "../assets/two-men.png";
import Value1 from "../assets/value1.png";
import Value2 from "../assets/value2.png";
import { Abouts } from "../utils/staticData";
import AboutCard from "../components/AboutCard";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Counter from "../components/Counter";
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Aryavrat | About Page</title>
      </Helmet>
      <div className="w-full">
        <Breadcrumb title="About" />
        <div className="max-w-7xl mx-auto p-2 flex flex-col-reverse md:flex-row items-center justify-center gap-2 my-6">
          <div className="flex-1 flex flex-col items-start gap-6 p-2">
            <div class="flex items-center gap-2.5">
              <hr className="border-2 border-lime-400 w-16" />
              <span className="text-lime-400 text-lg font-semibold">
                Flexible Solutions
              </span>
            </div>
            <h2 className="text-2xl md:text-[50px] font-bold text-gray-800 md:leading-14">
              Transform your daily life with adaptable energy services
            </h2>
            <p className="text-slate-600">
              Aryavrat Energy, part of Aryavrat Construction & Developers,
              offers innovative solar energy solutions. With 200+ projects
              completed, it promotes eco-friendly living, reduces electricity
              costs, and helps clients avail subsidies under the PM Surya Ghar
              Yojana, ensuring sustainable energy for India
            </p>
            <div className="flex items-center gap-6">
              <FiArrowRightCircle className="inline text-amber-400" size={50} />
              <span>
                We specializes in sustainable solar energy solutions for
                eco-friendly living.
              </span>
            </div>
            <div className="flex items-center gap-6">
              <FiArrowRightCircle className="inline text-amber-400" size={50} />
              <span>
                We partner with trusted brands like Adani, Waaree, and Vikram
                Solar for reliability.
              </span>
            </div>
            <Link
              to="/contact"
              className="py-2 px-4 cursor-pointer font-semibold text-slate-700 border-2 border-slate-400 hover:border-orange-500 hover:text-orange-500 transition-all ease-in-out delay-75"
            >
              Join With Us
            </Link>
          </div>
          <div className="flex-1 rounded-lg overflow-hidden">
            <img src={Img} alt="Hero" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="w-full bg-lime-800 my-5">
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-2 p-2">
            <div className="w-full min-h-48 flex flex-col lg:flex-row gap-6 items-center justify-around">
              <div className="flex flex-col items-center gap-6">
                <h1 className="text-5xl md:text-7xl text-white font-bold">
                  <Counter targetNumber={80} interval={10} />%
                </h1>
                <p className="text-2xl text-white">Save Electricity By</p>
              </div>
              <div className="flex flex-col items-center gap-6">
                <h1 className="text-5xl md:text-7xl text-white font-bold">
                  <Counter targetNumber={200} interval={10} />+
                </h1>
                <p className="text-2xl text-white">Successfully Installed</p>
              </div>
              <div className="flex flex-col items-center gap-6">
                <h1 className="text-5xl md:text-7xl text-white font-bold">
                  <Counter targetNumber={1100} interval={1} />
                </h1>
                <p className="text-2xl text-white">Total Satisfied Customer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto p-2 flex flex-col-reverse md:flex-row items-center justify-center gap-2 my-6">
          <div className="flex-1 rounded-lg overflow-hidden">
            <img
              src={Value1}
              alt="Hero"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex-1 flex flex-col items-start gap-4 p-2">
            <div class="flex items-center gap-2.5">
              <hr className="border-2 border-lime-400 w-16" />
              <span className="text-lime-400 text-lg font-semibold">
                Our Values
              </span>
            </div>
            <p className="text-slate-600 text-xl">
              At Aryavrat Energy, our core values drive our mission to create a
              sustainable, eco-friendly future through innovative solar
              solutions.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-amber-400 font-semibold text-lg">
                Guiding Values
              </span>
              <LuCornerRightDown className="text-amber-400" size={30} />
            </div>
            <div className="flex items-center gap-3">
              <CgCornerDownRight className="text-amber-400" size={20} />
              <p className="text-slate-600 text-lg">
                <b>Sustainability Focus:</b> Promoting renewable energy for a
                greener tomorrow.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <CgCornerDownRight className="text-amber-400" size={20} />
              <p className="text-slate-600 text-lg">
                <b>Customer Satisfaction:</b> Delivering tailored solutions with
                top-notch service.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <CgCornerDownRight className="text-amber-400" size={20} />
              <p className="text-slate-600 text-lg">
                <b>Innovation:</b> Embracing cutting-edge technology for optimal
                performance.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <CgCornerDownRight className="text-amber-400" size={20} />
              <p className="text-slate-600 text-lg">
                <b>Integrity:</b> Ensuring transparency and trust in every
                project.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto p-2 flex flex-col md:flex-row items-center justify-center gap-2 my-6">
          <div className="flex-1 flex flex-col items-start gap-4 p-2">
            <div class="flex items-center gap-2.5">
              <hr className="border-2 border-lime-400 w-16" />
              <span className="text-lime-400 text-lg font-semibold">
                Our Approach
              </span>
            </div>
            <p className="text-slate-600 text-xl">
              At Aryavrat Energy, we follow a systematic and customer-centric
              approach to deliver efficient and sustainable solar energy
              solutions.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-amber-400 font-semibold text-lg">
                Our Methodology
              </span>
              <LuCornerRightDown className="text-amber-400" size={30} />
            </div>
            <div className="flex items-center gap-3">
              <CgCornerDownRight className="text-amber-400" size={20} />
              <p className="text-slate-600 text-lg">
                <b>Consultation:</b> Understanding energy needs with tailored
                recommendations.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <CgCornerDownRight className="text-amber-400" size={20} />
              <p className="text-slate-600 text-lg">
                <b>Customized:</b> Crafting optimized solutions for maximum
                efficiency.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <CgCornerDownRight className="text-amber-400" size={20} />
              <p className="text-slate-600 text-lg">
                <b>Expert Installation:</b> Ensuring seamless and reliable
                system setups.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <CgCornerDownRight className="text-amber-400" size={20} />
              <p className="text-slate-600 text-lg">
                <b>Ongoing:</b> Providing maintenance for consistent solar
                performance.
              </p>
            </div>
          </div>
          <div className="flex-1 rounded-lg overflow-hidden">
            <img
              src={Value2}
              alt="Hero"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        {/* mission & vission */}
        <div className="max-w-6xl mx-auto my-6 flex flex-col gap-5 p-2">
          <div className="flex flex-col items-start gap-1.5">
            <h1 className="text-2xl md:text-5xl text-slate-800 font-bold pb-1.5 border-b-2 border-amber-400">
              Our Mission
            </h1>
            <div className="flex items-center gap-1.5">
              <CgCornerDownRight
                className="hidden md:block text-amber-400 w-20"
                size={50}
              />
              <p className="text-lg text-slate-600 flex-1">
                Our mission is to provide the highest quality cost effective
                solar energy power products and services to customers that are
                interested in reducing energy costs and carbon footprint. This
                will give our customers and our communities clean, abundance,
                low - cost renewable energy and will allow us to provide
                financial security for all shareholders while giving back to the
                community.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1.5">
            <h1 className="text-2xl md:text-5xl text-slate-800 font-bold pb-1.5 border-b-2 border-amber-400">
              Our Vision
            </h1>
            <div className="flex md:flex-row-reverse items-center gap-1.5">
              <CgCornerDownRight
                className="hidden md:block text-amber-400 w-20 md:-rotate-180"
                size={50}
              />
              <p className="text-lg text-slate-600 flex-1">
                To provide the most compelling value in the solar energy
                industry. Value, as defined by our customers, means designing
                and installing the highest quality solar energy systems, on time
                with high customer satisfaction, at low cost.
              </p>
            </div>
          </div>
        </div>
        <section className="max-w-7xl p-2 mx-auto my-6 flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-6xl gap-5 font-bold text-slate-800 md:leading-16">
            Meet The Team
          </h2>
          <p className="max-w-2xl text-state-300 text-lg text-center">
            Our solar project developers are committed to offering leading-edge
            services and solutions for renewable energy.
          </p>
          <div className="w-full flex flex-wrap justify-center gap-10 my-3">
            {Abouts.map((about) => (
              <AboutCard key={about.id} about={about} />
            ))}
          </div>

          <Link
            to="/contact"
            className="py-2 px-3 mt-2 cursor-pointer font-semibold text-slate-50 bg-orange-500 group"
          >
            Know More{" "}
            <FaArrowRightLong className="inline transition-all duration-100 delay-100 group-hover:translate-x-1.5" />
          </Link>
        </section>
      </div>
    </>
  );
};

export default About;
