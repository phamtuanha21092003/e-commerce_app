import slide1 from "../assets/image/slide_show/vn-50009109-0e76b8cfc2cf10e49ac7e18d6f6980d3_xxhdpi.jfif"
import slide2 from "../assets/image/slide_show/vn-50009109-20403322e7815abc6066c9d181fe6797_xhdpi.png"
import slide3 from "../assets/image/slide_show/vn-50009109-eaab7a55995d9f8158f3d185117152b7_xhdpi.jfif"
import slide4 from "../assets/image/slide_show/vn-50009109-eb6991f285c685ba65eff1fb78e86e7c_xxhdpi.jfif"
import slide5 from "../assets/image/slide_show/vn-50009109-fa79715264f5c973648d8096a8aa9773_xxhdpi.jfif"
import new1 from "../assets/image/slide_show/new1.png"
import new2 from "../assets/image/slide_show/new2.jfif"

import SlideShow from "./Slidehow"

const slides = [
  { image: slide1 },
  { image: slide2 },
  { image: slide3 },
  { image: slide4 },
  { image: slide5 },
]

function Main() {
  return (
    <main className="main">
      <div className="container">
        <SlideShow slides={slides} />
        <div className="slideshow_right-wrapper">
          <div className="slideshow_right-banner">
            <img src={new1} alt="" />
          </div>
          <div className="slideshow_right-banner">
            <img src={new2} alt="" />
          </div>
        </div>
      </div>
    </main>
  )
}

export { Main as MainHomePage }
