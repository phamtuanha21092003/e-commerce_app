import { NavLink } from "react-router-dom"
import cartEmpty from "../assets/image/cart_empty.png"

export default function EmptyProduct({ content }) {
    return (
        <div className="product_empty_container">
            <div className="content">
                <div
                    className="image"
                    style={{
                        backgroundImage: `url("${cartEmpty}")`,
                    }}
                ></div>
                <div>{content}</div>
                <NavLink to="/e-commerce_app/">Mua ngay</NavLink>
            </div>
        </div>
    )
}
