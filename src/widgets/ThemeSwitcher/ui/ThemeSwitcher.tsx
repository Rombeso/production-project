import {classNames} from "shared/lib/classNames";
import cls from './ThemeSwitcher.module.scss'
import {Theme, useTheme} from "app/providers/ThemeProvider";
import {ButtonHTMLAttributes} from "react";
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import {Button, ThemeButton} from "shared/ui/Button/Button";


interface ThemeSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {className} = props;
    const {theme, toggleTheme} = useTheme()

    return (
        <Button theme={ThemeButton.CLEAR} onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
            {theme === Theme.DARK ? <DarkIcon color={'white'}/> : <LightIcon/>}
        </Button>
    )
}