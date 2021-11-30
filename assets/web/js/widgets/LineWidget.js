import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Card, Spin, Table, message, Typography } from 'antd';

import axios from 'axios';

import MfwNumber from '@app/mfw/MfwNumber';

class LineWidgets extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            errorCode: 0,
            debt: [],
            debtLands: [],
            loadLines: true,
            columns: [
                {
                    title: this.props.t('common.name'),
                    dataIndex: 'name'
                },
                {
                    title: () => {return <div className="text-align-end">{this.props.t('finance.sum')}</div>},
                    dataIndex: 'debt',
                    render: (text, record) => {
                        return <div className="text-align-end"><MfwNumber value={record.debt}/></div>
                    }
                }
            ],
            columnsLands: [
                {
                    title: this.props.t('land._'),
                    dataIndex: 'num'
                },
                {
                    title: () => {return <div className="text-align-end">{this.props.t('finance.sum')}</div>},
                    dataIndex: 'debt',
                    render: (text, record) => {
                        return <div className="text-align-end"><a href={generatePath(
                            window.mfwApp.urls.township.land.debt+'/:land_id/:type_id',
                            { 
                                line: record.id,
                                type_id: record.charge_type_id
                            }
                        )} target="_blank"><MfwNumber value={record.debt}/></a></div>
                    }
                }
            ]
        };
        this.debtSummary = this.debtSummary.bind(this);
        this.debtByLands = this.debtByLands.bind(this);
        this.debtLandData = this.debtLandData.bind(this);
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.township.line.debtData,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    loading: false,
                    debt: res.data.debt
                });
            } else {
                message.error(this.props.t(res.data.error));
                this.setState({
                    loading: false
                });
            }
        }).catch(error => {
            if (error.response) {
                this.setState({
                    loading: false,
                    errorCode: error.response.status
                });
            } else {
                message.error(error.toString());
                this.setState({
                    loading: false
                });
            }
        });
    }

    debtSummary() {
        var sumAmount = 0;
        this.state.debt.map((rec) => {
            sumAmount+= rec.debt*1;
        });
        return <Table.Summary fixed>
            <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={2} className="text-align-end">
                    <Typography.Text strong>{this.props.t('finance.summary')}</Typography.Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={1} className="text-align-end">
                    <Typography.Text strong>
                        <MfwNumber value={sumAmount}/>
                    </Typography.Text>
                </Table.Summary.Cell>
            </Table.Summary.Row>
        </Table.Summary>
    }

    debtByLands() {
        return <Table
            rowKey="line"
            size="small"
            columns={this.state.columnsLands}
            dataSource={this.state.debtLands}
            pagination={false}
            loading={this.state.loadLands}/>;
    }

    debtLandData(expanded, record) {
        if (expanded === false) {
            this.setState({
                loadLands: false,
                debtLands: []
            });
            return;
        }
        axios.get(
            window.mfwApp.urls.township.debtLandData+'/'+record.id,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    loadLines: false,
                    debtByLines: res.data.debt
                });
            } else {
                message.error(this.props.t(res.data.error));
                this.setState({
                    loadLines: false
                });
            }
        }).catch(error => {
            if (error.response) {
                this.setState({
                    loadLines: false,
                    errorCode: error.response.status
                });
            } else {
                message.error(error.toString());
                this.setState({
                    loading: false
                });
            }
        });
    }

    render() {
        return <Card title={this.props.t('township.debt')}>
            {this.state.loading ? (
                <div className="d-flex justify-content-center align-items-center">
                    <Spin/>
                </div>
            ) : (
                <Table
                  rowKey="id"
                  columns={this.state.columns}
                  dataSource={this.state.debt}
                  pagination={false}
                  summary={this.debtSummary}
                  expandable={{
                      expandedRowRender: this.debtByLands,
                      onExpand: this.debtLandData
                  }}/>
            )}
        </Card>
    }
}

export default withTranslation()(TownshipWidgets);