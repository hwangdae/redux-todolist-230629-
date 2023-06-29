import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { changeIsDone, delTodo } from "../redux/modules/todoList";

function TodoList({isDone}) {

    const navigate = useNavigate();
    const disPatch = useDispatch();

    const todos = useSelector((state) => {
        return state.todoList;
      });

  return (
    <div>
          <h2>{isDone ? "Done..." : "work..."}</h2>
          {todos.filter((todo)=>{
            return todo.isDone === isDone
          }).map((todo) => {
            return (
              <div style={{
                border : "solid 1px #111",
                margin : "10px",
                padding : "10px"
              }}>
                <p>{todo.id}</p>
                <h3>{todo.title}</h3>
                <p>{todo.content}</p>
                <p>{todo.isDone.toString()}</p>
                <button onClick={()=>{
                    disPatch(delTodo(todo.id))
                }}>삭제</button>
                <button onClick={()=>{
                    disPatch(changeIsDone(todo.id))
                }}>{isDone ? "완료취소" : "완료"}</button>
                <button onClick={()=>{
                    navigate(`/Detail/${todo.id}`)
                }}>상세보기</button>
              </div>
            );
          })}
        </div>
  )
}

export default TodoList