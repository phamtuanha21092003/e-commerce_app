import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import SignIn from "./component/SignIn"
import SignUp from "./component/SignUp"
import DetailProduct, {
        loader as loaderDetailProduct,
} from "./component/DetailProduct"
import { MainHomePage } from "./component/ComponentHomePage"
import { Cart, loader as loaderCart } from "./component/Cart"
import OrderSuccessful from "./component/OrderSuccessful"
import { OrderHistory } from "./component/OrderHistory"

export const router = createBrowserRouter([
        {
                path: "",
                element: <App />,
                children: [
                        { path: "", element: <MainHomePage /> },
                        {
                                path: "/detail/:idProduct",
                                element: <DetailProduct />,
                                loader: loaderDetailProduct,
                        },
                        {
                                path: "/cart",
                                element: <Cart />,
                                loader: loaderCart,
                        },
                        {
                                path: "/order/successful",
                                element: <OrderSuccessful />,
                        },
                        {
                                path: "history",
                                element: <OrderHistory />,
                        },
                ],
        },

        {
                path: "/signin",
                element: <SignIn />,
        },

        {
                path: "/signup",
                element: <SignUp />,
        },
])
