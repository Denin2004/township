import React, {Component} from 'react';
import { useMatch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import {message, Table, Typography} from 'antd';

import axios from 'axios';

import useWithForm from '@app/hooks/useWithForm';
import useWithParams from '@app/hooks/useWithParams';
import MfwNumber from '@app/mfw/MfwNumber';

class LineByType extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorCode: 0,
            debt: [],
            loading: true,
            loadLand: false,
            debtLand: [],
            columns: [
                {
                    title: this.props.t('land._'),
                    dataIndex: 'num'
                },
                {
                    title: <div className="text-align-end">{this.props.t('finance.sum')}</div>,
                    dataIndex: 'debt',
                    render: (text, record) => {
                        return <div className="text-align-end"><MfwNumber value={record.debt}/></div>
                    }
                }
            ],
            columnsLand: [
                {
                    title: this.props.t('finance.invoice.num'),
                    dataIndex: 'invoice_num'
                },
                {
                    title: <div className="text-align-end">{this.props.t('finance.sum')}</div>,
                    dataIndex: 'amonut',
                    render: (text, record) => {
                        return <div className="text-align-end"><MfwNumber value={record.amount}/></div>
                    }
                },
                {
                    title: <div className="text-align-end">{this.props.t('finance.payed')}</div>,
                    dataIndex: 'payed',
                    render: (text, record) => {
                        return <div className="text-align-end"><MfwNumber value={record.payed}/></div>
                    }
                },
                {
                    title: <div className="text-align-end">{this.props.t('finance.debt')}</div>,
                    dataIndex: 'debt',
                    render: (text, record) => {
                        return <div className="text-align-end"><MfwNumber value={record.debt}/></div>
                    }
                }                
            ]
        };
        this.lineSummary = this.lineSummary.bind(this);
        this.debtLand = this.debtLand.bind(this);
        this.debtLandData = this.debtLandData.bind(this);
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.township.line.debtTypeData+'/'+this.props.params.line+'/'+this.props.params.type_id,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    debt: res.data.debt,
                    loading: false
                });
            } else {
                message.error(this.props.t(res.data.error));
            }
        }).catch(error => {
            if (error.response) {
                this.setState({
                    errorCode: error.response.status
                });
            } else {
                message.error(error.toString());
            }
        });
    }
    
    lineSummary() {
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

    debtLand(record) {
        return <Table
            rowKey="id"
            size="small"
            columns={this.state.columnsLand}
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
            window.mfwApp.urls.township.land.debtTypeData+'/'+record.id+'/'+this.props.params.type_id,
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
            if (error.response) {
                this.setState({
                    loadLand: false,
                    errorCode: error.response.status
                });
            } else {
                message.error(error.toString());
                this.setState({
                    loadLand: false
                });
            }
        });
    }

    render() {
        return this.state.form != false ?
            <React.Fragment>
                <Table 
                  rowKey="id" 
                  loading={this.state.loading}
                  columns={this.state.columns} 
                  dataSource={this.state.debt}
                  summary={this.lineSummary}
                  pagination={false}
                  expandable={{
                      expandedRowRender: this.debtLand,
                      onExpand: this.debtLandData
                  }}/>
            </React.Fragment>
        : null;
    }
}

export default useWithParams(useWithForm(withTranslation()(LineByType)));