import { useState, useEffect, SetStateAction, useRef } from "react"
import style from "../styles/cart.module.scss"

// TODO(vf) Remove this
import test from "../../assets/product_pics/pi4_2gb/1.jpg"

import { IoMdClose } from 'react-icons/io'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { FaTrashAlt } from 'react-icons/fa'
import { IoBagCheckOutline } from 'react-icons/io5'

const maxAmount = 99

function Item( {id, data, removeFromCart, cartAmounts, setCartAmounts}: any ) {
  // const [amount, setAmount] = useState(1);

  // useEffect( () => {
  //   data.amount = amount;
  //   console.log(data);
  // }, [amount, data])

  function updateAmount(new_amount: number) {
    setCartAmounts(e => [
      ...e.slice(0, id),
      new_amount,
      ...e.slice(id + 1)
    ])
  }

  function checkZero(value: string) {
    if (value === '0') {
      removeFromCart(data);
    }
  }

  function increaseAmount() {
    if (cartAmounts[id] < maxAmount) {
      updateAmount(cartAmounts[id] + 1);
      // data.amount = amount + 1;
    }
  }

  function decreaseAmount() {
    if (cartAmounts[id] - 1 > 0) {
      updateAmount(cartAmounts[id] - 1);
    } else {
      removeFromCart(data);
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
      <div className={style.thumbnail}>
        <img src={data.img} alt="" />
      </div>
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

export default function Cart({ toggleCart, cartItems, removeFromCart, cartAmounts, setCartAmounts }: any) {
  // const [totalVal, setTotalVal] = useState(0);

  // useEffect(() => {
  //   let total = 0;
  //   console.log("fdasf");
  //   cartItems.map((item: any) => {
  //     total += item.price * item.amount;
  //   })
  //   setTotalVal(total);
  // }, [cartItems])

  function getTotal() {
    let total = 0;
    cartItems.map((item, id) => {
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
          {cartItems.map( (item: any, id: number) => (
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
