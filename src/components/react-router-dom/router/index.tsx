import { WelcomePage } from "@/pages/Welcome/index"
import { PortfolioPage } from "@/pages/Portfolio/index"
import { BlogPage } from "@/pages/Blog"
import { NotFoundPage } from "@/pages/NotFound/index"
import { AboutMePage } from "@/pages/AboutMe/index"

export const routes = [
    {
        path: '/',
        element: <WelcomePage />
    },
    {
        path: '/Blog',
        element: <BlogPage/>,
    },
    {
        path: '/AboutMe',
        element: <AboutMePage/>,
    },
    {
        path: '/Portfolio',
        element: <PortfolioPage/>,
    },
    {
        path: '*',
        element: <NotFoundPage/>,
    },
]