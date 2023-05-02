import { SetStateAction } from "react"
import style from "../styles/cart.module.scss"

import { IoMdClose } from 'react-icons/io'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { FaTrashAlt } from 'react-icons/fa'
import { IoBagCheckOutline } from 'react-icons/io5'
import { dataProp } from '../../assets/listings'

const maxAmount = 99

interface itemProps {
  id: number;
  data: dataProp
  removeFromCart(data: dataProp, id: number): void;
  cartAmounts: number[];
  setCartAmounts: React.Dispatch<SetStateAction<number[]>>
}

function Item( {id, data, removeFromCart, cartAmounts, setCartAmounts}: itemProps ) {

  function updateAmount(new_amount: number) {
    setCartAmounts(e => [
      ...e.slice(0, id),
      new_amount,
      ...e.slice(id + 1)
    ])
  }

  function checkZero(value: string) {
    if (value === '0') {
      removeFromCart(data, id);
    }
  }

  function increaseAmount() {
    if (cartAmounts[id] < maxAmount) {
      updateAmount(cartAmounts[id] + 1);
    }
  }

  function decreaseAmount() {
    if (cartAmounts[id] - 1 > 0) {
      updateAmount(cartAmounts[id] - 1);
    } else {
      removeFromCart(data, id);
    }
  }

  function setAmountLogic(value: string) {
    if (Number(value) <= maxAmount) {
      updateAmount(Number(value));
    } else {
      updateAmount(99);
    }
  }

  return (
    <div className={style.item}>
      <img src={data.img} className={style.thumbnail} alt="" />
      <div className={style.item_middle}>
        <p className={style.title}>{data.title}</p>
        <p className={style.price}>{data.price} USD</p>
        <div className={style.amount_box}>
          <button onClick={decreaseAmount}><AiOutlineMinus/></button>
          <input
            type="text"
            pattern="[0-9]*"
            value={cartAmounts[id]}
            max='99'
            onKeyDown={e => {
              if (e.key === '-') {
                e.preventDefault();
              }
            }}
            onBlur={e => checkZero(e.target.value)}
            onChange={e => setAmountLogic(e.target.value)}
          />
          <button onClick={increaseAmount}><AiOutlinePlus/></button>
        </div>
      </div>
      <button className={style.remove_btn} onClick={() => removeFromCart(data, id)}><FaTrashAlt/></button>
    </div>
  )
}

interface cartProps {
  toggleCart(): void;
  cartItems: dataProp[];
  removeFromCart(data: dataProp, id: number): void;
  cartAmounts: number[];
  setCartAmounts: React.Dispatch<SetStateAction<number[]>>
}

export default function Cart({ toggleCart, cartItems, removeFromCart, cartAmounts, setCartAmounts }: cartProps) {

  function getTotal() {
    let total = 0;
    cartItems.forEach((item, id) => {
      total += item.price * cartAmounts[id];
    })
    return total;
  }

  return (
    <div className={style.overlay}>
      <div className={style.cart}>
        <h1>Cart</h1>
        <button className={style.close_btn} onClick={toggleCart}><IoMdClose/></button>
        <div className={style.items}>
          {cartItems.map( (item: dataProp, id: number) => (
            <Item
              key = {id}
              id = {id}
              data = {item}
              cartAmounts = {cartAmounts}
              setCartAmounts = {setCartAmounts}
              removeFromCart = {removeFromCart}
            />
          ) )}
        </div>
        <div className={style.price_box}>
          <button className={style.checkout_btn}><IoBagCheckOutline/>Checkout</button>
          <p className={style.total}>{getTotal()} USD</p>
        </div>
      </div>
    </div>
  )
}
