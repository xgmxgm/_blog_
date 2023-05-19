import { WelcomePage } from "@/pages/Welcome/index"
import { PortfolioPage } from "@/pages/Portfolio/index"
import { BlogPage } from "@/pages/Blog"
import { NotFoundPage } from "@/pages/NotFound/index"
import { AboutMePage } from "@/pages/AboutMe/index"
import { ProjectId } from "@/pages/ProjectId"

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
        path: '/Portfolio/:id',
        element: <ProjectId />,
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