import React, { createContext, useReducer } from "react";
import { IToDo } from "./interfaces/to-do.interface";
import { storeReducer } from "./reducers/storeReducer";

const defaultToDos: IToDo[] = [
  {
    id: 1,
    name: "Study algorithms",
    completed: false
  },
  {
    id: 2,
    name: "Study data structures",
    completed: false
  }
];

const store = createContext({});
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, { todos: defaultToDos });

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
