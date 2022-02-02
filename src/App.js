import React from "react";
import AddTodo from "./Components/Addtodo";
import TodoList from "./Components/Todolist";

const App = () => {
  return (
    <div className="app">
      <h1 className="app-title">Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
