//import axios from 'axios'
import { Todo } from '../models/todo'
import axiosInstance from '../utilities/axiosinstance'

//const url = 'https://jsonplaceholder.typicode.com/todos'

export function getTodos() {
    //  return axios.get<Todo[]>(url)
    return axiosInstance.get<Todo[]>('')
}

export function getTodo(id: number) {
    //return axios.get<Todo>(`${url}/${id}`)
    return axiosInstance.get<Todo>(`${id}`)
}

export function addTodo(todo: Todo) {
    //return axios.post<Todo>(url, todo)
    return axiosInstance.post<Todo>('', todo)
}

export function updateTodo(id: number, todo: Todo) {
    //return axios.put<Todo>(`${url}/${id}`, todo)
    return axiosInstance.put<Todo>(`${id}`, todo)
}

export function deleteTodo(id: number) {
    //return axios.delete<Todo>(`${url}/${id}`)
    return axiosInstance.delete<Todo>(`${id}`)
}
