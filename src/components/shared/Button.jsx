import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";

const Button = ({ children, id, type }) => {
  const { toggleCompletion } = useContext(TodosContext);

  const handleClick = () => {
    switch (type) {
      case "toggle":
        return toggleCompletion(id);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-gray-800 px-3 py-2 transition-transform duration-150 ease-in-out hover:scale-95 rounded-xl shadow"
    >
      {children}
    </button>
  );
};

export default Button;
