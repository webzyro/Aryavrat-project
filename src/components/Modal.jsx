import ModalImg from "../assets/Modal.jpeg";
import { MdClose } from "react-icons/md";

const Modal = ({ onClick }) => {
  return (
    <div className="fixed top-12 inset-0 flex items-center p-5 md:p-0 justify-center bg-black/30 bg-opacity-50 z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg">
        <MdClose
          onClick={onClick}
          size={30}
          color="red"
          className="absolute top-2 right-2 cursor-pointer"
        />
        <div className="w-full max-w-[500px] h-auto md:h-[500px]">
          <img
            src={ModalImg}
            alt="Modal_img"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
