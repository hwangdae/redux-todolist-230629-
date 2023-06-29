import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

function Detail() {
    const navigate = useNavigate()
    const params = useParams();

    const todos = useSelector((state)=>{
        return state.todoList
    })

    const foundData = todos.find((item)=>{
        return item.id === params.id
    })


  return (
    <>
    <p>{foundData.id}</p>
    <h3>{foundData.title}</h3>
    <p>{foundData.content}</p>
    <p>{foundData.isDone.toString()}</p>
    <button onClick={()=>{
        navigate('/')
    }}>홈으로가기</button>
    </>
  )
}

export default Detail