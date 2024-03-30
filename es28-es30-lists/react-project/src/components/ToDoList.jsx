/* eslint-disable react/prop-types */
/*
- Create a TodoList component that renders a ul tag with a li tag for each item contained in the todos state variable.
- The todos state variable should be an array of strings.
- The TodoList component should also contain an input tag and a button.
- When the button is clicked, the event handler should add the value of the input tag to the todos array.

- Modify the TodoList component so that the input clears every time a Todo is added to the todos array. 
- Add a "reset" button that clears the todos array when clicked.

-Modify the TodoList by adding a "remove" button to each li tag.
-When clicked, the event handler should remove the corresponding item from the todos array.
*/

import { useState } from "react";

export function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function handleAddTodo() {
    setTodos([...todos, todo]);
    setTodo("");
  }

  function handleTaskInput(e) {
    setTodo(e.target.value);
  }

  function handleResetList() {
    setTodos([]);
  }

  function handleRemoveTask(i) {
    let slicedTodos = [...todos];
    slicedTodos.splice(i, 1);
    setTodos(slicedTodos);
  }

  return (
    <>
    
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTask(index)}>Remove task</button>
            {/*passando direttametne handleRemoveTask(index) a onClick fa sì che la funzione venga eseguita immediatamente durante la fase di rendering anziché attendere l'evento di click.*/}
          </li>
        ))}
      </ul>
      <input
        onChange={handleTaskInput}
        type="text"
        name="todoInput"
        id="todo-input"
        placeholder="next task..."
        value={todo}
      />
      <button onClick={handleAddTodo}>Add to To-Do list</button>
      <button onClick={handleResetList}>Reset To-Do list</button>
    </>
  );
}
