import style from '../styles/shop.module.scss'
import data from '../../assets/listings'
import {FaCartPlus, FaCartArrowDown} from 'react-icons/fa'

function AddToCart({data, cartItems, addToCart, toggleCart}: any) {
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

function Card({data, cartItems, addToCart, toggleCart}: any) {
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

export default function Shop({cartItems, addToCart, toggleCart}: any) {
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
