import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.25),_transparent_35%),linear-gradient(135deg,_#020617,_#0f172a)] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <header className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Productivity
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Todo List with TypeScript & React
          </h1>
          <p className="mt-2 text-sm text-slate-300 sm:text-base">
            Stay focused, organize your tasks, and keep momentum going.
          </p>
        </header>

        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-6">
          <TodoForm />
          <TodoList />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
