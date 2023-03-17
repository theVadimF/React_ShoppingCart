// eslint-disable-next-line @typescript-eslint/no-unused-vars
import 'normalize.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from './components/Gallery';
import gallery_data from '../assets/gallery_img';
import style from './app.module.scss';
import Header from './components/Header';

export function App() {
  // return (
  //   <div className={style.main}>
  //     <Header/>
  //     <Gallery
  //       images={gallery_data}
  //     />
  //   </div>
  // );

  return (
    <BrowserRouter>
      <div className={style.main}>
        <Header/>
        <Routes>
            <Route path="/" element={<Gallery images={gallery_data} />} />
            <Route path="/shop" element={<Gallery images={gallery_data} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
