"use client";
import React, { ReactNode, useState, useRef, createContext } from 'react';
import { Swiper} from 'swiper/react';
import "swiper/swiper-bundle.css";
import swiperCore from "swiper";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';

swiperCore.use([
    Autoplay, Navigation, Pagination, Scrollbar, A11y
]);

export default function SwiperContainer({children}: {children: ReactNode}) {
    return (
        <Swiper
            loop={true}
            spaceBetween={32}
            grabCursor={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            pagination={{
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            }}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }}
            breakpoints={{
                600: {
                    slidesPerView: 2
                },
                968: { 
                    slidesPerView: 3
                }
            }}
        >
            {children}
        </Swiper>
    )
}