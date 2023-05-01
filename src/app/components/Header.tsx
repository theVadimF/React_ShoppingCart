import style from '../styles/header.module.scss'

import { useLocation } from 'react-router-dom';

import { FaShoppingCart } from 'react-icons/fa'
import logo from '../../assets/rpi_logo.png'

interface headerProps {
  toggleCart(): void,
}

export default function Header({ toggleCart }: headerProps) {
  const location = useLocation();

  return (
    <div className={style.header}>
      <div className={style.header_top}>
        <div className={style.logo}>
          <div className={style.img_container}>
            <img src={logo} alt="" className={style.logo_img}/>
          </div>
          <span>Scalped Pies</span>
        </div>
        <button className={style.cart_btn} onClick={toggleCart}><FaShoppingCart/></button>
      </div>
      <nav className={style.navbar}>
        <a href="/" className={location.pathname === '/' ? style.active_link : ""}>Home</a>
        <a href="/shop" className={location.pathname === '/shop' ? style.active_link : ""}>Shop</a>
      </nav>
    </div>
  )
}