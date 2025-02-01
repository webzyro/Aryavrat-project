import React from "react";
import { CgClose } from "react-icons/cg";

const ImageModal = ({ handleClose, selectedImg }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-transparent bg-opacity-70 z-50"
      onClick={handleClose}
    >
      <div
        className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-red-500 text-xl cursor-pointer"
          onClick={handleClose}
        >
          <CgClose size={20} />
        </button>
        <img
          src={selectedImg}
          alt="Selected"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImageModal;
