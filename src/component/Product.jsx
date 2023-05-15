import { NavLink } from "react-router-dom"

export function Product({ product }) {
  const {
    id,
    title,
    description,
    images: [image],
    price,
    discountPercentage,
  } = product
  console.log(id, title, description, image, price, discountPercentage)
  console.log("product", product)
  return (
    <NavLink to={`/detail/${id}`}>
      <div className="product_discount">
        <span className="discount-percentage">
          {Math.floor(discountPercentage)}
        </span>
        <span className="title_discount-percentage">Giá</span>
      </div>
      <div className="product_wrapper-image">
        <img src={image} alt="" />
      </div>
      <div className="product_description">{title}</div>
      <div className="product_price">{price}</div>
    </NavLink>
  )
}
