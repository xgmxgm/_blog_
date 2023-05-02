import { FC } from "react"

import "./NotFoundPage.scss"
import { Header } from "@/components/header"

export const NotFoundPage: FC = () => {
    return (
        <div className="body__NotFound">
            <Header/>
            <div>
                <div className=' flex justify-center text-5xl'>
                    <h1>NOT FOUND</h1>
                </div>
            </div>
        </div>
    )
}