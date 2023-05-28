import { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteProductToCart, order } from "../features/account/accountSlice"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export default function Order({ totalPrice, product: products, ...props }) {
        const email = localStorage.getItem("email")
        const [receiver, setReceiver] = useState(email.split("@")[0])
        const [telephonenumber, setTelephonenumber] = useState("")
        const [address, setAddress] = useState("")
        const [isChecked, setIsChecked] = useState(true)
        const dispatch = useDispatch()
        const navigate = useNavigate()

        function changeReceiver(event) {
                setReceiver(event.target.value)
        }

        function changeTelephonenuber(event) {
                setTelephonenumber(event.target.value)
        }

        function changeAddress(event) {
                setAddress(event.target.value)
        }

        function changeIsChecked(event) {
                setIsChecked(event.target.checked)
        }

        function handleOrder() {
                if (!receiver || !telephonenumber || !address) {
                        toast.warn("vui lòng nhập đầy đủ thông tin")
                        return
                }
                dispatch(order({ totalPrice, email, products }))
                products.forEach((product) => {
                        dispatch(
                                deleteProductToCart({
                                        email,
                                        id: product.id,
                                })
                        )
                })
                toast.success("thanh toán thành công")
                navigate("/order/successful")
        }
        return (
                <div className="container_order">
                        <label htmlFor="receiver">Tên người nhận</label>
                        <input
                                type="text"
                                id="receiver"
                                value={receiver}
                                placeholder="Tên người nhận"
                                onChange={changeReceiver}
                        />
                        <label htmlFor="telephonenumber">Số điện thoại</label>
                        <input
                                type="text"
                                id="telephonenumber"
                                placeholder="Số điện thoại"
                                value={telephonenumber}
                                onChange={changeTelephonenuber}
                        />
                        <label htmlFor="address">Địa chỉ</label>
                        <textarea
                                name=""
                                id="address"
                                cols="30"
                                rows="10"
                                placeholder="Địa chỉ"
                                value={address}
                                onChange={changeAddress}
                        />
                        <p>Hình thức thanh toán</p>
                        <div>
                                <input
                                        type="checkbox"
                                        name=""
                                        id="method_checkout"
                                        checked={isChecked}
                                        onChange={changeIsChecked}
                                />
                                <label htmlFor="method_checkout">
                                        Thanh toán khi nhận hàng
                                </label>
                        </div>
                        <div className="total_price">
                                <p>Tổng tiền</p>
                                <p>{totalPrice} $</p>
                        </div>
                        <div className="operation">
                                <p className="cancel" {...props}>
                                        Hủy
                                </p>
                                <p className="book" onClick={handleOrder}>
                                        Đặt hàng
                                </p>
                        </div>
                </div>
        )
}
