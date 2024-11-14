import { productRepository } from "../../../data/productrepository";
import './ProductDetail.css'

type ProductDetailPropType = {
    selectedProductId: string;
}
const ProductDetail = (props: Readonly<ProductDetailPropType>) => {
    const { selectedProductId } = props
    const selectedProduct = productRepository.find(p => p.id === selectedProductId)

    if (selectedProduct) {
        return (
            <div className="card-style">
                <div>
                    <img src={selectedProduct.imageUrl}
                        alt="NA" />
                </div>
                <div>
                    <span>Id: &nbsp; {selectedProduct.id}</span>
                    <br />
                    <span>Name: &nbsp; {selectedProduct.productName}</span>
                    <br />
                    <span>Code: &nbsp; {selectedProduct.productCode}</span>
                    <br />
                    <span>Description: &nbsp; {selectedProduct.description}</span>
                    <br />
                    <span>Released On: &nbsp; {selectedProduct.releaseDate}</span>
                    <br />
                    <span>Rating: &nbsp; {selectedProduct.starRating}</span>
                </div>
            </div>
        )
    } else
        return <span>No product with id {selectedProductId} found</span>
}

export default ProductDetail