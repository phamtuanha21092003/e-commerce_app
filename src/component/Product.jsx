import { NavLink } from "react-router-dom"

export function Product({ product }) {
  const {
    id,
    title,
    images: [image],
    price,
    discountPercentage,
  } = product
  return (
    <NavLink to={`/detail/${id}`}>
      <div className="product_discount">
        <span className="discount-percentage">
          {Math.floor(discountPercentage)}
        </span>
        <span className="title_discount-percentage">Giảm</span>
      </div>
      <div className="product_wrapper-image">
        <img src={image} alt="" />
      </div>
      <div className="product_description">{title}</div>
      <div className="product_price">{price}</div>
    </NavLink>
  )
}
