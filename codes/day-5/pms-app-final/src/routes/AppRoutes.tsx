import { RouteObject, useRoutes } from "react-router-dom"
import Home from "../components/common/home/Home"
import ProductList from "../components/products/product-list/ProductList"
import AddProduct from "../components/products/add-product/AddProduct"
import ProductDetail from "../components/products/product-detail/ProductDetail"
import EditProduct from "../components/products/edit-product/EditProduct"
import PageNotFound from "../components/common/page-not-found/PageNotFound"

const AppRoutes = () => {
    const appRoutes: RouteObject = {
        path: '',
        children: [
            {
                path: '', element: <Home />
            },
            {
                path: 'home', element: <Home />
            },
            {
                path: '*', element: <PageNotFound />
            }
        ]
    }

    const productRoutes: RouteObject = {
        path: 'products',
        children: [
            {
                path: '', element: <ProductList />
            },
            {
                path: 'add', element: <AddProduct />
            },
            {
                path: 'view/:id', element: <ProductDetail />
            },
            {
                path: 'edit/:id', element: <EditProduct />
            }
        ]
    }

    return useRoutes([productRoutes, appRoutes])
}

export default AppRoutes