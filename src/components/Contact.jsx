import Form from "./Form";
import contactImg from "../assets/contact.jpg";

const Contact = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center p-2 md:my-6 rounded-lg">
      <h1 className="text-slate-800 font-bold text-2xl md:text-5xl text-center mb-5">
        Contact Us!
      </h1>
      <div className="max-w-7xl mx-auto p-2 md:p-6 flex flex-col items-center lg:flex-row gap-4 border-2 border-slate-300 rounded-2xl">
        <div className="w-full h-[520px] lg:w-1/2 flex flex-col justify-center gap-4">
          <img
            src={contactImg}
            alt="contact-img"
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 h-full">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
