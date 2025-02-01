const AboutCard = ({ about }) => {
  return (
    <div className="max-w-xs p-2 flex flex-col items-center space-y-3 bg-white rounded-xl shadow-md shadow-slate-600 transition duration-700 ease-in-out hover:-translate-y-2">
      <div className="w-full h-[200px] rounded-md overflow-hidden">
        <img
          src={about.img}
          alt="image"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <h1 className="text-3xl font-bold text-slate-800">{about.title}</h1>
      <p className="leading-6 text-start text-slate-700 font-semibold text-lg">
        ({about.desc})
      </p>
    </div>
  );
};

export default AboutCard;
