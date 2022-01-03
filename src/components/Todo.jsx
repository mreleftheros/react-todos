import Card from "./shared/Card";

const Todo = ({ title, isCompleted }) => {
  return (
    <li className="bg-gray-300 rounded">
      <Card>{title}</Card>
    </li>
  );
};

export default Todo;
