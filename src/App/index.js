import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";
//import './App.css';

// los nombres de funciones que empiezan con Mayusculas, indican que son componentes
function App(props) {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App;
