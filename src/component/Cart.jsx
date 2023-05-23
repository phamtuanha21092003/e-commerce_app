import { useSelector } from "react-redux"
import { selectAccountByEmail } from "../features/account/accountSlice"
import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import CartProduct from "./CartProduct"
import cartEmpty from "../assets/image/cart_empty.png"

export function Cart() {
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
  const [checked, setChecked] = useState([])
  const isCheckAll = checked?.filter((el) => el).length === checked?.length
  function handleOnChange(index, event) {
    const updateChecked = [...checked]
    updateChecked[index] = event.target.checked
    setChecked(updateChecked)
  }
  useEffect(() => {
    setChecked(productToCart?.map(() => false))
  }, [productToCart.length])
  return productToCart.length === 0 ? (
    <div className="cart_container_empty">
      <div className="content">
        <div
          className="image"
          style={{ backgroundImage: `url("${cartEmpty}")` }}
        ></div>
        <div>Giỏ hàng của bạn còn trống</div>
        <NavLink to="/">Mua ngay</NavLink>
      </div>
    </div>
  ) : (
    <div className="cart_container" id="cart_modal">
      <div className="cart_header">
        <div className="product_checkbox">
          <input
            checked={isCheckAll}
            type="checkbox"
            id="checkboxTotalProduct"
            onChange={(event) =>
              setChecked(checked.map(() => event.target.checked))
            }
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
          const checkCartProduct = checked[index]
          return (
            <div key={`product_index_${index}`}>
              <CartProduct
                id={id}
                count={count}
                setProductCheckout={setProductCheckout}
                checked={checkCartProduct}
                onChange={(event) => handleOnChange(index, event)}
              />
            </div>
          )
        })}
      </div>
      <div className="cart_price">
        <div>
          <input
            type="checkbox"
            checked={isCheckAll}
            id="checkboxAllProduct"
            onChange={(event) =>
              setChecked(checked.map(() => event.target.checked))
            }
          />
          <label htmlFor="checkboxAllProduct">Chọn tất cả({countCart})</label>
        </div>
        <div className="grow">Xóa</div>
        <div>
          Tổng thanh toán (
          {productCheckout.reduce((accumulator, currentElement) => {
            const { count } = currentElement
            return parseInt(count) + accumulator
          }, 0)}{" "}
          Sản phẩm):{" "}
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
