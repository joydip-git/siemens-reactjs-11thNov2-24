import { useEffect, useState } from "react";
import './ProductDetail.css'
import { Product } from "../../../models/product";
import { getProduct } from "../../../services/productservice";

type ProductDetailPropType = {
    selectedProductId: string;
}
const ProductDetail = (props: Readonly<ProductDetailPropType>) => {
    const { selectedProductId } = props

    const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(undefined)
    const [isFetchOver, setIsFetchOver] = useState(false)
    const [errorInfo, setErrorInfo] = useState('')

    const fetchProduct = async () => {
        try {
            const response = await getProduct(props.selectedProductId)
            if (response.status === 200) {
                setSelectedProduct(response.data)
                setErrorInfo('')
                setIsFetchOver(true)
            } else {
                setSelectedProduct(undefined)
                setErrorInfo('could not fetch records...')
                setIsFetchOver(true)
            }
        } catch (error: any) {
            setSelectedProduct(undefined)
            setErrorInfo(error.message)
            setIsFetchOver(true)
        }
    }

    useEffect(
        () => { fetchProduct() },
        [selectedProductId]
    )

    let design: any;

    if (isFetchOver) {
        if (errorInfo === '') {
            if (selectedProduct) {
                design = (
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
            } else {
                design = <span>No product with id {selectedProductId} found</span>
            }
        } else {
            design = <span>{errorInfo}</span>
        }
    } else {
        design = <span>Loading...</span>
    }
    return design
}

export default ProductDetail