import { useState, SetStateAction } from "react"
import style from '../styles/header.module.scss'

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { FaShoppingCart } from 'react-icons/fa'
import logo from '../../assets/rpi_logo.png'

export default function Header() {
  const location = useLocation();
  useEffect(() => {
    console.log('New path:', location.pathname);
  }, [location.pathname]);

  return (
    <div className={style.header}>
      <div className={style.header_top}>
        <div className={style.logo}>
          <div className={style.img_container}>
            <img src={logo} alt="" className={style.logo_img}/>
          </div>
          <span>Scalped Pies</span>
        </div>
        <button className={style.cart_btn}><FaShoppingCart/></button>
      </div>
      <nav className={style.navbar}>
        <a href="/" className={location.pathname === '/' ? style.active_link : ""}>Home</a>
        <a href="/shop" className={location.pathname === '/shop' ? style.active_link : ""}>Shop</a>
      </nav>
    </div>
  )
}