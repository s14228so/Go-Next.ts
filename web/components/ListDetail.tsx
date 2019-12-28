import * as React from 'react'

import { Todo } from '../interfaces'

type ListDetailProps = {
  item: Todo
}

const ListDetail: React.FunctionComponent<ListDetailProps> = ({
  item: todo,
}) => (
    <div>
      <h1>{todo.title}</h1>
      <p>ID: {todo.id}</p>
      <p>ユーザー名: {todo.user.username}</p>
    </div>
  )

export default ListDetail
