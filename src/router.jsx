import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import SignIn from "./component/SignIn"
import SignUp from "./component/SignUp"
import DetailProduct, {
  loader as loaderDetailProduct,
} from "./component/DetailProduct"

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/detail/:idProduct",
    element: <DetailProduct />,
    loader: loaderDetailProduct,
  },
])
