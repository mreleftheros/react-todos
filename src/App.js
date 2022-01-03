import TodosContextProvider from "./components/contexts/TodosContext";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div className="bg-gray-800 min-h-screen grid">
      <TodosContextProvider>
        <Todos />
      </TodosContextProvider>
    </div>
  );
};

export default App;
