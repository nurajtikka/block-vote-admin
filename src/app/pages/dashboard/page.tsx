'use client';

import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic, Progress, Space, Select, Table, Empty } from 'antd';
import VerticalBarChart from '../../../components/VerticalBarChart';
import DoughnutChart from '../../../components/DoughnutChart';
import selectConfig from '../../config/select.config';
import tableConfig from '../../config/table.config';
import useDashboardContext from '../../contexts/DashboardContext';

const Dashboard = (): JSX.Element | null => {
    const {
        isLoading,
        selectedDistrict,
        partyVotesList,
        utilizedVotes,
        votesList,
        districtWiseVotes,
        setSelectedDistrict,
    } = useDashboardContext();

    const onChange = (value: string) => {
        setSelectedDistrict(value);
    };

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
            <Card
                bordered={true}
                title={
                    <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
                        District Wise Election Results
                        <Select
                            placeholder="Filter By District"
                            optionFilterProp="children"
                            style={{ width: 150 }}
                            defaultValue="colombo"
                            onChange={onChange}
                            options={selectConfig.district}
                        />
                    </Space>
                }
            >
                {!!districtWiseVotes ? (
                    <Row gutter={16}>
                        <Col span={16}>
                            <VerticalBarChart />
                        </Col>
                        <Col span={8}>
                            <DoughnutChart />
                        </Col>
                    </Row>
                ) : (
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                )}
            </Card>
            <Card bordered={true} title="Voting Catalog Data">
                <Row gutter={16}>
                    <Col span={24}>
                        <Table
                            loading={isLoading}
                            columns={tableConfig.votes as any}
                            dataSource={votesList?.votes || []}
                            bordered
                            size="large"
                            footer={() => '*These data are subjected to change.'}
                        />
                    </Col>
                </Row>
            </Card>
        </Space>
    );
};

export default Dashboard;
