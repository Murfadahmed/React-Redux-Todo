import { useState } from "react";
import  AddTodo  from "./Components/AddTodo";
import Todo from "./Components/Todo";
import './App.css'

function App() {
  return (
    <>
      {/* <h1 style={{color:'yellow'}}>Learn redux_too</h1> */}
      <h1 className="text-4xl font-bold">Todo</h1>
      <AddTodo/>
      <Todo/>
    </>
  );
}

export default App;
