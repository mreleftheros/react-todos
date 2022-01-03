import { Routes, Route } from "react-router-dom";
import TodosContextProvider from "./components/contexts/TodosContext";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import New from "./components/pages/New";

const App = () => {
  return (
    <TodosContextProvider>
      <div className="bg-gray-800 min-h-screen grid">
        <Header />
        <main className="row-span-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
          </Routes>
        </main>
      </div>
    </TodosContextProvider>
  );
};

export default App;
