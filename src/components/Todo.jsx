import Card from "./shared/Card";
import { FaCheck, FaEdit, FaTimes } from "react-icons/fa";
import Button from "./shared/Button";

const Todo = ({ title, isCompleted }) => {
  return (
    <li
      className={`rounded relative my-4 p-4 ${
        isCompleted ? "bg-green-200" : "bg-gray-300"
      }`}
    >
      <Card>
        <h2 className="text-center font-bold text-2xl">{title}</h2>
        <div className="absolute flex w-52 top-0 left-full transform -translate-x-full mr-4 mt-2 justify-around">
          <Button>
            <FaCheck color="green" />
          </Button>
          <Button>
            <FaEdit color="orange" />
          </Button>
          <Button>
            <FaTimes color="orange" />
          </Button>
        </div>
      </Card>
    </li>
  );
};

export default Todo;
