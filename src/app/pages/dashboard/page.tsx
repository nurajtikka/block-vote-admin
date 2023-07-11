'use client';

import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic, Progress, Space, Select, Table, Empty, Divider } from 'antd';
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
    const onSelectChange = (value: string): void => {
        setSelectedDistrict(value);
    };
    const getPercentage = (part: number, whole: number): number => Number(((part / whole) * 100).toFixed(2));
    const voteCount = {
        validVotes: utilizedVotes?.votes.find((element) => element._id.voted === true),
        staleVotes: utilizedVotes?.votes.find((element) => element._id.voted === false),
    };

    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Card bordered={true} title="Voting Percentage (%)">
                <Row gutter={16}>
                    {!!partyVotesList &&
                        partyVotesList.counts?.map((party) => {
                            const votingPercentage = getPercentage(
                                party.votes,
                                Number(voteCount.validVotes?.count || 1),
                            );
                            const votingStyles = {
                                color: votingPercentage >= 40 ? '#3f8600' : '#cf1322',
                                prefix: votingPercentage >= 40 ? <ArrowUpOutlined /> : <ArrowDownOutlined />,
                            };
                            return (
                                <Col span={6} key={party._id}>
                                    <Card bordered={false}>
                                        <Statistic
                                            title={party.acronym}
                                            value={votingPercentage}
                                            precision={2}
                                            valueStyle={{ color: votingStyles.color }}
                                            prefix={votingStyles.prefix}
                                            suffix="%"
                                        />
                                    </Card>
                                </Col>
                            );
                        })}
                </Row>
            </Card>
            <Card bordered={true} title="Voting Criteria">
                <Row gutter={16}>
                    <Divider orientation="left" plain>
                        <b>Valid Votes</b>
                    </Divider>
                    <Progress
                        percent={getPercentage(
                            voteCount.validVotes?.count || 1,
                            (voteCount.validVotes?.count || 1) + (voteCount.staleVotes?.count || 1),
                        )}
                        strokeColor={'#52c41a'}
                        size={['99%', 25]}
                    />
                    <Divider orientation="left" plain>
                        <b>Stale Votes</b>
                    </Divider>
                    <Progress
                        percent={getPercentage(
                            voteCount.staleVotes?.count || 1,
                            (voteCount.validVotes?.count || 1) + (voteCount.staleVotes?.count || 1),
                        )}
                        strokeColor={'#ff4d4f'}
                        status="active"
                        size={['99%', 25]}
                    />
                </Row>
            </Card>
            <Card
                bordered={true}
                title={
                    <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
                        District Wise Vote Count
                        <Select
                            placeholder="Filter By District"
                            optionFilterProp="children"
                            style={{ width: 150 }}
                            defaultValue="colombo"
                            value={selectedDistrict || 'colombo'}
                            onChange={onSelectChange}
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
            <Card bordered={true} title="Voting Catalog Information">
                <Row gutter={16}>
                    <Col span={24}>
                        <Table
                            loading={isLoading}
                            columns={tableConfig.votes as any}
                            dataSource={votesList?.votes || []}
                            bordered
                            size="large"
                            footer={() => '*These data might subjected to change.'}
                        />
                    </Col>
                </Row>
            </Card>
        </Space>
    );
};

export default Dashboard;
