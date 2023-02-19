import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";


const App = () => {

const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О проекте</Link>
            <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
            </Routes>
            </Suspense>
        </div>
    );
};

export default App;