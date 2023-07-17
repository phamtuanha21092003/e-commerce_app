import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { selectAccountByEmail } from "../features/account/accountSlice"
import EmptyProduct from "./EmptyProduct"

export function OrderHistory() {
    const email = localStorage.getItem("email")
    const navigate = useNavigate()
    const account = useSelector((state) => selectAccountByEmail(state, email))
    useEffect(() => {
        if (!account) {
            navigate("/e-commerce_app/signin")
        }
    }, [])
    const ordereds = account?.ordered
    return ordereds?.length !== 0 ? (
        <div className="history_container">
            <p>Lịch sử đặt hàng</p>
            <div className="table-container">
                <table className="responsive-table">
                    <thead>
                        <tr>
                            <th>Số thứ tự</th>
                            <th>Mã hàng</th>
                            <th>Thời gian</th>
                            <th>Tổng số tiền</th>
                            <th>Trạng thái</th>
                            <th>Chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordereds.map((row, indexỎdered) => (
                            <tr key={indexỎdered}>
                                <td data-label="Index">{indexỎdered + 1}</td>
                                <td data-label="ID">{row.id}</td>
                                <td data-label="Time">{row.time}</td>
                                <td data-label="Total Amount">
                                    {row.totalPrice} $
                                </td>
                                <td data-label="Status">Thành công</td>
                                <td data-label="Detail">
                                    <ul>
                                        {row.productOrder.map(
                                            (product, index) => (
                                                <li
                                                    key={`product_${indexỎdered}_index_${index}`}
                                                >
                                                    {product["sản phẩm"]} (
                                                    {product["số lượng"]})
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    ) : (
        <EmptyProduct content={"Bạn chưa mua hàng lần nào"} />
    )
}
