import { useToDo } from "../context/UseTodo";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoContext = useToDo();
  if (!todoContext) return null;

  const { todos, filter, setFilter } = todoContext;

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "active":
        return !todo.completed;

      case "completed":
        return todo.completed;

      case "all":
      default:
        return true;
    }
  });

  const filterOptions = [
    { key: "all", label: "All" },
    { key: "active", label: "Active" },
    { key: "completed", label: "Completed" },
  ] as const;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => setFilter(option.key)}
              className={`rounded-full px-3 py-2 text-sm transition ${
                filter === option.key
                  ? "bg-cyan-500 text-slate-950"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        <p className="text-sm text-slate-400">{filteredTodos.length} visible</p>
      </div>

      {filteredTodos.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-800/50 p-8 text-center text-sm text-slate-400">
          No tasks match this view yet.
        </div>
      ) : (
        <ul className="space-y-3">
          {filteredTodos.map((item) => (
            <li
              key={item.id}
              className="rounded-2xl border border-slate-800 bg-slate-800/70 p-3 shadow-sm shadow-black/20"
            >
              <TodoItem todo={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
