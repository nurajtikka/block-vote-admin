import React from 'react';

import clsx from 'clsx';

import style from './Button.module.scss';

type TProps = {
    children: JSX.Element | string;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => void;
    active?: boolean;
};

const Button = ({ active = false, children, disabled, onClick }: TProps): JSX.Element => (
    <button type="button" onClick={onClick} disabled={disabled} className={clsx(style.button, active && style.active)}>
        {children}
    </button>
);

export default Button;
