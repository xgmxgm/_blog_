import Header from "./components/header/Header";
import { ThemeProvider } from "./provider/ThemeProvider";
import Lavout from "./components/Lavout";
import { Routes, Route } from 'react-router-dom';

// pages

import WelcomePage from './pages/WelcomePage/WelcomePage';
import BlogPage from './pages/BlogPage/BlogPage';
import AboutMePage from './pages/AboutMePage/AboutMePage';
import ProflioPage from './pages/PorfolioPage/ProfolioPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="app">
      <ThemeProvider>
        <Lavout>
        <Header/>
          <Routes>
            <Route path="/" element={<WelcomePage/>} />
            <Route path="/Blog" element={<BlogPage/>} />
            <Route path="/AboutMe" element={<AboutMePage/>} />
            <Route path="/Portfolio" element={<ProflioPage/>} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </Lavout>
      </ThemeProvider>
    </div>
  )
}

export default App