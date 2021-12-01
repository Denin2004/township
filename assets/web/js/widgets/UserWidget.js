import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Card, Spin, Table, message, Typography, Modal, Descriptions } from 'antd';

import axios from 'axios';

import MfwNumber from '@app/mfw/MfwNumber';

class UserWidget extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            errorCode: 0,
            debt: [],
            debtBills: [],
            loadBills: true,
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
            columnsBills: [
                {
                    title: this.props.t('finance.invoice.num'),
                    dataIndex: 'invoice_num',
                    ellipsis: true
                },
                {
                    title: () => {return <div className="text-align-end">{this.props.t('finance.sum')}</div>},
                    dataIndex: 'debt',
                    render: (text, record) => {
                        return <div className="text-align-end"><a onClick={()=> this.showInvoice(record.id)}><MfwNumber value={record.debt}/></a></div>
                    }
                }
            ]
        };
        this.debtSummary = this.debtSummary.bind(this);
        this.debtType = this.debtType.bind(this);
        this.debtTypeData = this.debtTypeData.bind(this);
        this.showInvoice = this.showInvoice.bind(this);
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.township.user.debt,
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

    debtType(record) {
        return <Table
            rowKey="id"
            size="small"
            columns={this.state.columnsBills}
            dataSource={this.state.debtBills[record.id]}
            pagination={false}
            loading={this.state.loadBills}/>;
    }

    debtTypeData(expanded, record) {
        if (expanded === false) {
            this.setState((state) => {
                state.loadBills = false;
                delete state.debtBills[record.id];
                return state;
            });            
            return;
        }
        this.setState({loadBills: true});
        axios.get(
            window.mfwApp.urls.township.user.debtType+'/'+record.id,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState((state) => {
                    state.loadBills = false;
                    state.debtBills[record.id] = res.data.debt;
                    return state;
                });            
            } else {
                message.error(this.props.t(res.data.error));
                this.setState({
                    loadBills: false
                });
            }
        }).catch(error => {
            if (error.response) {
                this.setState({
                    loadBills: false,
                    errorCode: error.response.status
                });
            } else {
                message.error(error.toString());
                this.setState({
                    loadBills: false
                });
            }
        });
    }
    
    showInvoice(id) {
        this.setState({loadBills: true});
        axios.get(
            window.mfwApp.urls.finance.invoice+'/'+id,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                var invoice = JSON.parse(res.data.invoice);
                this.setState({
                    loadBills: false
                });
                Modal.info({
                    title: this.props.t('finance.invoice.num')+' '+invoice.invoiceNum,
                    content: (
                        <Descriptions>
                            <Descriptions.Item label={this.props.t('finance.sum')}><MfwNumber value={invoice.amount}/></Descriptions.Item>
                            <Descriptions.Item label={this.props.t('finance.payed')}><MfwNumber value={invoice.payed}/></Descriptions.Item>
                            <Descriptions.Item label={this.props.t('finance.debt')}><MfwNumber value={invoice.amount-invoice.payed}/></Descriptions.Item>
                            <Descriptions.Item label={this.props.t('finance.charge')} span={3}></Descriptions.Item>
                            <Descriptions.Item label={this.props.t('calendar.day')}><MfwNumber value={invoice.day}/></Descriptions.Item>
                            <Descriptions.Item label={this.props.t('calendar.night')}><MfwNumber value={invoice.night}/></Descriptions.Item>
                        </Descriptions>
                    ),
                    okText: this.props.t('modal.close'),
                    width: 800
                });                
            } else {
                message.error(this.props.t(res.data.error));
                this.setState({
                    loadBills: false
                });
            }
        }).catch(error => {
            if (error.response) {
                this.setState({
                    loadBills: false,
                    errorCode: error.response.status
                });
            } else {
                message.error(error.toString());
                this.setState({
                    loadBills: false
                });
            }
        });
    }

    render() {
        return <Card title={this.props.t('user.debt')}>
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
                      expandedRowRender: this.debtType,
                      onExpand: this.debtTypeData
                  }}/>
            )}
        </Card>;
    }
}

export default withTranslation()(UserWidget);