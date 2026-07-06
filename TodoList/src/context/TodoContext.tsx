import { useEffect, useState, type ReactNode } from "react";
import { type FilterType, type todo } from "../types/todo";
import { TodoContext } from "./CreateContext";

interface TodoProviderType {
  children: ReactNode;
}

export const TodoProvider = ({ children }: TodoProviderType) => {




  const [todos, setTodos] = useState<todo[]>(() => {
    if (typeof window === "undefined") return [];
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? (JSON.parse(storedTodos) as todo[]) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [filter, setFilter] = useState<FilterType>("all");
  const addToDo = (task: string) => {
    const editTask = task.trim();
    if (!editTask) return;

    setTodos((prev) => {
      const newTodo = {
        id: Math.random() * 100,
        task: editTask,
        completed: false,
      };
      return [...prev, newTodo];
    });
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };
  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{ todos, addToDo, toggleTodo, deleteTodo, filter, setFilter }}
    >
      {children}
    </TodoContext.Provider>
  );
};
