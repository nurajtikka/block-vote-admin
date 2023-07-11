'use client';

import React, { useState } from 'react';
import '../styles/globals.scss';
import { useRouter } from 'next/navigation';

import { AreaChartOutlined, DatabaseOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Typography } from 'antd';
import type { MenuProps } from 'antd';
import Image from 'next/image';
import { ProvideDashboardContext } from './contexts/DashboardContext';
import { ProvideCampaignDataContext } from './contexts/CampaignDataContext';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [current, setCurrent] = useState<string>('dashboard');

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
        router.push(`/pages/${e.key}`);
    };

    return (
        <html lang="en">
            <body>
                <ProvideDashboardContext>
                    <ProvideCampaignDataContext>
                        <Layout>
                            <Sider collapsed={false}>
                                <div className="demo-logo-vertical">
                                    <Image src="/admin-logo.png" alt="Block Vote Admin Logo" width={195} height={95} />
                                </div>
                                <Menu
                                    theme="dark"
                                    mode="inline"
                                    onClick={onClick}
                                    defaultSelectedKeys={['dashboard']}
                                    selectedKeys={[current]}
                                    items={[
                                        {
                                            key: 'dashboard',
                                            icon: <AreaChartOutlined />,
                                            label: 'Dashboard',
                                        },
                                        {
                                            key: 'campaignData',
                                            icon: <DatabaseOutlined />,
                                            label: 'Campaign Data',
                                        },
                                    ]}
                                />
                            </Sider>
                            <Layout>
                                <Header style={{ padding: '0 15px', background: colorBgContainer }}>
                                    <Title level={2} style={{ color: 'gray' }}>
                                        {current === 'dashboard' ? 'Dashboard' : 'Campaign Data'}
                                    </Title>
                                </Header>
                                <Content
                                    style={{
                                        margin: '24px 16px',
                                        minHeight: 280,
                                        background: '#f7f7fa',
                                    }}
                                >
                                    {children}
                                </Content>
                            </Layout>
                        </Layout>
                    </ProvideCampaignDataContext>
                </ProvideDashboardContext>
            </body>
        </html>
    );
}
