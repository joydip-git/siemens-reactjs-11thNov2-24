import { useState } from "react"
import { productRepository } from "../../../data/productrepository"
import './ProductList.css'
import ProductRow from "../product-row/ProductRow"
import ProductDetail from "../product-detail/ProductDetail"

const ProductList = () => {

    const [products, setProducts] = useState(productRepository)
    const [selectedId, setSelectedId] = useState('')

    const selectedIdHandler = (id: string): void => {
        setSelectedId(id)
    }

    return (
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
}

export default ProductList