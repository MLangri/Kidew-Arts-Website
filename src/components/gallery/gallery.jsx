import React from 'react'
import './gallery.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import img1 from '../../assets/gallery1.jpeg.webp';
import img2 from '../../assets/gallery2.jpg';
import img3 from '../../assets/gallery3.jpg';
import img4 from '../../assets/gallery4.jpg';
import img5 from '../../assets/gallery5.jpg';
import img6 from '../../assets/gallery6.jpg';
import rightArrow from '../../assets/rightarrow.png';

const gallery = () => {
  const gallery = [
      { img: img1, alt: '' },
      { img: img2, alt: '' },
      { img: img3, alt: '' },
      { img: img4, alt: '' },
      { img: img5, alt: '' },
      { img: img6, alt: '' },
    ];

return (
    <div className='gallery'>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: {
          slidesPerView: 1,
        },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {gallery.map((gallery, index) => (
          <SwiperSlide key={index}>
            <div className='gallery-card'>
              <img src={gallery.img} alt={gallery.alt} />
              <p>{gallery.alt}</p>
            </div>
            </SwiperSlide>
  ))}
      </Swiper>
      <button className='btn'>More Images <img src={rightArrow} alt=""/></button>
    </div>
  )
}

export default gallery