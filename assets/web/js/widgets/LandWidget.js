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
            debt: null,
            debtBills: [],
            loadBills: true,
            invoiceID: null,
            form: null,
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
            columnsBills: [
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
            ],
            charges: [],
            viewCharge: null
        };
        this.debtSummary = this.debtSummary.bind(this);
        this.debtType = this.debtType.bind(this);
        this.debtTypeData = this.debtTypeData.bind(this);
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
                        <a href={window.mfwApp.urls.township.user.moneyMove} target="_blank"><MfwNumber value={sumAmount}/></a>
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
            if (error.response && error.response.data) {
                message.error(this.props.t(error.response.data.error));
            } else {
                message.error(error.toString());
            }
        });
    }
    
    debt() {
        this.setState({loading: true, debt: null});
        axios({
            method: 'post',
            url: window.mfwApp.urls.township.land.debt,
            data: this.props.form.getFieldsValue(true),
            headers: {'Content-Type': 'application/json','X-Requested-With': 'XMLHttpRequest'}
        }).then(res => {
            if (res.data.success) {
                this.setState({
                    loading: false,
                    debt: res.data.debt,
                    charges: res.data.charges
                })
            } else {
                message.error(this.props.t(res.data.error));
            }
        }).catch(error => {
            message.error(error.toString());
        });
    }

    render() {
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
                    {this.state.debt == null ? null : (
                        <React.Fragment>
                            {this.state.debt.length != 0 ?
                                <Table
                                  rowKey="id"
                                  columns={this.state.columns}
                                  dataSource={this.state.debt}
                                  pagination={false}
                                  summary={this.debtSummary}
                                  scroll={{ x: true }}
                                  title={() => <Typography.Text strong>{this.props.t('user.debt')}</Typography.Text>}
                                  expandable={{
                                      expandedRowRender: this.debtType,
                                      onExpand: this.debtTypeData
                                  }}/> : <Typography.Title strong type="success" level={3}>{this.props.t('finance.debt_none')}</Typography.Title>}
                            <List header={<Typography.Text strong>{this.props.t('finance.charges')}</Typography.Text>}>
                                {this.state.charges.map(charge => {
                                    return <List.Item key={charge.id}><a onClick={() => this.setState({viewCharge: {typeID: charge.id, land_id: this.props.form.getFieldValue('land_id')}})}>{charge.name}</a></List.Item>
                                })}
                            </List>
                    </React.Fragment>)}
                </React.Fragment>  
            )}
            {this.state.invoiceID != null ? <Invoice id={this.state.invoiceID} close={() => {this.setState({invoiceID: null})}}/> : null}
            {this.state.viewCharge != null ? <ChargesByType charge={this.state.viewCharge} close={() => {this.setState({viewCharge: null})}}/> : null}
        </Card>;
    }
}

export default useWithForm(withTranslation()(LandWidget));