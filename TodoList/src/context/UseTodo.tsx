import { useContext } from "react";
import { TodoContext } from "./CreateContext";

export function useToDo() {
  const context = useContext(TodoContext);

  // Throw an explicit error if used outside the provider
  if (context === undefined) {
    throw new Error("useToDo must be used within a TodoProvider");
  }

  return context;
}
