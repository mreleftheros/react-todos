import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { TodosContext } from "../contexts/TodosContext";
import { useForm } from "../hooks/useForm";
import Button from "../shared/Button";
import Card from "../shared/Card";

const NewTodo = () => {
  const [title, setTitle] = useState("");
  const inputRef = useRef(null);
  const { setTodos, todosId } = useContext(TodosContext);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!title) return;

    setTodos(prev => [
      ...prev,
      { title, isCompleted: false, id: todosId.current++ }
    ]);

    setTitle("");
    navigate("/");
  };

  return (
    <Card isBig>
      <section className="bg-gray-200 p-4 rounded h-80">
        <h2 className="text-center font-bold text-3xl mb-4">New Todo</h2>
        <form
          autoComplete="off"
          className="flex flex-col items-center justify-around h-full"
          onSubmit={handleSubmit}
        >
          <input
            ref={inputRef}
            type="text"
            name="title"
            placeholder="Enter todo title here..."
            value={title}
            onChange={handleChange}
            className="inline-block py-2 px-4 border-2 rounded-xl outline-none text-center opacity-90 transform scale-95 focus:opacity-100 focus:scale-100 transition-all duration-150 ease-out"
          />
          <Button type="submit">
            <span className="text-white">Add Todo</span>
          </Button>
        </form>
      </section>
    </Card>
  );
};

export default NewTodo;
