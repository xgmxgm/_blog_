import { useTranslation } from "react-i18next"

import "./Welcome.scss"

function WelcomePage() {

    const { t } = useTranslation();

    return (
        <div className="body__Welcome">
            <div className=' flex justify-center'>
                <div className='flex-col text-center'>
                    <h2 className='text-5xl my-24'>{t("Main.Welcome.title")}</h2>
                    <div>
                        <p className='text-4xl max-w-test'>{t("Main.Welcome.info")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage