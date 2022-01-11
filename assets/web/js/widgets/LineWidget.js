import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Card, Spin, Table, message, Typography } from 'antd';

import axios from 'axios';

import MfwNumber from '@app/mfw/MfwNumber';

class LineWidget extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            debt: [],
            debtLand: [],
            loadLands: true,
            columns: [
                {
                    title: this.props.t('common.name'),
                    dataIndex: 'name'
                },
                {
                    title: this.props.t('finance.sum'),
                    dataIndex: 'debt',
                    align: 'right',
                    render: (text, record) => {
                        return <MfwNumber value={record.debt}/>
                    }
                }
            ],
            columnsLands: [
                {
                    title: this.props.t('land._'),
                    dataIndex: 'num'
                },
                {
                    title: this.props.t('finance.sum'),
                    dataIndex: 'debt',
                    align: 'right',
                    render: (text, record) => {
                        return <a href={generatePath(
                            window.mfwApp.urls.township.land.debtType+'/:land_id/:type_id',
                            { 
                                land_id: record.id,
                                type_id: record.charge_type_id
                            }
                        )} target="_blank"><MfwNumber value={record.debt}/></a>
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
            window.mfwApp.urls.lineManager.debtLine,
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
            if (error.response && error.response.data) {
                message.error(this.props.t(error.response.data.error));
            } else {
                message.error(error.toString());
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

    debtByLands(record) {
        return <Table
            rowKey="id"
            size="small"
            columns={this.state.columnsLands}
            dataSource={this.state.debtLand[record.id]}
            pagination={false}
            loading={this.state.loadLand}/>;
    }

    debtLandData(expanded, record) {
        if (expanded === false) {
            this.setState((state) => {
                state.loadLand = false;
                delete state.debtLand[record.id];
                return state;
            });            
            return;
        }
        this.setState({loadLand: true});
        axios.get(
            window.mfwApp.urls.lineManager.debtByType+'/'+record.id,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState((state) => {
                    state.loadLand = false;
                    state.debtLand[record.id] = res.data.debt;
                    return state;
                });            
            } else {
                message.error(this.props.t(res.data.error));
                this.setState({
                    loadLand: false
                });
            }
        }).catch(error => {
            if (error.response && error.response.data) {
                message.error(this.props.t(error.response.data.error));
            } else {
                message.error(error.toString());
            }
        });
    }

    render() {
        return <Card title={this.props.t('line.debt')+' '+window.mfwApp.user.line_manager}>
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
                      expandedRowRender: this.debtByLands,
                      onExpand: this.debtLandData
                  }}/>
            )}
        </Card>;
    }
}

export default withTranslation()(LineWidget);