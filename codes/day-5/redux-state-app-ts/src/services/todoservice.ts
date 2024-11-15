import axiosInstance from "../config/axiosconfig"
import { Todo } from "../models/todo"

export function getTodos() {
    return axiosInstance.get<Todo[]>('')
}

export function getTodo(id: number) {
    return axiosInstance.get<Todo>(`${id}`)
}

export function addTodo(todo: Todo) {
    return axiosInstance.post<Todo>('', todo)
}

export function updateTodo(id: number, todo: Todo) {
    return axiosInstance.put<Todo>(`${id}`, todo)
}

export function deleteTodo(id: number) {
    return axiosInstance.delete<Todo>(`${id}`)
}