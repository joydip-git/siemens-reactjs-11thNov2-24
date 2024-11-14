import axiosInstance from "../config/axiosinstance";
import { Product } from "../models/product";

export function getProducts() {
    return axiosInstance.get<Product[]>('')
}
export function getProduct(id: string) {
    return axiosInstance.get<Product>(`${id}`)
}
export function addProduct(p: Product) {
    return axiosInstance.post<Product>('', p)
}
export function updateProduct(id: string, p: Product) {
    return axiosInstance.post<Product>(`${id}`, p)
}
export function deleteProduct(id: string) {
    return axiosInstance.post<Product>(`${id}`)
}