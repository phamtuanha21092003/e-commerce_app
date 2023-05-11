import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import SignIn from "./component/SignIn"
import SignUp from "./component/SignUp"
import Test from "./Test"

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
  { path: "/test", element: <Test /> },
])
