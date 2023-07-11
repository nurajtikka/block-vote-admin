'use client';

import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic, Progress, Space } from 'antd';
import VerticalBarChart from '../../../components/VerticalBarChart';
import TableComponent from '../../../components/TableComponent';

const Dashboard = (): JSX.Element | null => {
    const a = [
        {
            _id: '64a6d9f174bd94b8fdff77f4',
            acronym: 'SLPP',
            name: 'Sri Lanka Podujana Peramuna',
            votes: 71,
        },
        {
            _id: '64a6d9f174bd94b8fdff77f6',
            acronym: 'SJB',
            name: 'Samagi Jana Balawegaya',
            votes: 25,
        },
        {
            _id: '64a6d9f174bd94b8fdff77f5',
            acronym: 'UNP',
            name: 'United National Party',
            votes: 23,
        },
        {
            _id: '64a6d9f174bd94b8fdff77f7',
            acronym: 'NPP',
            name: "National People's Power",
            votes: 15,
        },
    ];

    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Card bordered={true} title="Leading Parties (Voting Percentage %)">
                <Row gutter={16}>
                    <Col span={6}>
                        <Card bordered={false}>
                            <Statistic
                                title="SLPP"
                                value={11.28}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<ArrowUpOutlined />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card bordered={false}>
                            <Statistic
                                title="UNP"
                                value={11.28}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<ArrowUpOutlined />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card bordered={false}>
                            <Statistic
                                title="SJB"
                                value={9.3}
                                precision={2}
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<ArrowDownOutlined />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card bordered={false}>
                            <Statistic
                                title="NPP"
                                value={9.3}
                                precision={2}
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<ArrowDownOutlined />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                </Row>
            </Card>
            <Card bordered={true} title="Casted / Pending Votes">
                <Row gutter={16}>
                    <Progress percent={50} strokeColor={'#52c41a'} size={['100%', 25]} />
                    <Progress percent={70} strokeColor={'#ff4d4f'} status="active" size={['100%', 25]} />
                </Row>
            </Card>
            <Card bordered={true} title="District Level Vote Count">
                <Row gutter={16}>
                    <VerticalBarChart />
                </Row>
            </Card>
            <Card bordered={true} title="District Level Vote Count">
                <Row gutter={16}>
                    <Col span={24}>
                        <TableComponent />
                    </Col>
                </Row>
            </Card>
        </Space>
    );
};

export default Dashboard;
