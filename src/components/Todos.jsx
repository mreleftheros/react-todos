import { useContext, useEffect, useState } from "react";
import { TodosContext } from "./contexts/TodosContext";
import Modal from "./Modal";
import Todo from "./Todo";

const Todos = () => {
  const { todos, itemEdited } = useContext(TodosContext);
  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);

  useEffect(() => {
    if (!itemEdited) {
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  }, [itemEdited]);

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
      {itemEdited && <Modal />}
    </ul>
  );
};

export default Todos;
