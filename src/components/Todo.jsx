import Card from "./shared/Card";
import { FaEdit } from "react-icons/fa";
import Button from "./shared/Button";

const Todo = ({ title, isCompleted }) => {
  return (
    <li className="bg-gray-300 rounded relative my-4 p-4">
      <Card>
        <h2 className="text-center font-bold text-2xl">{title}</h2>
        <div className="absolute top-0 left-3/4">
          <Button>
            <FaEdit color="orange" />
          </Button>
        </div>
      </Card>
    </li>
  );
};

export default Todo;
