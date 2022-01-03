import { useContext } from "react";
import { TodosContext } from "./contexts/TodosContext";
import Todo from "./Todo";

const Todos = () => {
  const { todos} = useContext(TodosContext);

  if (!todos || todos.length === 0) {
    return (
      <p className="italic text-center text-xl">
        There are no todos at the moment.
      </p>
    );
  }
  return (
    <ul className="list-none">
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default Todos;
