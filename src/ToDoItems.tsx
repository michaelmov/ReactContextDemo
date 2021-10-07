import { useContext } from "react";
import { IToDo } from "./interfaces/to-do.interface";
import { store } from "./store";

const styles = {
  fontStyle: "italic",
  color: "blue",
  marginRight: "4px",
  cursor: "pointer",
  display: "inline"
};

export const ToDoItems = () => {
  const globalStore = useContext(store);
  const { dispatch } = globalStore;

  const todos: IToDo[] = globalStore?.state.todos;

  function handleComplete(id: number, status: boolean) {
    dispatch({
      type: "COMPLETE",
      payload: { id, complete: status }
    });
  }

  function handleDelete(id: number) {
    dispatch({ type: "DELETE", payload: { id } });
  }

  return (
    <>
      {todos.map((todo: IToDo) => (
        <div key={todo.id}>
          <h2
            style={{
              ...styles,
              textDecoration: todo.completed ? "line-through" : "none"
            }}
            onClick={(e) => handleComplete(todo.id, !todo.completed)}
          >
            <input
              type="checkbox"
              style={{
                marginRight: "1rem"
              }}
              checked={todo.completed}
              onChange={(e) => handleComplete(todo.id, e.currentTarget.checked)}
            />
            {todo.name}
          </h2>
          <button
            style={{ marginLeft: "1rem" }}
            onClick={() => handleDelete(todo.id)}
          >
            x
          </button>
        </div>
      ))}
    </>
  );
};
