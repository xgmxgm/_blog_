import { FC, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import "./Header.scss"
import { useTheme } from "@/hooks/useTheme/index"
import "@/assets/animation.scss"

export const Header: FC = () => {
    const {isDark, setIsDark} = useTheme()

    const [nav, setNav] = useState(false)

    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    const router = useNavigate()

    return (
        <div>
            <div className="header__main">
                <h6
                    onClick={() => router("/AboutMe")}
                    style={{"cursor": "pointer"}}
                >
                    XGM
                </h6>
                <div>
                    <button onClick={() => setIsDark(!isDark)}>{t("Header.theme")}</button>
                    <button onClick={() => changeLanguage("en")}>EN</button>
                    <button onClick={() => changeLanguage("ru")}>RU</button>
                </div>
                <nav>
                    <li className = { nav ? 'menu active' : 'menu' } onClick={() => setNav(false)}>
                        <ul>
                            <Link className="Link" to="/Blog">
                                {t("Header.Links.link_one")}
                                <div className="header__bottom__line"></div>
                            </Link>
                        </ul>
                        <ul>
                            <Link className="Link" to="/AboutMe">
                                {t("Header.Links.link_two")}
                                <div className="header__bottom__line"></div>
                            </Link>
                        </ul>
                        <ul>
                            <Link className="Link" to="/Portfolio">
                                {t("Header.Links.link_three")}
                                <div className="header__bottom__line"></div>
                            </Link>
                        </ul>
                    </li>
                </nav>
                <div onClick={() => setNav(!nav)} className="burger_main">
                    {nav ? <AiOutlineClose size={35}/> : <AiOutlineMenu size={40}/>}
                </div>
            </div>
        </div>
    )
}