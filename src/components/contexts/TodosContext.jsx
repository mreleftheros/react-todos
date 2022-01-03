import { createContext, useState } from "react";

export const TodosContext = createContext();

const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 0, title: "go shopping", isCompleted: false },
    { id: 1, title: "go to the gym", isCompleted: false },
    { id: 2, title: "go for coffee", isCompleted: true }
  ]);

  const toggleCompletion = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <TodosContext.Provider value={{ todos, toggleCompletion }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
