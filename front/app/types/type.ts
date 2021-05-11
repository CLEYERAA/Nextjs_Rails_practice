export interface TODO {
  id: number
  title: string
  content: string
}

export interface STATICPROPS {
  todos: {
    data: TODO[]
  }
}
