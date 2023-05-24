import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import SignIn from "./component/SignIn"
import SignUp from "./component/SignUp"
import DetailProduct, {
  loader as loaderDetailProduct,
} from "./component/DetailProduct"
import { MainHomePage } from "./component/ComponentHomePage"
import { Cart, loader as loaderCart } from "./component/Cart"

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
        path: "/oder",
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
