import { Routes, Route } from "react-router-dom";
import TodosContextProvider from "./components/contexts/TodosContext";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import NewTodo from "./components/pages/NewTodo";

const App = () => {
  return (
    <TodosContextProvider>
      <div className="bg-gray-800 min-h-screen grid grid-rows-6">
        <Header />
        <main className="row-span-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewTodo />} />
          </Routes>
        </main>
      </div>
    </TodosContextProvider>
  );
};

export default App;
