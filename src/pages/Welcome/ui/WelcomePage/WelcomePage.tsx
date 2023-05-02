import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"

import "./Welcome.scss"
import { FC } from "react"
import { Header } from "@/components/header"

export const WelcomePage: FC = () => {

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
        <div className = "body__Welcome">
            <Header/>
            <motion.div
                initial = 'hidden'
                animate = 'visible'
                variants = { pVariants }
            >
                <div className=' flex justify-center'>
                    <div className='flex-col text-center'>
                        <h2 className='text-5xl my-24'>{t("Main.Welcome.title")}</h2>
                        <div>
                            <p className='text-4xl max-w-test'>{t("Main.Welcome.info")}</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}