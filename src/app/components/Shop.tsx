import style from '../styles/shop.module.scss'
import data from '../../assets/listings'
import {FaCartPlus, FaCartArrowDown} from 'react-icons/fa'

function AddToCart() {
  return (
    <button className={style.add_cart}><FaCartPlus/>Add to cart</button>
  )
}

function Card({data}: any) {
  return (
    <div className={style.item_card}>
      <div className={style.thumbnail}>
        <img src={data.img} alt="product" className={style.thumb_image} />
      </div>
      <p className={style.item_title}>{data.title}</p>
      <p className={style.price}>{data.price} USD</p>
      <AddToCart/>
    </div>
  )
}

export default function Shop() {
  return (
    <div className={style.main}>
      {data.map((item, id) => (
        <Card
          data={item}
          key={id}
        />
      ))}
    </div>
  )
}
