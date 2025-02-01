const ContactCard = ({ info }) => {
  return (
    <div className="w-xs bg-slate-100 flex flex-col gap-3.5 items-center rounded-xl p-5">
      <div className="flex items-center gap-2">
        <div>{info.icon}</div>
        <h3 className="text-2xl font-bold text-amber-400 p-2 border-b-2 border-amber-400">
          {info.title}
        </h3>
      </div>
      <a href={`tel:${info.text1}`} className="text-xl text-slate-400">
        {info.text1}
      </a>
      {/* <a href={`tel:${info.text2}`} className="text-xl text-slate-400">
        {info.text2}
      </a> */}
    </div>
  );
};

export default ContactCard;
