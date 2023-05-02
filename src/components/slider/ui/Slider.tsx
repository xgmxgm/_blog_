import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import { motion } from 'framer-motion'
import { FC } from 'react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-cards";

import test from "../../../../public/img/test.jpg"
import "./slider.scss"

export const Slider: FC = () => {

    const pVariants = {
        hidden: {
            x: 200,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        }
    }

    return (
        <motion.div
        initial = {"hidden"}
        animate = {"visible"}
        variants={pVariants}
        >
            <Swiper
                modules={[ EffectCards]}
                effect='cards'
                spaceBetween={0}
                slidesPerView={1}
            >
                <SwiperSlide className='Swiper__Card'><img src={test}/></SwiperSlide>
                <SwiperSlide className='Swiper__Card'><img src={test}/></SwiperSlide>
                <SwiperSlide className='Swiper__Card'><img src={test}/></SwiperSlide>
                <SwiperSlide className='Swiper__Card'><img src={test}/></SwiperSlide>
                <SwiperSlide className='Swiper__Card'><img src={test}/></SwiperSlide>
            </Swiper>
        </motion.div>
    )
}