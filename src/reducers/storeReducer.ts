import { IAppContext } from ".././interfaces/app-context.interface";
import { IToDo } from "../interfaces/to-do.interface";

enum ACTIONS {
  complete = "COMPLETE",
  create = "CREATE",
  delete = "DELETE"
}
type ACTIONTYPE = {
  type: ACTIONS;
  payload: { id?: number; title?: string; complete?: boolean };
};

export function storeReducer(
  state: IAppContext,
  action: ACTIONTYPE
): IAppContext {
  const { type, payload } = action;
  const { todos } = state;
  let updatedTodos: IToDo[] = [];
  switch (type) {
    case "CREATE":
      const { title } = payload;
      if (!title || title.trim() === "") return state;
      updatedTodos = [
        ...todos,
        {
          id: Math.floor(Math.random() * 1000000),
          name: title,
          completed: false
        }
      ];
      return { ...state, todos: updatedTodos };

    case "COMPLETE":
      updatedTodos = todos.map((todo) =>
        todo.id === payload.id
          ? { id: todo.id, completed: payload.complete, name: todo.name }
          : todo
      );
      return { ...state, todos: updatedTodos };

    case "DELETE":
      updatedTodos = todos.filter((item) => item.id !== payload.id);
      return { ...state, todos: updatedTodos };

    default:
      throw new Error();
  }
}
