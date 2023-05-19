import { Header } from "@/components/header"
import { FC } from "react"
import { useTranslation } from "react-i18next"

import "./ProjectId.scss"

import { useParams } from "react-router-dom"

export const ProjectId: FC = () => {

    const params = useParams();    

    const { t, i18n } = useTranslation();

    const id = params.id

    const link = t(`Main.Portfolio.projects.project_${id}.github__link`)

    return (
        <div className="body__Project_id">
            <Header />
            <div className="Project_id__main">
                <h2>{t(`Main.Portfolio.projects.project_${id}.title`)}</h2>
                <p>{t(`Main.Portfolio.projects.project_${id}.info_more`)}</p>
                <div className="links">
                    <a href={link} target="_blank">{t(`Main.Portfolio.projects.project_${id}.github__link__name`)}</a>
                </div>
            </div>
        </div>
    )
}