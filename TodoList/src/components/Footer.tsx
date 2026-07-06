import { useToDo } from "../context/UseTodo";

const Footer = () => {
  const todoContext = useToDo();
  if (!todoContext) return null;
  const { todos } = todoContext;

  const completedCount = todos.filter((todo) => todo.completed).length;
  const remainingCount = todos.length - completedCount;

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-slate-300 shadow-lg shadow-black/20 backdrop-blur-xl">
      <p>
        {todos.length === 0
          ? "No tasks yet — add your first one above."
          : `${remainingCount} task${remainingCount === 1 ? "" : "s"} remaining`}
      </p>
      <p className="font-medium text-cyan-300">
        {completedCount > 0 ? `${completedCount} completed` : "Keep going!"}
      </p>
    </div>
  );
};

export default Footer;
