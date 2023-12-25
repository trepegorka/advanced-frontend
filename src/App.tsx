import React, {Suspense, useState, useContext} from 'react';
import {Counter} from "./components/Counter";
import './styles/index.scss'
import {Routes, Route, Link} from 'react-router-dom'
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";


const App = () => {

    const {theme, changeTheme} = useTheme()
    return (
        <div className={`app ${theme}`}>
            <button onClick={changeTheme}>setTheme</button>
            <br/>
            <Link to={'/main'}>main</Link>
            <Link to={'/about'}>about</Link>
            <Suspense>
                <Routes>
                    <Route path={'/main'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
            <br/>
            <Counter/>
        </div>
    );
};

export default App;