import { useEffect, useState } from "react"
import './ProductList.css'
import ProductRow from "../product-row/ProductRow"
import ProductDetail from "../product-detail/ProductDetail"
import { Product } from "../../../models/product"
import { getProducts } from "../../../services/productservice"
import { useAppStoreDispatch, useAppStoreSelector } from "../../../redux/hooks"
import { fetchAllProductsFaliure, fetchAllProductsInitiate, fetchAllProductsSuccess } from "../../../redux/allproductsslice"

const ProductList = () => {

    const { products, isFetchOver, errorInfo } = useAppStoreSelector(state => state.allProductsState)
    const dispatchFnRef = useAppStoreDispatch()

    const fetchProducts = async () => {
        try {
            const response = await getProducts()
            if (response.status === 200) {
                dispatchFnRef(fetchAllProductsSuccess(response.data))
            } else {
                dispatchFnRef(fetchAllProductsFaliure('could not fetch data...'))
            }
        } catch (error: any) {
            dispatchFnRef(fetchAllProductsFaliure(error.message))
        }
    }

    useEffect(
        () => {
            dispatchFnRef(fetchAllProductsInitiate())
            fetchProducts()
        },
        []
    )

    let design: any;
    if (isFetchOver) {
        if (errorInfo === '') {
            if (products && products.length > 0) {
                design = (
                    <>
                        <table className="table table-hover">
                            <thead className="table-header-style">
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Rating</th>
                                </tr>
                            </thead>
                            <tbody className="table-dark">
                                {
                                    products.map(
                                        (p) => {
                                            return (
                                                <ProductRow
                                                    product={p}
                                                    key={p.id}
                                                />
                                            )
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                        {/* {
                            selectedId !== '' ? <ProductDetail selectedProductId={selectedId} /> : <span>Click on an Image to View the Details</span>
                        } */}
                    </>
                )
            } else
                design = <span>No records....</span>
        } else
            design = <span>{errorInfo}</span>
    }
    else
        design = <span>Loading...</span>

    return design
}

export default ProductList