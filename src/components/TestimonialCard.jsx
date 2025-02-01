import { FaStar } from "react-icons/fa6";

const TestimonialCard = ({ test }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md shadow-slate-600 max-w-xs flex flex-col items-center gap-1.5 relative transition duration-700 ease-in-out hover:-translate-y-2">
      <div className="absolute -top-10 w-32 h-32 rounded-full overflow-hidden">
        <img
          src={test.img}
          alt={test.title}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="leading-6 text-start text-slate-700 text-md pt-24">
        {test.desc}
      </p>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar key={star} className="text-yellow-400" />
        ))}
      </div>
      <h1 className="text-3xl font-bold text-slate-800">{test.title}</h1>
      <span>{test.position}</span>
    </div>
  );
};

export default TestimonialCard;
