// eslint-disable-next-line @typescript-eslint/no-unused-vars
import 'normalize.css'
import Gallery from './components/Gallery';
import gallery_data from '../assets/gallery_img';
import style from './app.module.scss';

export function App() {
  return (
    <div className={style.test}>
      <Gallery
        images={gallery_data}
      />
    </div>
  );
}

export default App;
