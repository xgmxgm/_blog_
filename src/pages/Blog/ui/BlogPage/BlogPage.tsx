import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FC } from 'react';

import "./BlogPage.scss";
import { Header } from '@/components/header';

export const BlogPage: FC = () => {

    const pVariants = {
        hidden: {
            y: 200,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    const { t } = useTranslation();

    return (
        <div className='body__Blog'>
            <Header/>
            <div>
                <motion.div
                    initial = {"hidden"}
                    animate = {"visible"}
                    variants={pVariants}
                >
                    <div className=' text-center'>
                        <div className=' flex justify-center'>
                            <h2>{t("Main.Blog.title")}</h2>
                        </div>
                        <div className='content mt-24'>
                            <p className=' text-5xl mb-3'>{t("Main.Blog.info_title")}</p>
                            <p className=' text-3xl text-bg_color'>{t("Main.Blog.info")}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}