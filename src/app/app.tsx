// eslint-disable-next-line @typescript-eslint/no-unused-vars
import 'normalize.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, SetStateAction } from "react"
import Gallery from './components/Gallery';
import gallery_data from '../assets/gallery_img';
import style from './app.module.scss';
import Header from './components/Header';
import Shop from './components/Shop';
import Cart from './components/Cart';

// TODO(vf) Remove all any types
export function App() {
  const [cartStare, setCartState] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartAmounts, setCartAmounts] = useState([]);


  function toggleCart() {
    setCartState(e => !e);
  }

  function addToCart(data: any) {
    setCartItems(e => [
      ...e,
      data
    ])
    setCartAmounts(e => [
      ...e,
      1
    ])
  }

  function removeFromCart(data: any, id: number) {
    setCartItems(items => items.filter(e => e !== data));
    setCartAmounts(cartAmounts.filter((item, index) => id !== index));
  }

  return (
    <BrowserRouter>
      {cartStare &&
      <Cart
        toggleCart = {toggleCart}
        cartItems = {cartItems}
        cartAmounts = {cartAmounts}
        setCartAmounts = {setCartAmounts}
        removeFromCart = {removeFromCart}
      />}
      <div className={style.main}>
        <Header toggleCart={toggleCart}/>
        <Routes>
          <Route path="/" element={<Gallery images={gallery_data} />} />
          <Route path="/shop" element={
            <Shop
              cartItems = {cartItems}
              toggleCart = {toggleCart}
              addToCart = {addToCart}
            />
          } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
