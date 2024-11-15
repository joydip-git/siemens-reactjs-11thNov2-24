import { useEffect } from "react";
import './ProductDetail.css'
import { getProduct } from "../../../services/productservice";
import { useAppStoreDispatch, useAppStoreSelector } from "../../../redux/hooks";
import { fetchProductFaliure, fetchProductInitiate, fetchProductSuccess } from "../../../redux/singleproductslice";
import { useNavigate, useParams } from "react-router-dom";

type ParamsType = {
    id: string
}
const ProductDetail = () => {
    const { id } = useParams<ParamsType>()
    const navigate = useNavigate()

    const { product, errorInfo, isFetchOver } = useAppStoreSelector(state => state.singleProductState)
    const dispatchFnRef = useAppStoreDispatch()

    const fetchProduct = async (selectedProductId: string) => {
        try {
            const response = await getProduct(selectedProductId)
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
            if (id) {
                dispatchFnRef(fetchProductInitiate())
                fetchProduct(id)
            }
        },
        [id]
    )

    let design: any;

    if (isFetchOver) {
        if (errorInfo === '') {
            if (product) {
                design = (
                    <div className="card" id='cardMain'>
                        <img src={product.imageUrl} className="card-img-top" alt="NA" />
                        <div className="card-body">
                            <h5 className="card-title">
                                {product.productName}
                            </h5>
                            <p className="card-text">{product.description}</p>
                            <button type="button" className="btn btn-primary" onClick={() => navigate(`/products/edit/${product.id}`)}>
                                Edit
                            </button>
                        </div>
                    </div>
                )
            } else {
                design = <span>No product with id {id} found</span>
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