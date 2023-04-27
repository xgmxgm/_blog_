import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion'

import { EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-cards";

import "./MyKnowIT.scss"
import "../../../public/img/react.png"

function MyKnowIT() {

    const pVariants = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    const { t } = useTranslation();

    return (
        <motion.div
            className='body__MyKnowIT'
            initial = "hidden"
            whileInView = "visible"
            variants={pVariants}
        >
            <div className='MyKnowIT__title'>
                <h2>{t("Main.AboutMe.MyKnowIT.title")}</h2>
            </div>
            <div className='MyKnowIT__info'>
                <Swiper
                    modules={[ EffectCards]}
                    effect='cards'
                    spaceBetween={0}
                    slidesPerView={1}
                >
                    <SwiperSlide className='SwiperSlide'>
                        <div className='Swiper__Card__title'>
                            <h3>{t("Main.AboutMe.MyKnowIT.cards.card__one.title")}</h3>
                        </div>
                        <div className='Swiper__Card__info'>
                            <div className='Swiper__Card__info__tools'>
                                <h4>{t("Main.AboutMe.MyKnowIT.cards.card__one.tools")}</h4>
                            </div>
                            <div className='Swiper__Card__info__tools__name'>
                                <h4>{t("Main.AboutMe.MyKnowIT.cards.card__one.tools__name")}</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='SwiperSlide'>
                        <div className='Swiper__Card__title'>
                            <h3>{t("Main.AboutMe.MyKnowIT.cards.card__two.title")}</h3>
                        </div>
                        <div className='Swiper__Card__info'>
                            <div className="Swiper__Card__info__tools">
                                <h4>{t("Main.AboutMe.MyKnowIT.cards.card__two.tools")}</h4>
                            </div>
                            <div className="Swiper__Card__info__tools__name">
                                <h4>{t("Main.AboutMe.MyKnowIT.cards.card__two.tools__name")}</h4>
                            </div>
                            <div className="Swiper__Card__info__tools">
                                <h4>{t("Main.AboutMe.MyKnowIT.cards.card__two.structure")}</h4>
                            </div>
                            <div className="Swiper__Card__info__tools__name">
                                <h4>{t("Main.AboutMe.MyKnowIT.cards.card__two.structure__name")}</h4>
                            </div>
                            <div className="Swiper__Card__info__tools">
                                <h4>{t("Main.AboutMe.MyKnowIT.cards.card__two.stylization")}</h4>
                            </div>
                            <div className="Swiper__Card__info__tools__name">
                                <h4>{t("Main.AboutMe.MyKnowIT.cards.card__two.stylization__name")}</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='SwiperSlide'>
                        <div className='Swiper__Card__title'>
                            <h3>{t("Main.AboutMe.MyKnowIT.cards.card__three.title")}</h3>
                        </div>
                        <div className='Swiper__Card__info'>
                            <div className='Swiper__Card__info__tools'>
                                <h4>{t("Main.AboutMe.MyKnowIT.cards.card__one.tools")}</h4>
                            </div>
                            <div className='Swiper__Card__info__tools__name'>
                                <h4>{t("Main.AboutMe.MyKnowIT.cards.card__three.tools__name")}</h4>
                            </div>
                            <div className='Swiper__Card__info__tools'>
                                <h4>{t("Main.AboutMe.MyKnowIT.cards.card__two.tools")}</h4>
                            </div>
                            <div className='Swiper__Card__info__tools__name'>
                                <h4>{t("Main.AboutMe.MyKnowIT.cards.card__three.language")}</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </motion.div>
    )
}

export default MyKnowIT