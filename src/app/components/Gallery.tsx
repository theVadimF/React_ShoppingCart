import { useState, useEffect } from "react"
import style from '../styles/gallery.module.scss'
import _ from 'lodash'
import {FaAngleLeft, FaAngleRight, FaRegCircle, FaCircle} from 'react-icons/fa'
import { galleryProps } from "src/assets/gallery_img"
let currentImg = 0;

interface navBarProps {
  setImg(i: number): void,
  prevImg(): void,
  nextImg(): void,
  img_max: number,
}

function NavBar({setImg, prevImg, nextImg, img_max}: navBarProps) {
  return (
    <div className={style.nav_bar}>
    {_.range(img_max).map((i) => {
      if (i === currentImg) {
        return <button key={i} onClick={() => setImg(i)} className={style.nav_btn}><FaCircle/></button>
      } else {
        return <button key={i} onClick={() => setImg(i)} className={style.nav_btn}><FaRegCircle/></button>
      }
    })}
    <div className={style.v_line}></div>
    <button onClick={() => prevImg()} className={style.nav_btn}><FaAngleLeft/></button>
    <button onClick={() => nextImg()} className={style.nav_btn}><FaAngleRight/></button>
    </div>
  )
}

interface galleryInterface {
  images: galleryProps[]
}

export default function Gallery({images}: galleryInterface) {
  const [imgPos, setImgPos] = useState({transform: 'translate(0vw)'})

  const img_max = images.length;

  function setImg(id: number) {
    currentImg = id;
    setImgPos({transform: `translate(${id * -100}vw)`})
  }

  function nextImg() {
    if (currentImg + 1 < img_max) {
      ++currentImg;
    } else {
      currentImg = 0;
    }
    setImg(currentImg);
  }

  function prevImg() {
    if (currentImg - 1 >= 0) {
      --currentImg;
    } else {
      currentImg = img_max - 1;
    }
    setImg(currentImg);
  }

  useEffect(() => {
    const timer = setInterval(nextImg, 5000);
    return () => clearInterval(timer);
  })

  return (
    <div className={style.gallery_wrapper}>
      <div className={style.images} style={imgPos}>
        {images.map((img: galleryProps, id: number) => (
          <div className={style.img_wrapper} key={id}>
            <img alt="promo background" src={img.img} className={style.bg}/>
            <div className={style.img_overlay}>
              <div className={style.img_text}>
                <h1>{img.heading}</h1>
                <p>{img.text}</p>
                <a href="/shop" className={style.shop_btn}>Shop Now!</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <NavBar
        setImg = {setImg}
        prevImg = {prevImg}
        nextImg = {nextImg}
        img_max = {img_max}
      />
    </div>
  )
}
