import React from 'react';

import clsx from 'clsx';

import style from './DividedText.module.scss';

type TProps = {
    text: JSX.Element | string;
};

const DividedText = ({ text }: TProps): JSX.Element => <div className={clsx(style.textContainer)}>{text}</div>;

export default DividedText;
