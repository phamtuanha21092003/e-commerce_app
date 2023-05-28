import { useSelector } from "react-redux"
import { selectAccountByEmail } from "../features/account/accountSlice"
import { useEffect, useState } from "react"
import { NavLink, useLoaderData, useNavigate } from "react-router-dom"
import CartProduct from "./CartProduct"
import cartEmpty from "../assets/image/cart_empty.png"
import Order from "./Order"
import { toast } from "react-toastify"

export function Cart() {
        const email = localStorage.getItem("email") || ""
        const account = useSelector((state) =>
                selectAccountByEmail(state, email)
        )
        const navigate = useNavigate()
        useEffect(() => {
                if (!account) {
                        navigate("/signin")
                }
        }, [email])
        const idBuyNow = useLoaderData()
        const countCart = account?.cart?.length
        const [productCheckout, setProductCheckout] = useState([])
        const productToCart = account?.cart
        const [checked, setChecked] = useState([])
        const isCheckAll =
                checked?.filter((el) => el).length === checked?.length
        function handleOnChange(index, event) {
                const updateChecked = [...checked]
                updateChecked[index] = event.target.checked
                setChecked(updateChecked)
        }
        useEffect(() => {
                setChecked(
                        productToCart?.map((product) => {
                                const [id] = Object.keys(product)
                                return id === idBuyNow
                        })
                )
        }, [productToCart?.length])
        const [isOrdering, setIsOrdering] = useState(false)
        function ordering(event) {
                if (productCheckout.length === 0) {
                        toast.error("Bạn chưa chọn sản phẩm nào để mua")
                        return
                }
                event.stopPropagation()
                setIsOrdering(!isOrdering)
        }
        const totalOrder = productCheckout.reduce(
                (accumulator, currentElement) => {
                        const { count, price } = currentElement
                        return (
                                parseFloat(count) * parseFloat(price) +
                                accumulator
                        )
                },
                0
        )
        const countOrder = productCheckout.reduce(
                (accumulator, currentElement) => {
                        const { count } = currentElement
                        return parseInt(count) + accumulator
                },
                0
        )
        function cancelOrder() {
                setIsOrdering(false)
        }

        return productToCart?.length === 0 ? (
                <div className="cart_container_empty">
                        <div className="content">
                                <div
                                        className="image"
                                        style={{
                                                backgroundImage: `url("${cartEmpty}")`,
                                        }}
                                ></div>
                                <div>Giỏ hàng của bạn còn trống</div>
                                <NavLink to="/">Mua ngay</NavLink>
                        </div>
                </div>
        ) : (
                <div className="cart_container" id="cart_modal">
                        {!isOrdering && (
                                <div className="cart_header">
                                        <div className="product_checkbox">
                                                <input
                                                        checked={isCheckAll}
                                                        type="checkbox"
                                                        id="checkboxTotalProduct"
                                                        onChange={(event) =>
                                                                setChecked(
                                                                        checked.map(
                                                                                () =>
                                                                                        event
                                                                                                .target
                                                                                                .checked
                                                                        )
                                                                )
                                                        }
                                                />
                                                <label htmlFor="checkboxTotalProduct">
                                                        Sản phẩm
                                                </label>
                                        </div>
                                        <div>Số lượng</div>
                                        <div>Số tiền</div>
                                        <div className="operation">
                                                Thao tác
                                        </div>
                                </div>
                        )}

                        <div className="cart_products_order">
                                <div className="cart_products">
                                        {productToCart?.map(
                                                (product, index) => {
                                                        const [[id], [count]] =
                                                                [
                                                                        Object.keys(
                                                                                product
                                                                        ),
                                                                        Object.values(
                                                                                product
                                                                        ),
                                                                ]
                                                        const checkCartProduct =
                                                                checked[index]
                                                        return (
                                                                <div
                                                                        key={`product_index_${index}`}
                                                                >
                                                                        <CartProduct
                                                                                id={
                                                                                        id
                                                                                }
                                                                                count={
                                                                                        count
                                                                                }
                                                                                productCheckout={
                                                                                        productCheckout
                                                                                }
                                                                                setProductCheckout={
                                                                                        setProductCheckout
                                                                                }
                                                                                checked={
                                                                                        checkCartProduct
                                                                                }
                                                                                cancelOrder={
                                                                                        cancelOrder
                                                                                }
                                                                                onChange={(
                                                                                        event
                                                                                ) =>
                                                                                        handleOnChange(
                                                                                                index,
                                                                                                event
                                                                                        )
                                                                                }
                                                                                isOrdering={
                                                                                        isOrdering
                                                                                }
                                                                        />
                                                                </div>
                                                        )
                                                }
                                        )}
                                </div>
                                {isOrdering && (
                                        <Order
                                                product={productCheckout}
                                                products={productCheckout}
                                                totalPrice={totalOrder}
                                                onClick={() =>
                                                        setIsOrdering(false)
                                                }
                                        />
                                )}
                        </div>
                        {!isOrdering && (
                                <div className="cart_price">
                                        <div>
                                                <input
                                                        type="checkbox"
                                                        checked={isCheckAll}
                                                        id="checkboxAllProduct"
                                                        onChange={(event) =>
                                                                setChecked(
                                                                        checked.map(
                                                                                () =>
                                                                                        event
                                                                                                .target
                                                                                                .checked
                                                                        )
                                                                )
                                                        }
                                                />
                                                <label htmlFor="checkboxAllProduct">
                                                        Chọn tất cả(
                                                        {countCart})
                                                </label>
                                        </div>
                                        <div className="grow">Xóa</div>
                                        <div>
                                                Tổng thanh toán ({countOrder}{" "}
                                                Sản phẩm): {totalOrder} $
                                        </div>
                                        <div
                                                className="sell_wrapper"
                                                onClick={ordering}
                                        >
                                                <div className="sell">
                                                        Mua Hàng
                                                </div>
                                        </div>
                                </div>
                        )}
                </div>
        )
}

export function loader() {
        if (!localStorage.getItem("buyNow")) {
                return null
        }
        const idBuyNow = localStorage.getItem("buyNow")
        localStorage.removeItem("buyNow")
        return idBuyNow
}
