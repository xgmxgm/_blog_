import { type FC } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { routes } from "./components/react-router-dom/index";
import { ThemeProvider } from "./provider/ThemeProvider";
import Layout from "./components/Layout";
import { Scroll } from "./components/scroll/index"

export const App: FC = () => {

  return (
    <div className="app">
      <ThemeProvider>
        <Layout>
          <BrowserRouter>
            <Scroll />
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key = {index} 
                  path = {route.path}
                  element = {route.element}
                />
              ))}
            </Routes>
          </BrowserRouter>
        </Layout>
      </ThemeProvider>
    </div>
  )
}