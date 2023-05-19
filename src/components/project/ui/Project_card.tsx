import { FC } from "react"
import { useNavigate } from "react-router-dom"

import "./Project_card.scss"

import spedee from "../../../../public/img/logo_spedee.webp"
interface IProps {
    title: string,
    info: string,
    id: number
}

export const Project_card: FC<IProps> = (props) => {
    const { title, info, id } = props
    const router = useNavigate()

    return (
            <div className="body__Project_card"
                onClick={() => router(`/Portfolio/${props.id}`)}
            >
                <div className="Project_card__img">
                    <img src={spedee} alt="" />
                </div>
                <div className="Project_card__text">
                        <h3>
                            {id}.{title}
                        </h3>
                    <p>
                        {info}
                    </p>
                </div>
            </div>
    )
}