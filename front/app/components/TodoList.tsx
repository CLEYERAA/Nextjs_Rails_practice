import Layout from '../components/Layout'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { STATICPROPS } from '../types/type'
import Link from 'next/link'

const TodoList: React.FC<STATICPROPS> = ({ todos }) => {
  const [clicked, setClicked] = useState(false)
  const [todo, setTodo] = useState({
    title: '',
    content: '',
  })

  const SetClickedHandler = () => {
    if (clicked) {
      setClicked(false)
    } else {
      setClicked(true)
    }
  }

  const changeTodoHandler = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTodo({
      ...todo,
      [key]: e.target.value,
    })
  }

  const AddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      axios.post(`http://localhost:3000/api/v1/todos`, todo)
    } catch {
      console.error('post error')
    }
  }

  const todoData = todos.data
  console.log(todo)

  return (
    <div>
      <div className={'flex items-center'}>
        <p>Todos</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => {
            SetClickedHandler()
          }}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </div>
      {clicked && (
        <form onSubmit={AddTodo}>
          <input
            type="text"
            placeholder="add todos"
            onChange={(e) => {
              changeTodoHandler('title', e)
            }}
          />
          <input
            type="text"
            placeholder="add todos"
            onChange={(e) => {
              changeTodoHandler('content', e)
            }}
          />
          <button type="submit">submit</button>
        </form>
      )}
      <ul>
        {todoData &&
          todoData.map((todo) => {
            return (
              <li key={todo.id}>
                <Link href={`/todos/${todo.id}`}>
                  <a className="cursor-pointer border-b border-gray-500 hover:bg-gray-300">
                    {todo.id}:{todo.title}
                  </a>
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default TodoList
