import { useToDo } from "../context/UseTodo";
import { type todo } from "../types/todo";

interface TodoItemsProps {
  todo: todo;
}

const TodoItem = ({ todo }: TodoItemsProps) => {
  const todoitems = useToDo();
  if (!todoitems) return null;

  const { toggleTodo, deleteTodo } = todoitems;

  return (
    <div className="flex items-center justify-between gap-3">
      <label className="flex flex-1 cursor-pointer items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="h-4 w-4 rounded border-slate-600 bg-slate-700 text-cyan-500 focus:ring-cyan-400"
        />
        <div className="flex flex-1 flex-col">
          <span
            className={`text-sm font-medium ${
              todo.completed ? "text-slate-400 line-through" : "text-slate-100"
            }`}
          >
            {todo.task}
          </span>
          <span className={`text-xs ${todo.completed ? "text-emerald-400" : "text-slate-400"}`}>
            {todo.completed ? "Completed" : "Pending"}
          </span>
        </div>
      </label>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="rounded-xl border border-slate-700 px-3 py-2 text-sm text-slate-300 transition hover:border-rose-400 hover:text-rose-300"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
