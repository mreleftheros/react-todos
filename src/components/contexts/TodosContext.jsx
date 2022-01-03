import { createContext, useState, useRef } from "react";

export const TodosContext = createContext();

const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 0, title: "go shopping", isCompleted: false },
    { id: 1, title: "go to the gym", isCompleted: false },
    { id: 2, title: "go for coffee", isCompleted: true }
  ]);
  const todosId = useRef(todos.length);
  const [itemEdited, setItemEdited] = useState(null);

  const toggleCompletion = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const editTodo = id => {
    setItemEdited(todos.filter(todo => todo.id === id)[0]);
  };

  const updateItem = title => {
    setTodos(
      todos.map(todo => (todo.id === itemEdited.id ? { ...todo, title } : todo))
    );
    setItemEdited(null);
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        toggleCompletion,
        itemEdited,
        editTodo,
        updateItem,
        setItemEdited,
        deleteTodo,
        setTodos,
        todosId
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
