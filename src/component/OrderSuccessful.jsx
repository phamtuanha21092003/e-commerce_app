import { NavLink } from "react-router-dom"

export default function OrderSuccessful() {
        return (
                <div className="order_successful_container">
                        <i
                                className="fa-regular fa-face-smile fa-2xl"
                                style={{ color: "#367bf2" }}
                        ></i>
                        <p>Đơn hàng đã được đặt thành công!</p>
                        <NavLink to="/history" className="navlink">
                                Xem lịch sử
                        </NavLink>
                </div>
        )
}
