import { useState } from "react"
import { useLoaderData } from "react-router-dom"
import FsLightbox from "fslightbox-react"
import axiosInstance from "../axios"
import { Rating } from "@mui/material"
import StarIcon from "@mui/icons-material/Star"
import StarBorderIcon from "@mui/icons-material/StarBorder"

export default function DetailProduct() {
  const product = useLoaderData()
  const [toggler, setToggler] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const { images, description, price } = product
  const estimateStar = 3.7
  const rating = 2300
  const sold = 7000
  const [quantity, setQuantity] = useState(1)
  return (
    <section className="container">
      <div className="container_wrapper-image">
        <div className="image-current">
          <img
            src={images[currentImage]}
            alt=""
            onClick={() => setToggler(!toggler)}
          />
        </div>
        <div className="list_image">
          {images.map((image, index) => (
            <img
              src={image}
              alt=""
              key={`image_${index}`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
      <div className="info_product">
        <div className="product_description">
          <div className="title_decription">{description}</div>
          <div className="estimate">
            <div className="stars">
              <div>{estimateStar}</div>
              <Rating
                name="rating_start"
                defaultValue={estimateStar}
                precision={0.1}
                icon={<StarIcon />}
                emptyIcon={<StarBorderIcon />}
                readOnly
                size="small"
                sx={{
                  color: "#ee4d2d",
                }}
              />
            </div>
            <div className="rating">
              <div>
                {((number) =>
                  number >= 1000
                    ? `${Math.floor(number / 1000)}k${
                        (number % 1000) / 100 || ""
                      }`
                    : number)(rating)}
              </div>
              Đánh giá
            </div>
            <div className="sold">
              <div>{sold}</div> Đã bán
            </div>
          </div>
        </div>
        <div className="price">
          <div>{price} $</div>
        </div>
        <div className="quantity">
          <div className="label">Số lượng</div>
          <div>
            <button onClick={() => setQuantity(quantity + 1)}>
              <i className="fa-solid fa-plus"></i>
            </button>
            <input
              type="number"
              name="quantity"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button
              disabled={quantity === 0}
              onClick={() => setQuantity(quantity - 1)}
            >
              <i className="fa-solid fa-minus"></i>
            </button>
          </div>
        </div>
        <div className="container_checkout">
          <button disabled={quantity <= 0} className="cart">
            <i
              className="fa-solid fa-cart-plus"
              style={{ color: "#ee4d2d" }}
            ></i>
            <p>Thêm vào giỏ hàng</p>
          </button>
          <button disabled={quantity <= 0} className="checkout">
            Mua ngay
          </button>
        </div>
      </div>
      <FsLightbox toggler={toggler} sources={images} slide={currentImage + 1} />
    </section>
  )
}

async function loader({ params }) {
  const { idProduct } = params
  const product = await axiosInstance.get(`products/${idProduct}`)
  const { title, price, description, discountPercentage, id, images } = product
  return { title, price, description, discountPercentage, id, images }
}

export { loader }
