import { useContext, useState } from "react";
import { store } from "./store";
import { ToDoItems } from "./ToDoItems";

export const ToDoList = () => {
  const globalStore = useContext(store);
  const [newItem, setNewItem] = useState("");
  const { dispatch } = globalStore;

  const todos: IToDo[] = globalStore?.state.todos;

  function handleCreate(e) {
    e.preventDefault();
    dispatch({ type: "CREATE", payload: { title: newItem } });
    setNewItem("");
  }

  return (
    <>
      {!todos.length ? <h4>No Items</h4> : <ToDoItems />}
      <form onSubmit={handleCreate} style={{ marginTop: "1rem" }}>
        <input
          type="text"
          name="todoInput"
          id="todoInput"
          placeholder="Type here.."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          type="submit"
          style={{ marginLeft: "4px" }}
          disabled={!newItem.trim()}
        >
          Add
        </button>
      </form>
    </>
  );
};
