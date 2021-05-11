import Layout from '../../components/Layout'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllTodoIds, getTodoData } from '../../lib/fetch'
import { TODO } from '../../types/type'

const TodoDetail: React.FC<TODO> = ({ title, content }) => {
  return (
    <Layout title={title}>
      <>
        <p>{title}</p>
        <p>{content}</p>
      </>
    </Layout>
  )
}

export default TodoDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllTodoIds()
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const todo = await getTodoData(ctx.params.id as string)
  console.log('staticprops', todo)
  return {
    props: {
      ...todo.data,
    },
    revalidate: 3,
  }
}
