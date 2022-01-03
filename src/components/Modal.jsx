import { useEffect } from "react";

const Modal = ({ itemEdited }) => {
  useEffect(() => {}, []);

  return (
    <div className="absolute w-screen h-screen bg-gray-800 top-0 left-0 right-0 bottom-0">
      <h2>Helo modal</h2>
      {itemEdited.title}
    </div>
  );
};

export default Modal;
