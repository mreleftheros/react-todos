import Card from "./shared/Card";
import { FaEdit, FaTimes, FaToggleOff, FaToggleOn } from "react-icons/fa";
import Button from "./shared/Button";

const Todo = ({ id, title, isCompleted, editMode }) => {
  const size = "20";

  return (
    <li
      className={`rounded relative my-4 p-4 ${
        isCompleted ? "bg-green-300" : "bg-gray-300"
      }`}
    >
      <Card>
        <h2 className="text-center font-bold text-2xl select-none">{title}</h2>
        <div className="absolute flex w-52 top-0 left-full transform -translate-x-full mr-4 mt-2 justify-around">
          <Button id={id} type="toggle">
            {isCompleted ? (
              <FaToggleOn size={size} color="orange" />
            ) : (
              <FaToggleOff size={size} color="orange" />
            )}
          </Button>
          <Button id={id} type="edit">
            <FaEdit size={size} color="orange" />
          </Button>
          <Button id={id} type="delete">
            <FaTimes size={size} color="orange" />
          </Button>
        </div>
      </Card>
    </li>
  );
};

export default Todo;
