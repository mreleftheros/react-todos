import { createContext, useState } from "react";

export const TodosContext = createContext();

const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 0, title: "go shopping", isCompleted: false },
    { id: 1, title: "go to the gym", isCompleted: false },
    { id: 2, title: "go for coffee", isCompleted: true }
  ]);
  const [itemEdited, setItemEdited] = useState(null);

  const toggleCompletion = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const editTodo = id => {
    setItemEdited(todos.filter(todo => todo.id === id));
  };

  const updateItem = () => {};

  return (
    <TodosContext.Provider
      value={{ todos, toggleCompletion, itemEdited, editTodo, updateItem }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
