import style from '../styles/shop.module.scss'
import data from '../../assets/listings'
import { dataProp } from '../../assets/listings'
import {FaCartPlus, FaCartArrowDown} from 'react-icons/fa'

interface cardProps {
  data: dataProp,
  cartItems: dataProp[];
  addToCart(data: dataProp): void;
  toggleCart(): void;
}

function AddToCart({data, cartItems, addToCart, toggleCart}: cardProps) {
  if (cartItems.includes(data)) {
    return (
      <button className={`${style.add_cart} ${style.in_cart}`} onClick={toggleCart}><FaCartArrowDown/>In Cart</button>
    )
  } else {
    return (
      <button className={style.add_cart} onClick={() => addToCart(data)}><FaCartPlus/>Add to cart</button>
    )
}
}

function Card({data, cartItems, addToCart, toggleCart}: cardProps) {
  return (
    <div className={style.item_card}>
      <div className={style.thumbnail}>
        <img src={data.img} alt="product" className={style.thumb_image} />
      </div>
      <p className={style.item_title}>{data.title}</p>
      <p className={style.price}>{data.price} USD</p>
      <AddToCart
        data={data}
        cartItems={cartItems}
        addToCart={addToCart}
        toggleCart={toggleCart}
      />
    </div>
  )
}

interface shopProps {
  cartItems: dataProp[];
  addToCart(data: dataProp): void;
  toggleCart(): void;
}

export default function Shop({cartItems, addToCart, toggleCart}: shopProps) {
  return (
    <div className={style.main}>
      {data.map((item, id) => (
        <Card
          data={item}
          key={id}
          cartItems={cartItems}
          addToCart={addToCart}
          toggleCart={toggleCart}
        />
      ))}
    </div>
  )
}
