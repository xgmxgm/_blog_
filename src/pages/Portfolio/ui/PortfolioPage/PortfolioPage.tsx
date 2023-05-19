import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion'
import { FC } from 'react';

import "./ProfolioPage.scss"
import { Header } from '@/components/header';
import { Projects } from '@/components/my_projects';

export const PortfolioPage: FC = () => {

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
        <div className = 'body__Profolio'>
            <Header/>
            <motion.div
                initial = {"hidden"}
                animate = {"visible"}
                variants = {pVariants}
            >
                <div className='Portfolio__Projects'>
                    <Projects />
                </div>
            </motion.div>
        </div>
    )
}