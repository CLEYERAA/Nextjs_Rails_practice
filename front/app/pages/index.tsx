import Layout from '../components/Layout'
import TodoList from '../components/TodoList'
import { GetStaticProps } from 'next'
import { getAllTodoData } from '../lib/fetch'
import { STATICPROPS } from '../types/type'

const Home: React.FC<STATICPROPS> = (props) => {
  return (
    <Layout title="Home">
      <div className="flex justify-center items-center flex-col min-h-screen font-mono">
        <TodoList todos={props.todos} />
      </div>
    </Layout>
  )
}
export default Home

export const getStaticProps: GetStaticProps = async () => {
  const todos = await getAllTodoData()
  return {
    props: { todos },
    revalidate: 3,
  }
}
