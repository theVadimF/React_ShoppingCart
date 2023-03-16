import { useState, SetStateAction } from "react"
import style from '../styles/gallery.module.scss'
import _ from 'lodash'
import {FaAngleLeft, FaAngleRight, FaRegCircle, FaCircle} from 'react-icons/fa'

let currentImg = 0;


function NavBar({setImg, prevImg, nextImg, img_max}: any) {
  return (
    <div className={style.nav_bar}>
    {_.range(img_max).map((i) => {
      if (i == currentImg) {
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

export default function Gallery({images}: any) {
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

  return (
    <div className={style.gallery_wrapper}>
      <div className={style.images} style={imgPos}>
        {images.map((img: string, id) => (
          <div className={style.img_wrapper} key={id}>
            <img alt="promo background" src={img.img}/>
            <div className={style.img_overlay}>
              <div className={style.img_text}>
                <h1>{img.heading}</h1>
                <p>{img.text}</p>
                {/* TODO(vf) Route to store */}
                <button onClick={() => setCurrentImg(1)}>Shop Now</button>
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