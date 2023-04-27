import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion'

import "./BlogPage.scss"

function BlogPage() {

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
        <motion.div
            className='body__Blog'
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
    )
}

export default BlogPage