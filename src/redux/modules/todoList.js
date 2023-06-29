import React from 'react'
import uuid from 'react-uuid'

const ADD_TODO = "ADD_TODO"
const DEL_TODO = "DEL_TODO"
const CHANGE_ISDONE = "CHANGE_ISDONE"

export const addTodo = (payload)=>{
    return{
        type:ADD_TODO,
        payload : payload
    }
}
export const delTodo = (payload)=>{
    return {
        type : DEL_TODO,
        payload : payload
    }
}

export const changeIsDone = (payload)=>{
    return{
        type : CHANGE_ISDONE,
        payload : payload
    }
}


const initialState = [
    {id:uuid(), title:"제목1",content :"내용1",isDone : false},
    {id:uuid(), title:"제목2",content :"내용2",isDone : true},
    {id:uuid(), title:"제목3",content :"내용3",isDone : false},
    {id:uuid(), title:"제목4",content :"내용4",isDone : false},
]

function todoList(state = initialState , action) {
  switch (action.type) {
    case ADD_TODO :
        return [...state, action.payload]
    case DEL_TODO :
        return state.filter((item)=>{
            return item.id !== action.payload
        })
    case CHANGE_ISDONE :
        return state.map((item)=>{
            if(item.id === action.payload){
                return {...item, isDone : !item.isDone}
            }else{
                return item
            }
        })
    default:
        return state
  }
}

export default todoList