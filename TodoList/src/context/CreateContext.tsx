import { createContext } from "react";
import { type FilterType, type todo } from "../types/todo";

interface TodoContextProps {
  todos: todo[];
  toggleTodo: (id: number) => void;
  addToDo: (task: string) => void;
  deleteTodo: (id: number) => void;
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}

export const TodoContext = createContext<TodoContextProps | null>(null);
