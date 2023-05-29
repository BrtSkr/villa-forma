import React, { MutableRefObject, RefObject } from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/photoswipe.css';
import 'photoswipe/style.css'
import img1 from '../../assets/img/gallery/gallery_1.webp';
import img2 from '../../assets/img/gallery/gallery_2.webp';
import img3 from '../../assets/img/gallery/gallery_3.webp';
import img4 from '../../assets/img/gallery/gallery_4.webp';
import img5 from '../../assets/img/gallery/gallery_5.webp';
import img6 from '../../assets/img/gallery/gallery_6.webp';
import './Gallery.scss';

const GalleryComponent: React.FC = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="section section_galleryComponent swiper-slide">
      <div id="my-gallery" className="section_gallery__container">
        <Gallery>
          {images.map((img: string, index: number) => (
            <Item
              key={index}
              original={img}
              width="800"
              height="400"
            >
              {({ ref, open }) => (
                <img
                  className={"section_gallery__container___img"}
                  ref={ref as RefObject<HTMLImageElement> | MutableRefObject<HTMLImageElement>}
                  onClick={open}
                  src={img}
                  alt="house"
                />
              )}
            </Item>
          ))}
        </Gallery>
      </div>
    </section>
  );
};

export default GalleryComponent;
