import {classNames} from "shared/lib/classNames";
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton.CLEAR;
}

export const Button: FC<ButtonProps> = (props) => {
    const {className, children, theme = ThemeButton.CLEAR, ...otherProps} = props;
    return (
        <button className={classNames(cls.Button, {}, [className, cls[theme]])}
                {...otherProps}
        >
            {children}
        </button>
    );
};