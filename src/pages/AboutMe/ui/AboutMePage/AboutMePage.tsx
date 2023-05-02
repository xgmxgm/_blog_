import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion'
import { FC } from 'react';

import "./AboutMePage.scss"
import { Slider } from '@/components/slider/index';
import { MusicPlayer } from '@/components/musicPlayer/index';
import { MyKnowIT } from '@/components/myKnowIT/index';
import { Header } from '@/components/header';

export const AboutMePage: FC = () => {

    const pVariants = {
        hidden: {
            x: -100,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        }
    }

    const { t } = useTranslation();

    return (
        <div className='body__AboutMe'>
            <Header/>
            <div className=' flex flex-col items-center'>
                <h2 className='mb-my_55'>
                    {t("Main.AboutMe.title")}
                </h2>
                <motion.div
                    className='About_me_div'
                    initial = {"hidden"}
                    animate = {"visible"}
                    variants={pVariants}
                >
                    <div className='About_me_text text-center max-w-my_719'>
                        <h3 className='text-4xl'>{t("Main.AboutMe.about_me_name")}</h3>
                        <p className='text-3xl'>{t("Main.AboutMe.about_me_info")}</p>
                    </div>
                    <div className='About_me_photo flex justify-center'>
                        <Slider />
                    </div>
                </motion.div>
                <div className='MusicPlayer flex flex-col items-center'>
                    <div className='MusicPlayer__title'>
                        <h2>{t("Main.AboutMe.music_player.title")}</h2>
                    </div>
                    <div className='MusicPlayer__app'>
                        <MusicPlayer />
                    </div>
                    <div className='MyKnowIT'>
                        <MyKnowIT />
                    </div>
                </div>
            </div>
        </div>
    )
}