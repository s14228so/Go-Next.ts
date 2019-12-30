
import Todo from "./todo"

export default interface User {
    username?: string,
    id?: number,
    created_at?: string,
    updated_at?: string,
    deleted_at?: null,
    email?: string,
    uid?: string,
    todos?: Todo[]
}