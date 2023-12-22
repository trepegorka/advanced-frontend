import React, {Suspense} from 'react';
import {Counter} from "./components/Counter";
import './index.scss'
import {Routes, Route, Link} from 'react-router-dom'
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";

const App = () => {
    return (
        <div className="app">
            <Link to={'/main'}>main</Link>
            <Link to={'/about'}>about</Link>
            <Suspense>
                <Routes>
                    <Route path={'/main'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
            <Counter />
        </div>
    );
};

export default App;