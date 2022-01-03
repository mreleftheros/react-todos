import { useEffect, useContext } from "react";
import { TodosContext } from "./contexts/TodosContext";
import { useForm } from "../components/hooks/useForm";
import Button from "./shared/Button";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
  const { itemEdited, updateItem } = useContext(TodosContext);
  const [state, updateState] = useForm({
    text: itemEdited.title
  });

  const handleChange = e => {
    updateState(e);
  };

  const handleSubmit = e => {
    e.preventDefault();

    updateItem(state.text);
  };

  return (
    <div className="absolute w-screen h-screen top-0 left-0 right-0 bottom-0">
      <form
        onSubmit={handleSubmit}
        className="bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 p-4 h-80 rounded-xl shadow-lg flex flex-col justify-around items-center"
        autoComplete="off"
      >
        <h2 className="text-center text-3xl p-2 mb-4 font-bold">Edit item</h2>
        <input
          type="text"
          name="text"
          value={state.text}
          onChange={handleChange}
          className="py-2 px-4 border-2 rounded-xl"
        />
        <Button type="submit">
          <span className="text-white">Update</span>
        </Button>
        <span className="inline-block absolute top-1 left-full transform -translate-x-full">
          <Button type="closeModal">
            <FaTimes color="white" size="25" />
          </Button>
        </span>
      </form>
    </div>
  );
};

export default Modal;
