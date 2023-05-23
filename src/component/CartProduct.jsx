import axiosInstance from "../axios"
import Modal from "./Modal"
import { useEffect, useState } from "react"
import {
  decrementProduct,
  incrementProduct,
} from "../features/account/accountSlice"
import { useDispatch } from "react-redux"

export default function CartProduct({
  id,
  count,
  setProductCheckout,
  checked,
  ...props
}) {
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData() {
      const {
        images: [img],
        description,
        price,
      } = await getDetailProduct(id)
      setImage(img)
      setDescription(description)
      setPrice(price)
    }
    fetchData()
    return () => {
      setProductCheckout((products) =>
        products.filter((product) => id !== product.id)
      )
    }
  }, [])

  useEffect(() => {
    setProductCheckout((products) => {
      if (checked) {
        return [...products, { id, price, count }]
      }
      return products.filter((product) => id !== product.id)
    })
  }, [checked])

  useEffect(() => {
    setProductCheckout((products) => {
      const updatedProducts = products.map((product) => {
        if (product.id === id) {
          return { id, price, count }
        }
        return product
      })
      return updatedProducts
    })
  }, [count, setProductCheckout, id, price])

  const [isShowModal, setIsShowModal] = useState(false)

  function handleIncrement() {
    const email = localStorage.getItem("email")
    dispatch(incrementProduct({ email, id }))
  }

  function handleDecrement() {
    const email = localStorage.getItem("email")
    if (count === 1) {
      setIsShowModal(true)
      return
    }
    dispatch(decrementProduct({ email, id }))
  }

  const propsModal = {
    isOpen: isShowModal,
    setIsOpen: setIsShowModal,
    id,
    email: localStorage.getItem("email"),
  }

  return (
    <div className="cart_product">
      <div className="cart_checkbox">
        <input
          type="checkbox"
          id={`product_id_${id}`}
          checked={checked}
          {...props}
        />
        <label htmlFor={`product_id_${id}`}>
          <div
            className="image"
            style={{ backgroundImage: `url('${image}')` }}
          ></div>
        </label>
      </div>
      <div style={{ flex: 1 }}>{description}</div>
      <div>
        <button onClick={handleDecrement}>
          <i className="fa-solid fa-minus"></i>
        </button>
        <input type="number" value={count} readOnly />
        <button onClick={handleIncrement}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div>{parseFloat(price) * count} $</div>
      <div style={{ cursor: "pointer" }} onClick={() => setIsShowModal(true)}>
        Xóa
      </div>
      <Modal {...propsModal} />
    </div>
  )
}

function getDetailProduct(idProduct) {
  return axiosInstance.get(`products/${idProduct}`)
}
