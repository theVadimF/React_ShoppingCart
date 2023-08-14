import img1 from "./gallery/1.jpg"
import img2 from "./gallery/2.jpg"
import img3 from "./gallery/3.jpg"

// TODO(vf) Find a better way to do this
export interface galleryProps {
  heading: string,
  text: string,
  img: string
}

const gallery_data = [
  {
    heading: "Welcome to Scalped Pie's",
    text: "Buy a Pi now",
    img: img1
  }, {
    heading: "We have stock",
    text: "But you have to pay extra for it",
    img: img2
  }, {
    heading: "We have the best prices",
    text: "(this may be a lie)",
    img: img3
  }
]

export default gallery_data
