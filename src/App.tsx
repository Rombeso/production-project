import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./Pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./Pages/MainPage/MainPage.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";


const App = () => {

const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О проекте</Link>
            <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
            </Routes>
            </Suspense>
        </div>
    );
};

export default App;