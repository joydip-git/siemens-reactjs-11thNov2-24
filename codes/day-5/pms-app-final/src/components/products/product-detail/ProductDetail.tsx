import { useEffect } from "react";
import './ProductDetail.css'
import { getProduct } from "../../../services/productservice";
import { useAppStoreDispatch, useAppStoreSelector } from "../../../redux/hooks";
import { fetchProductFaliure, fetchProductInitiate, fetchProductSuccess } from "../../../redux/singleproductslice";

type ProductDetailPropType = {
    selectedProductId: string;
}
const ProductDetail = (props: Readonly<ProductDetailPropType>) => {
    const { selectedProductId } = props

    const { product, errorInfo, isFetchOver } = useAppStoreSelector(state => state.singleProductState)
    const dispatchFnRef = useAppStoreDispatch()

    const fetchProduct = async () => {
        try {
            const response = await getProduct(props.selectedProductId)
            if (response.status === 200) {
                dispatchFnRef(fetchProductSuccess(response.data))
            } else {
                dispatchFnRef(fetchProductFaliure('could not fetch data..'))
            }
        } catch (error: any) {
            dispatchFnRef(fetchProductFaliure(error.message))
        }
    }

    useEffect(
        () => {
            dispatchFnRef(fetchProductInitiate())
            fetchProduct()
        },
        [selectedProductId]
    )

    let design: any;

    if (isFetchOver) {
        if (errorInfo === '') {
            if (product) {
                design = (
                    <div className="card-style">
                        <div>
                            <img src={product.imageUrl}
                                alt="NA" />
                        </div>
                        <div>
                            <span>Id: &nbsp; {product.id}</span>
                            <br />
                            <span>Name: &nbsp; {product.productName}</span>
                            <br />
                            <span>Code: &nbsp; {product.productCode}</span>
                            <br />
                            <span>Description: &nbsp; {product.description}</span>
                            <br />
                            <span>Released On: &nbsp; {product.releaseDate}</span>
                            <br />
                            <span>Rating: &nbsp; {product.starRating}</span>
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