import TodosContextProvider from "./components/contexts/TodosContext";
import Header from "./components/Header";
import Todos from "./components/Todos";

const App = () => {
  return (
    <TodosContextProvider>
      <div className="bg-gray-800 min-h-screen grid">
        <Header />
        <main className="row-span-6">
          <Todos />
        </main>
      </div>
    </TodosContextProvider>
  );
};

export default App;
