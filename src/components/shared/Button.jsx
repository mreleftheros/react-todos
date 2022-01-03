import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";

const Button = ({ children, id, type }) => {
  const { toggleCompletion, editTodo, setItemEdited, deleteTodo } =
    useContext(TodosContext);

  const handleClick = () => {
    switch (type) {
      case "toggle":
        toggleCompletion(id);
        break;
      case "edit":
        editTodo(id);
        break;
      case "closeModal":
        setItemEdited(false);
        break;
      case "delete":
        deleteTodo(id);
        break;
    }
  };

  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      onClick={handleClick}
      className={`${
        type === "closeModal" ? "bg-red-600" : "bg-gray-800"
      } px-3 py-2 transition-transform duration-150 ease-in-out hover:scale-95 rounded-xl shadow`}
    >
      {children}
    </button>
  );
};

export default Button;
