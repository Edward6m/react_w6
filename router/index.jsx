import { createHashRouter } from "react-router-dom";
import FrontLayout from "../Layouts/Layout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";

const router = createHashRouter([
    {
        path: "/",
        element: <FrontLayout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "products/:id",
                element: <ProductDetail />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;