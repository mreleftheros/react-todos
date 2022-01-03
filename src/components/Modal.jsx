import { useEffect, useContext } from "react";
import { TodosContext } from "./contexts/TodosContext";
import { useForm } from "../components/hooks/useForm";
import Button from "./shared/Button";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
  const { itemEdited } = useContext(TodosContext);
  const { state, updateState } = useForm({
    text: itemEdited.title
  });

  return (
    <div className="absolute w-screen h-screen top-0 left-0 right-0 bottom-0">
      <form
        className="bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 p-4 h-40 rounded"
        autoComplete="off"
      >
        <h2>Edit item</h2>
        <input type="text" name="text" />
        <Button type="submit">
          <span className="text-white">Update</span>
        </Button>
        <Button>
          <FaTimes color="red" size="30" />
        </Button>
      </form>
    </div>
  );
};

export default Modal;
