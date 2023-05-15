import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import Header from "./component/Header"
import { MainHomePage } from "./component/ComponentHomePage"
import axiosInstance from "./axios"

function App() {
  const [products, setProducts] = useState([])
  const { status, fetchStatus } = useQuery({
    queryKey: ["key"],
    queryFn: () =>
      axiosInstance.get("/products").then((response) => response.data),
    onSuccess: ({ products: listProduct }) => {
      console.log(listProduct)
      setProducts(listProduct)
    },
    onError: (error) => {
      console.log("error ", error)
    },
  })
  if (fetchStatus === "paused") return <h1>disconnect network</h1>
  if (status === "loading") return <h1>loading</h1>
  return (
    <>
      <Header />
      <MainHomePage products={products} />
    </>
  )
}

export default App
