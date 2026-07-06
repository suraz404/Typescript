import { useState } from "react";
import { useToDo } from "../context/UseTodo";

const TodoForm = () => {
  const [input, setInput] = useState<string>("");
  const todoContext = useToDo();
  if (!todoContext) return null;

  const { addToDo } = todoContext;
  const handleSubmitButton = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    addToDo(input);
    setInput("");
  };

  return (
    <div className="mb-6">
      <form onSubmit={handleSubmitButton} className="flex flex-col gap-3 sm:flex-row">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 rounded-2xl border border-slate-700 bg-slate-800/80 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
        />
        <button
          type="submit"
          className="rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
