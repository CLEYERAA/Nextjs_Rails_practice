import fetch from 'node-fetch'

export const getAllTodoData = async () => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/todos`)
  )

  const todos = await res.json()
  console.log('hello', todos)

  return todos
}

export const getAllTodoIds = async () => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/todos`)
  )
  const todos = await res.json()
  return todos.data.map((todo) => {
    return {
      params: {
        id: String(todo.id),
      },
    }
  })
}

export const getTodoData = async (id: string) => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/todos/${id}`)
  )
  const todo = await res.json()
  return todo
}
