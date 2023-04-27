import { EffectCards } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import { motion } from 'framer-motion'

// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-cards";

import "../../../public/img/test.jpg"
import "./slider.scss"

function Slider() {

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
                <SwiperSlide className='Swiper__Card'><img src="img/test.jpg"/></SwiperSlide>
                <SwiperSlide className='Swiper__Card'><img src="img/test.jpg"/></SwiperSlide>
                <SwiperSlide className='Swiper__Card'><img src="img/test.jpg"/></SwiperSlide>
                <SwiperSlide className='Swiper__Card'><img src="img/test.jpg"/></SwiperSlide>
                <SwiperSlide className='Swiper__Card'><img src="img/test.jpg"/></SwiperSlide>
            </Swiper>
        </motion.div>
    )
}

export default Slider