import { FC } from "react"
import { useTranslation } from "react-i18next"

import "./Projects.scss"
import  { Project_card }  from "@/components/project/ui/Project_card"

import speede from "../../../../public/img/logo_spedee.webp"
import type from "../../../../public/img/TYPEING.webp"
import GenPass from "../../../../public/img/GenPass.webp"

export const Projects: FC = () => {
    const { t } = useTranslation();

    return (
        <div className="body__Projects">
            <div className="Projects__Table">
                <Project_card id={1} img={speede} title="SPEDEE" info={t("Main.Portfolio.projects.project_1.info")} />
                <Project_card id={2} img={type} title="TYPEING" info={t("Main.Portfolio.projects.project_2.info")} />
                <Project_card id={3} img={GenPass} title="GenPass" info={t("Main.Portfolio.projects.project_3.info")} />
            </div>
        </div>
    )
}