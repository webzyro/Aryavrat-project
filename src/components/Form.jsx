import { FaArrowRightLong } from "react-icons/fa6";

const Form = () => {
  return (
    <>
      <form className="w-full py-2 px-4  rounded-2xl space-y-3.5 md:space-y-6">
        <div className="flex flex-col gap-2 mb-2.5 md:mb-4">
          <h1 className="text-2xl md:text-4xl font-bold text-slate-800">
            Feel free to contact us!
          </h1>
          <p className="text-lg text-slate-700 font-semibold">
            You can reach us anytime.
          </p>
        </div>
        <div className="w-full flex flex-col items-center md:flex-row gap-2">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full md:w-1/2 bg-transparent py-2 px-3 border-2 border-slate-400 rounded-2xl placeholder:text-2xl placeholder:text-slate-500 text-2xl text-slate-500 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full md:w-1/2 bg-transparent py-2 px-3 border-2 border-slate-400 rounded-2xl placeholder:text-2xl placeholder:text-slate-500 text-2xl text-slate-500 outline-none"
          />
        </div>
        <div className="w-full flex flex-col items-center md:flex-row gap-2">
          <input
            type="text"
            placeholder="Phone"
            required
            className="w-full md:w-1/2 bg-transparent py-2 px-3 border-2 border-slate-400 rounded-2xl placeholder:text-2xl placeholder:text-slate-500 text-2xl text-slate-500 outline-none"
          />
          <select
            required
            className="w-full md:w-1/2 bg-transparent py-2 px-3 border-2 border-slate-400 rounded-2xl text-2xl text-slate-500 outline-none"
          >
            <option value="" disabled selected>
              Select a Service
            </option>
            <option value="Residential Solar">Residential Solar</option>
            <option value="Commercial Solar">Commercial Solar</option>
            <option value="Rooftop Solar">Rooftop Solar</option>
          </select>
        </div>
        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          className="w-full bg-transparent py-2 px-3 border-2 border-slate-400 rounded-2xl placeholder:text-2xl placeholder:text-slate-500 text-2xl text-slate-500 outline-none"
        ></textarea>
        <button className="py-2 px-3 cursor-pointer w-full md:w-fit flex items-center justify-center gap-2 font-semibold text-slate-50 bg-orange-500 group rounded-2xl">
          Submit{" "}
          <FaArrowRightLong className="transition-all delay-100 duration-100 group-hover:translate-x-1.5" />
        </button>
      </form>
    </>
  );
};

export default Form;
