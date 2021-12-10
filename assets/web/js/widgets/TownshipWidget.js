import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Card, Spin, Table, message, Typography } from 'antd';

import axios from 'axios';

import MfwNumber from '@app/mfw/MfwNumber';

class TownshipWidget extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            errorCode: 0,
            debt: [],
            debtLines: [],
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
            columnsLines: [
                {
                    title: this.props.t('line._'),
                    dataIndex: 'line'
                },
                {
                    title: () => {return <div className="text-align-end">{this.props.t('finance.sum')}</div>},
                    dataIndex: 'debt',
                    render: (text, record) => {
                        return <div className="text-align-end"><a href={generatePath(
                            window.mfwApp.urls.township.line.debtByType+'/:line/:type_id',
                            { 
                                line: record.line,
                                type_id: record.charge_type_id
                            }
                        )} target="_blank"><MfwNumber value={record.debt}/></a></div>
                    }
                }
            ]
        };
        this.debtSummary = this.debtSummary.bind(this);
        this.debtByLines = this.debtByLines.bind(this);
        this.debtByLinesData = this.debtByLinesData.bind(this);
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.township.debt,
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

    debtByLines(record) {
        return <Table
            rowKey="line"
            size="small"
            columns={this.state.columnsLines}
            dataSource={this.state.debtLines[record.id]}
            pagination={false}
            loading={this.state.loadLines}/>;
    }

    debtByLinesData(expanded, record) {
        if (expanded === false) {
            this.setState((state) => {
                state.loadLines = true;
                delete state.debtLines[record.id];
                return state;
            });            
            return;
        }
        this.setState({loadLines: true});
        axios.get(
            window.mfwApp.urls.township.debtByLines+'/'+record.id,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState((state) => {
                    state.loadLines = false;
                    state.debtLines[record.id] = res.data.debt;
                    return state;
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
                    loadLines: false
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
                  scroll={{ x: true }}
                  expandable={{
                      expandedRowRender: this.debtByLines,
                      onExpand: this.debtByLinesData
                  }}/>
            )}
        </Card>
    }
}

export default withTranslation()(TownshipWidget);