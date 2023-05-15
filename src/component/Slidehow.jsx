import { useState, useEffect } from "react"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

export default function SlideShow({ slides, interval = 3000 }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHover, setIsHover] = useState(false)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, interval)
    return () => {
      clearInterval(timer)
    }
  }, [slides.length, interval])
  return (
    <div
      className="slideshows"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {slides.map(
        (slide, index) =>
          index === currentSlide && (
            <div key={`idex-${index}`} className="slide">
              <div style={{ backgroundImage: `url('${slide.image}')` }}></div>
            </div>
          )
      )}
      {isHover ? (
        <>
          <div
            className="arrow-back"
            onClick={() =>
              setCurrentSlide((prevSlide) =>
                prevSlide === 0 ? slides.length - 1 : prevSlide - 1
              )
            }
          >
            <ArrowBackIosIcon
              sx={{ height: "1em", width: "1em", color: "white" }}
            />
          </div>
          <div
            className="arrow-next"
            onClick={() =>
              setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
            }
          >
            <ArrowForwardIosIcon
              sx={{ height: "1em", width: "1em", color: "white" }}
            />
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="slideshows_dots">
        {slides.map((slide, index) => (
          <div
            key={`slide_${slide.image}`}
            className={`slideshows_dot${
              index === currentSlide ? " dot_active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  )
}
