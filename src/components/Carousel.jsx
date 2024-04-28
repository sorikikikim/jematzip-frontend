import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Carousel({ images }) {
    const getRandomImages = () => {
        const random = images.sort(() => 0.5 - Math.random());
        return random.slice(0, 3);
    };

    const randomImages = getRandomImages();

    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            initialSlide={0}
        >
            {randomImages.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={image} alt="이미지 뷰어" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
