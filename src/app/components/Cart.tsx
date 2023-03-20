import { useState, SetStateAction } from "react"
import style from "../styles/cart.module.scss"

// TODO(vf) Remove this
import test from "../../assets/product_pics/pi4_2gb/1.jpg"

import { IoMdClose } from 'react-icons/io'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { FaTrashAlt } from 'react-icons/fa'
import { IoBagCheckOutline } from 'react-icons/io5'

const maxAmount = 99

function Item() {
  const [amount, setAmount] = useState(1);

  function checkZero(value: string) {
    if (value === '0') {
      console.log('zero');
    }
  }

  function increaseAmount() {
    if (amount < maxAmount) {
      setAmount(e => e + 1);
    }
  }

  function decreaseAmount() {
    if (amount - 1 > 0) {
      setAmount(e => e - 1);
    } else {
      console.log("zero")
    }
  }

  function setAmountLogic(value: string) {
    if (Number(value) <= maxAmount) {
      setAmount(Number(value));
    } else {
      setAmount(99);
    }
  }

  return (
    <div className={style.item}>
      <div className={style.thumbnail}>
        <img src={test} alt="" />
      </div>
      <div className={style.item_middle}>
        <p className={style.title}>Raspberry Pi 4 4gb</p>
        <p className={style.price}>200 USD</p>
        <div className={style.amount_box}>
          <button onClick={decreaseAmount}><AiOutlineMinus/></button>
          <input
            type="text"
            pattern="[0-9]*"
            value={amount}
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
      <button className={style.remove_btn}><FaTrashAlt/></button>
    </div>
  )
}

export default function Cart() {
  return (
    <div className={style.overlay}>
      <div className={style.cart}>
        <h1>Cart</h1>
        <button className={style.close_btn}><IoMdClose/></button>
        <div className={style.items}>
          <Item/>
          <div className={style.price_box}>
            <button className={style.checkout_btn}><IoBagCheckOutline/>Checkout</button>
            <p className={style.total}>200 USD</p>
          </div>
        </div>
      </div>
    </div>
  )
}
