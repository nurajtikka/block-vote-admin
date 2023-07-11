'use client';

import React from 'react';
import { Card, Row, Col, Space, Table } from 'antd';
import useCampaignDataContext from '../../contexts/CampaignDataContext';
import tableConfig from '../../config/table.config';

const CampaignData = (): JSX.Element | null => {
    const { isLoading, partiesList, candidatesList, votersList } = useCampaignDataContext();
    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Card bordered={true} title='Voter(s) Data of the Election'>
                <Row gutter={16}>
                    <Col span={24}>
                        <Table
                            loading={!isLoading}
                            columns={tableConfig.voters as any}
                            dataSource={votersList?.voters || []}
                            bordered
                            size="large"
                            footer={() => '*These data might subjected to change.'}
                        />
                    </Col>
                </Row>
            </Card>
            <Card bordered={true} title='Candidate(s) Data of the Election'>
                <Row gutter={16}>
                    <Col span={24}>
                        <Table
                            loading={!isLoading}
                            columns={tableConfig.candidates as any}
                            dataSource={candidatesList?.candidates || []}
                            bordered
                            size="large"
                            footer={() => '*These data might subjected to change.'}
                        />
                    </Col>
                </Row>
            </Card>
            <Card bordered={true} title='Party Data of the Election'>
                <Row gutter={16}>
                    <Col span={24}>
                        <Table
                            loading={!isLoading}
                            columns={tableConfig.parties as any}
                            dataSource={partiesList?.parties || []}
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

export default CampaignData;
