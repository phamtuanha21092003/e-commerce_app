import { useDispatch, useSelector } from "react-redux"
import {
  decrementProduct,
  incrementProduct,
  selectAccountByEmail,
} from "../features/account/accountSlice"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axiosInstance from "../axios"
import Modal from "./Modal"

export function Cart() {
  //   const [totalCart, setTotalCart] = useState(true)
  const email = localStorage.getItem("email") || ""
  const account = useSelector((state) => selectAccountByEmail(state, email))
  const navigate = useNavigate()
  useEffect(() => {
    if (!account) {
      navigate("/signin")
    }
  }, [email])
  const countCart = account?.cart?.length
  const [productCheckout, setProductCheckout] = useState([])
  const productToCart = account?.cart
  return (
    <div className="cart_container" id="cart_modal">
      <div className="cart_header">
        <div className="product_checkbox">
          <input
            type="checkbox"
            name=""
            id="checkboxTotalProduct"
            value={"phamha"}
          />
          <label htmlFor="checkboxTotalProduct">Sản phẩm</label>
        </div>
        <div>Số lượng</div>
        <div>Số tiền</div>
        <div className="operation">Thao tác</div>
      </div>
      <div className="cart_products">
        {productToCart.map((product, index) => {
          const [[id], [count]] = [Object.keys(product), Object.values(product)]
          return (
            <div key={`product_index_${index}`}>
              <CartProduct
                id={id}
                count={count}
                checkout={setProductCheckout}
              />
            </div>
          )
        })}
      </div>
      <div className="cart_price">
        <div>
          <input type="checkbox" name="checkboxAllProduct" id="" />
          <label htmlFor="checkboxAllProduct">Chọn tất cả({countCart})</label>
        </div>
        <div className="grow">Xóa</div>
        <div>
          Tổng thanh toán (
          {productCheckout.reduce((accumulator, currentElement) => {
            const { count } = currentElement
            return parseInt(count) + accumulator
          }, 0)}
          Sản phẩm) :{" "}
          {productCheckout.reduce((accumulator, currentElement) => {
            const { count, price } = currentElement
            return parseFloat(count) * parseFloat(price) + accumulator
          }, 0)}{" "}
          $
        </div>
        <div className="sell_wrapper">
          <div className="sell">Mua Hàng</div>
        </div>
      </div>
    </div>
  )
}

function CartProduct({ id, count, checkout }) {
  const [image, setImage] = useState(null)
  const [description, setDecription] = useState(null)
  const [price, setPrice] = useState(null)
  const dispatch = useDispatch()
  useEffect(() => {
    async function fetchData() {
      const {
        images: [img],
        description,
        price,
      } = await getDetailProduct(id)
      setImage(img)
      setDecription(description)
      setPrice(price)
    }
    fetchData()
    return () => {
      checkout((products) => products.filter((product) => id !== product.id))
    }
  }, [])
  useEffect(() => {
    checkout((products) => {
      const updatedProducts = products.map((product) => {
        if (product.id === id) {
          return { id, price, count }
        }
        return product
      })
      return updatedProducts
    })
  }, [count, checkout, id, price])
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
          checked={true}
          type="checkbox"
          id={`product_id_${id}`}
          onClick={(e) => {
            if (e.target.checked) {
              checkout((products) => [...products, { id, price, count }])
              return
            }
            checkout((products) =>
              products.filter((product) => id !== product.id)
            )
          }}
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
