import { Link } from "react-router-dom"
import { Product } from "../../../models/product"

type ProductRowPropType = {
    product: Product
}
const ProductRow = (props: Readonly<ProductRowPropType>) => {
    const { product } = props
    return (
        <tr>
            <td>
                <Link to={`/products/view/${product.id}`}>
                    <img
                        className="image-style"
                        src={product.imageUrl}
                        alt="NA"
                        title={product.productName}
                    />
                </Link>
            </td>
            <td>{product.productName}</td>
            <td>{product.price}</td>
            <td>{product.starRating}</td>
        </tr>
    )
}

export default ProductRow