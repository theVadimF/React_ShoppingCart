import pi4_2gb from './product_pics/pi4_2gb/1.jpg'
import pi4_4gb from './product_pics/pi4_4gb/1.jpg'
import pi4_8gb from './product_pics/pi4_8gb/1.jpg'

// TODO(vf) Maybe find another way to do this...
export interface dataProp {
  title: string,
  price: number,
  img: string,
}

const data = [
  {
    title: "Raspberry Pi 4 1gb",
    price: 180,
    img: pi4_2gb,
  }, {
    title: "Raspberry Pi 4 2gb",
    price: 200,
    img: pi4_2gb,
  }, {
    title: "Raspberry Pi 4 4gb",
    price: 250,
    img: pi4_4gb,
  }, {
    title: "Raspberry Pi 4 8gb",
    price: 350,
    img: pi4_8gb,
  }
]

export default data
