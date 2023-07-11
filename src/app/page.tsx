'use client';

import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { LoadingOutlined } from '@ant-design/icons';
import { Result } from 'antd';

import styles from './page.module.scss';

const WelcomePage = (): JSX.Element | null => {
    const router = useRouter();
    const [redirect, setRedirect] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setRedirect(true);
        }, 3000);

        if (redirect) {
            router.push('/pages/dashboard');
        }
    }, [redirect]);

    return (
        <main className={styles.main}>
            <Result
                icon={<LoadingOutlined spin />}
                style={{margin: '15% 0'}}
                title="Welcome to BlockVote | Admin"
                subTitle="Taking you to the Dashboard..."
            />
        </main>
    );
};

export default WelcomePage;
