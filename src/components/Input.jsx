import React from 'react'
import { useState } from 'react';
import { addTodo } from '../redux/modules/todoList';
import uuid from 'react-uuid';
import { useDispatch } from 'react-redux';

function Input() {

    const disPatch = useDispatch();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

  return (
    <header>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const newTodo = {
              id: uuid(),
              title: title,
              content: content,
              isDone: false,
            };
            disPatch(addTodo(newTodo));
            setTitle("")
            setContent("")
          }}
        >
          <input
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          ></input>
          <input
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
          ></input>
          <button>작성하기</button>
        </form>
      </header>
  )
}

export default Input