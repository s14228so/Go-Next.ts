import * as React from 'react'

import { Todo } from '../interfaces'
import axios from "axios"
import { useRouter } from 'next/router'

type ListDetailProps = {
  item: Todo
}

const ListDetail: React.FunctionComponent<ListDetailProps> = ({
  item: todo,
}) => {

  const router = useRouter()

  const handleDelete = async () => {

    const result = confirm("本当に削除しますか？")
    if (result) {

      const { data } = await axios.delete(`http://localhost:8080/todos/${todo.id}`)
      console.log(data, "is deleted!")

      router.push("/todos")
    }


  }

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>ID: {todo.id}</p>
      <p>ユーザー名: {todo.user.username}</p>
      <button onClick={handleDelete}>削除</button>
    </div>
  )
}

export default ListDetail
