import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Card, Spin, Table, message, Typography, Modal, Descriptions, List, Form, Input, Select } from 'antd';

import axios from 'axios';

import MfwNumber from '@app/mfw/MfwNumber';
import Invoice from '@app/web/js/user/Invoice';
import ChargesByType from '@app/web/js/land/ChargesByType';
import useWithForm from '@app/hooks/useWithForm';

class LandWidget extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            debt: {
                loading: true,
                data: [],
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
                ]
                
            },
            bills: {
                loading: true,
                data: [],
                columns: [
                    {
                        title: this.props.t('finance.invoice.num'),
                        dataIndex: 'invoice_num',
                        ellipsis: true
                    },
                    {
                        title: this.props.t('finance.sum'),
                        dataIndex: 'debt',
                        align: 'right',
                        render: (text, record) => {
                            return <a onClick={()=> this.setState({invoiceID: record.id})}><MfwNumber value={record.debt}/></a>
                        }
                    }
                ]
            },
            prePays: {
                loading: true,
                data: [],
                dropDown: [],
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
                paysColumns: [
                    {
                        title: this.props.t('calendar.date'),
                        dataIndex: 'dt'
                    },
                    {
                        title: this.props.t('finance.sum'),
                        dataIndex: 'amount',
                        align: 'right',
                        render: (text, record) => {
                            return <MfwNumber value={record.amount}/>
                        }
                    },
                    {
                        title: this.props.t('finance.distributed'),
                        dataIndex: 'distributed',
                        align: 'right',
                        render: (text, record) => {
                            return <MfwNumber value={record.distributed}/>
                        }
                    }
                ]
            },
            invoiceID: null,
            form: null,
            charges: [],
            viewCharge: null
        };
        this.debtSummary = this.debtSummary.bind(this);
        this.prePaySummary = this.prePaySummary.bind(this);
        this.debtType = this.debtType.bind(this);
        this.debtTypeData = this.debtTypeData.bind(this);
        this.prePayType = this.prePayType.bind(this);
        this.prePayTypeData = this.prePayTypeData.bind(this);        
        this.debt = this.debt.bind(this);
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.township.land.debtForm,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                 this.setState({
                    form: res.data.form,
                    loading: false
                })
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
 
    debt() {
        this.setState((state) => {
            state.debt.loading = true;
            state.debt.data = [];
            return state;
        });
        axios({
            method: 'post',
            url: window.mfwApp.urls.township.land.debt,
            data: this.props.form.getFieldsValue(true),
            headers: {'Content-Type': 'application/json','X-Requested-With': 'XMLHttpRequest'}
        }).then(res => {
            if (res.data.success) {
                this.setState((state) => {
                    state.debt.loading = false;
                    state.debt.data = res.data.debt;
                    state.prePays.data = res.data.prePays;
                    state.charges = res.data.charges;
                    return state;
                });
            } else {
                message.error(this.props.t(res.data.error));
            }
        }).catch(error => {
            message.error(error.toString());
        });
    }
    
    debtSummary() {
        var sumAmount = 0;
        this.state.debt.data.map((rec) => {
            sumAmount+= rec.debt*1;
        });
        return <Table.Summary fixed>
            <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={2} className="text-align-end">
                    <Typography.Text strong>{this.props.t('finance.summary')}</Typography.Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={1} className="text-align-end">
                    <Typography.Text strong>
                        <a href={generatePath(
                                window.mfwApp.urls.township.land.moneyMove+'/:land_id',
                                {land_id: this.props.form.getFieldValue('land_id')})} target="_blank"><MfwNumber value={sumAmount}/></a>
                    </Typography.Text>
                </Table.Summary.Cell>
            </Table.Summary.Row>
        </Table.Summary>
    }

    debtType(record) {
        return <Table
            rowKey="id"
            size="small"
            columns={this.state.bills.columns}
            dataSource={this.state.bills.data[record.id]}
            pagination={false}
            loading={this.state.bills.loading}/>;
    }

    debtTypeData(expanded, record) {
        if (expanded === false) {
            this.setState((state) => {
                state.bills.loading = false;
                delete state.bills.data[record.id];
                return state;
            });            
            return;
        }
        this.setState((state) => {state.bills.loading = true;return state;});
        axios.get(
            generatePath(
                window.mfwApp.urls.township.land.debtTypeData+'/:land_id/:type_id',
                {
                    type_id: record.id,
                    land_id: record.land_id
                }
            ),
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState((state) => {
                    state.bills.loading = false;
                    state.bills.data[record.id] = res.data.debt;
                    return state;
                });            
            } else {
                message.error(this.props.t(res.data.error));
                this.setState((state) => {
                    state.bills.loadinf = false;
                    return state;
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
    
    prePaySummary() {
        var sumAmount = 0;
        this.state.prePays.data.map((rec) => {
            sumAmount+= rec.debt*1;
        });
        return <Table.Summary fixed>
            <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={2} className="text-align-end">
                    <Typography.Text strong>{this.props.t('finance.summary')}</Typography.Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={1} className="text-align-end">
                    <Typography.Text strong>
                        <a href={generatePath(
                                window.mfwApp.urls.township.land.moneyMove+'/:land_id',
                                {land_id: this.props.form.getFieldValue('land_id')})} target="_blank"><MfwNumber value={sumAmount}/></a>
                    </Typography.Text>
                </Table.Summary.Cell>
            </Table.Summary.Row>
        </Table.Summary>
    }    
    
    prePayType(record) {
        return <Table
            rowKey="id"
            size="small"
            columns={this.state.prePays.paysColumns}
            dataSource={this.state.prePays.dropDown[record.id]}
            pagination={false}
            loading={this.state.prePays.loading}/>;
    }

    prePayTypeData(expanded, record) {
        if (expanded === false) {
            this.setState((state) => {
                state.prePays.loading = false;
                delete state.prePays.dropDown[record.id];
                return state;
            });            
            return;
        }
        this.setState((state) => {
            state.prePays.loading = true;
            return state;
        });
        axios.get(
            generatePath(
                window.mfwApp.urls.township.land.prePayTypeData+'/:land_id/:type_id',
                {
                    type_id: record.id,
                    land_id: record.land_id
                }
            ),
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState((state) => {
                    state.prePays.loading = false;
                    state.prePays.dropDown[record.id] = res.data.prePays;
                    return state;
                });            
            } else {
                message.error(this.props.t(res.data.error));
                this.setState((state) => {
                    state.prePays.loading = false;
                    return state;
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
        
        console.log(this.state);
        return <Card title={this.props.t('land.status')}>
            {this.state.loading ? (
                <div className="d-flex justify-content-center align-items-center">
                    <Spin/>
                </div>
            ) : (
                <React.Fragment>
                    <Form form={this.props.form}
                      name="land"
                      onFinish={this.debt}
                      labelCol={{ span: 8 }}
                      wrapperCol={{ span: 16 }}>
                        <Form.Item name="land_id"
                           label={this.props.t('land._')}>
                            <Select
                              showSearch
                              options={this.state.form.land_id.choices}
                              onChange={() => this.props.form.submit()}/>
                        </Form.Item>
                        <Form.Item name="_token"
                          hidden={true} 
                          initialValue={this.state.form._token.value}>
                            <Input/>
                        </Form.Item>                    
                    </Form>
                    {this.state.debt.loading === true ? null : (
                        <React.Fragment>
                            {this.state.debt.data.length !== 0 ?
                                <Table
                                  rowKey="id"
                                  columns={this.state.debt.columns}
                                  dataSource={this.state.debt.data}
                                  pagination={false}
                                  summary={this.debtSummary}
                                  scroll={{ x: true }}
                                  title={() => <Typography.Text strong>{this.props.t('user.debt')}</Typography.Text>}
                                  expandable={{
                                      expandedRowRender: this.debtType,
                                      onExpand: this.debtTypeData
                                  }}/> : <Typography.Title strong type="success" level={3}>{this.props.t('finance.debt_none')}</Typography.Title>}
                            {this.state.prePays.data.length !== 0 ?
                                <Table
                                  rowKey="id"
                                  columns={this.state.prePays.columns}
                                  dataSource={this.state.prePays.data}
                                  pagination={false}
                                  summary={this.prePaySummary}
                                  scroll={{ x: true }}
                                  title={() => <Typography.Text strong>{this.props.t('finance.prePays')}</Typography.Text>}
                                  expandable={{
                                      expandedRowRender: this.prePayType,
                                      onExpand: this.prePayTypeData
                                  }}/> : null}                                 
                            <List header={<Typography.Text strong>{this.props.t('finance.charges')}</Typography.Text>}>
                                {this.state.charges.map(charge => {
                                    return <List.Item key={charge.id}><a onClick={() => this.setState({viewCharge: {typeID: charge.id, land_id: this.props.form.getFieldValue('land_id')}})}>{charge.name}</a></List.Item>
                                })}
                            </List>
                    </React.Fragment>)}
                </React.Fragment>  
            )}
            {this.state.invoiceID !== null ? <Invoice id={this.state.invoiceID} close ={() => {this.setState({invoiceID: null});}}/> : null}
            {this.state.viewCharge !== null ? <ChargesByType charge={this.state.viewCharge} close={() => {this.setState({viewCharge: null});}}/> : null}
        </Card>;
    }
}

export default useWithForm(withTranslation()(LandWidget));