import React from 'react';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>

        <div className={cls.links}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to="/"
                className={cls.mainLinks}
            >
                Главная
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">О проекте</AppLink>
        </div>
    </div>
);
