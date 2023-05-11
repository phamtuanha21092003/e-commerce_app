import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import Header from "./component/Header"
import { MainHomePage } from "./component/ComponentHomePage"
//  import cart from "./assets/image/cart.svg"

function App() {
  const [products, setProducts] = useState()
  const [productsRender, setProductsRender] = useState()
  const { status, fetchStatus } = useQuery({
    queryKey: ["key"],
    queryFn: () => axios.get("/products").then((response) => response.data),
    onSuccess: ({ products: listProduct }) => {
      setProducts(listProduct)
      setProductsRender(listProduct)
    },
  })
  function handleOnChange(e) {
    console.log("values is", e.target.value)
    const value = e.target.value
    const filterProduct = products.filter((product) =>
      product.title.toLowerCase().includes(value?.toLowerCase())
    )
    setProductsRender(filterProduct)
  }
  if (fetchStatus === "paused") return <h1>disconnect network</h1>
  if (status === "loading") return <h1>loading</h1>
  return (
    <>
      <Header />
      <MainHomePage />
      <div style={{ marginTop: "200px" }}>
        Has {productsRender?.length} products
      </div>
      <label htmlFor="search">Search products</label>
      <input type="text" id="search" onChange={handleOnChange} />
      {productsRender?.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </>
  )
}

export default App
