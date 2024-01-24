import { FC } from "react"
import { useTranslation } from "react-i18next"

import "./Projects.scss"
import  { Project_card }  from "@/components/project/ui/Project_card"

import speede from "../../../../public/img/logo_spedee.webp"
import type from "../../../../public/img/TYPEING.webp"
import GenPass from "../../../../public/img/GenPass.webp"
import Conveter from "../../../../public/img/Converter.webp"
import AgeCalculator from "../../../../public/img/Age_calculatro_app_logo.webp"
import DevFinder from "../../../../public/img/devFinder.webp"
import AdviceGenerator from '../../../../public/img/Advice_Logo.webp'
import DictionaryWeb from '../../../../public/img/dictionary_app.webp'
import BMI from "../../../../public/img/BMI.webp"

export const Projects: FC = () => {
    const { t } = useTranslation();

    return (
        <div className="body__Projects">
            <div className="Projects__Table">
                <Project_card id={1} img={speede} title="SPEDEE" info={t("Main.Portfolio.projects.project_1.info")} />
                <Project_card id={2} img={type} title="TYPEING" info={t("Main.Portfolio.projects.project_2.info")} />
                <Project_card id={3} img={GenPass} title="GenPass" info={t("Main.Portfolio.projects.project_3.info")} />
                <Project_card id={4} img={Conveter} title="CONVERTER" info={t("Main.Portfolio.projects.project_4.info")} />
                <Project_card id={5} img={AgeCalculator} title="AgeCalculator" info={t("Main.Portfolio.projects.project_5.info")} />
                <Project_card id={6} img={DevFinder} title="DevFinder" info={t("Main.Portfolio.projects.project_6.info")} />
                <Project_card id={7} img={AdviceGenerator} title="AdviceGenerator" info={t("Main.Portfolio.projects.project_7.info")} />
                <Project_card id={8} img={DictionaryWeb} title="DictionaryWeb" info={t("Main.Portfolio.projects.project_8.info")} />
                <Project_card id={9} img={BMI} title="BMI" info={t("Main.Portfolio.projects.project_9.info")} />
            </div>
        </div>
    )
}