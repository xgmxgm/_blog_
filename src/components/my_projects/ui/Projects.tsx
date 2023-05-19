import { FC } from "react"
import { useTranslation } from "react-i18next"

import "./Projects.scss"
import  { Project_card }  from "@/components/project/ui/Project_card"

export const Projects: FC = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="body__Projects">
            <div className="Projects__Table">
                <Project_card id={1} title="SPEDEE" info={t("Main.Portfolio.projects.project_1.info")} />
            </div>
        </div>
    )
}