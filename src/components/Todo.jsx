import React, { useEffect, useRef, useState } from "react";
import todo from "../icons/icon.png";
import TodoItems from "./TodoItems";

export default function Todo() {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  ); //all the todo's will be saved here in an array. getting the data from the local storage.

  const inputRef = useRef();

  const handleAdd = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }
    // this newTodo will be saved in the useState array.
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    //you can use todoList as well and dont have to specify anything in the bracket.
    //But its a good practice to use prev/previous because it tells clearly that you are trying to replay something new with previous state.
    setTodoList((prev) => {
      return [...prev, newTodo];
    });
    //it will clear the input field.
    inputRef.current.value = "";
  };
  const handleDelete = (id) => {
    setTodoList((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id); // Return the filtered array
    });
  };

  const toggle = (id) => {
    setTodoList((prevTodo) => {
      return prevTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete }; // Toggle isComplete
        }
        return todo; // Return the unchanged todo if the id doesn't match
      });
    });
  };

  useEffect(() => {
    //todos is just a key name which could be anything and data can only be stored in a string hence JSON.Stringigy
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img className="w-10" src={todo} alt="" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>
      <div className="flex items-center bg-gray-200 rounded-full my-7">
        <input
          ref={inputRef}
          className="bg-transparent border-none outline-none flex-1 h-12 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add Task"
        />
        <button
          onClick={handleAdd}
          className="bg-red-500 rounded-full text-white border-none h-12 w-20 text-lg font-medium cursor-pointer"
        >
          Add
        </button>
      </div>
      <div>
        {todoList.map((item, index) => {
          return (
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              handleDelete={handleDelete}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
}
