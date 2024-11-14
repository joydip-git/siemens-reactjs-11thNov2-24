import { Product } from "../../../models/product"

type ProductRowPropType = {
    product: Product,
    selectIdHandler: (id: string) => void
}
const ProductRow = (props: Readonly<ProductRowPropType>) => {
    const { product, selectIdHandler } = props
    return (
        <tr>
            <td>
                <img
                    className="image-style"
                    src={product.imageUrl}
                    alt="NA"
                    title={product.productName}
                    onClick={() => selectIdHandler(product.id)}
                />
            </td>
            <td>{product.productName}</td>
            <td>{product.price}</td>
            <td>{product.starRating}</td>
        </tr>
    )
}

export default ProductRow