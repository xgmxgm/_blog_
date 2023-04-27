import { useState } from "react"
import useTheme from "../../hooks/useTheme"
import { useTranslation } from "react-i18next"
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import "./Header.scss"
import "../../assets/animation.scss"

function Header() {
    const {isDark, setIsDark} = useTheme()

    const [nav, setNav] = useState(false)

    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <div>
            <div className="header__main">
                
                <Link to="/AboutMe"><h1>XGM</h1></Link>
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

export default Header