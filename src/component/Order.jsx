import { useState } from "react"

export default function Order({ totalPrice, ...props }) {
        const [receiver, setReceiver] = useState(
                localStorage.getItem("email").split("@")[0]
        )
        const [telephonenumber, setTelephonenumber] = useState("")
        const [address, setAddress] = useState("")
        const [isChecked, setIsChecked] = useState(true)

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
                                <p className="book">Đặt hàng</p>
                        </div>
                </div>
        )
}
