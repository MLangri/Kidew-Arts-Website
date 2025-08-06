import React from 'react'
import './services.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Importing images for services
import babyShower from '../../assets/Baby_Shower_Ideas_Fawn_Design.webp'
import birthdays from '../../assets/Birthdays.jpg'
import teamBuilding from '../../assets/Team-Building-Activities7.jpg'
import corporateEvents from '../../assets/networking.png'
import bridalShower from '../../assets/bridal-shower-party.jpg'

const Services = () => {
    const services = [
    { img: babyShower, alt: 'Baby Shower' },
    { img: birthdays, alt: 'Birthdays' },
    { img: teamBuilding, alt: 'Team Building' },
    { img: corporateEvents, alt: 'Corporate Events' },
    { img: bridalShower, alt: 'Bridal Shower' },
  ];

  return (
    <div className='services'>
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
            {services.map((service, index) => (
                <SwiperSlide key={index}>
                    <div className='service-card'>
                        <img src={service.img} alt={service.alt} />
                        <p>{service.alt}</p>
                    </div>
                </SwiperSlide>
            ))}
        
        </Swiper>
    
    </div>
  )
}

export default Services