import { useEffect, useState } from "react"
import './ProductList.css'
import ProductRow from "../product-row/ProductRow"
import ProductDetail from "../product-detail/ProductDetail"
import { Product } from "../../../models/product"
import { getProducts } from "../../../services/productservice"

const ProductList = () => {

    const [products, setProducts] = useState<Product[] | undefined>(undefined)
    const [isFetchOver, setIsFetchOver] = useState(false)
    const [errorInfo, setErrorInfo] = useState('')
    const [selectedId, setSelectedId] = useState('')

    const selectedIdHandler = (id: string): void => {
        setSelectedId(id)
    }

    const fetchProducts = async () => {
        try {
            const response = await getProducts()
            if (response.status === 200) {
                setProducts(response.data)
                setErrorInfo('')
                setIsFetchOver(true)
            } else {
                setProducts(undefined)
                setErrorInfo('could net fetch records...')
                setIsFetchOver(true)
            }
        } catch (error: any) {
            setProducts(undefined)
            setErrorInfo(error.message)
            setIsFetchOver(true)
        }
    }

    useEffect(
        () => { fetchProducts() },
        []
    )

    let design: any;
    if (isFetchOver) {
        if (errorInfo === '') {
            if (products && products.length > 0) {
                design = (
                    <div className="container-style">
                        <table>
                            <thead className="table-header-style">
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map(
                                        (p) => {
                                            return (
                                                <ProductRow
                                                    product={p}
                                                    key={p.id}
                                                    selectIdHandler={selectedIdHandler}
                                                />
                                            )
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                        {
                            selectedId !== '' ? <ProductDetail selectedProductId={selectedId} /> : <span>Click on an Image to View the Details</span>
                        }
                    </div>
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