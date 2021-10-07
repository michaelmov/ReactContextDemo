import { StateProvider } from "./store";
import "./styles.css";
import { ToDoList } from "./ToDoList";

export default function App() {
  return (
    <StateProvider>
      <div className="App">
        <ToDoList />
      </div>
    </StateProvider>
  );
}
