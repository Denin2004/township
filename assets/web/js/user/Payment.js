import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Modal, Spin, message, Descriptions, Table, Form, Select, Input, Alert, Typography } from 'antd';

import axios from 'axios';

import MfwNumber from '@app/mfw/MfwNumber';
import useWithForm from '@app/hooks/useWithForm';

class Payment extends Component {
    constructor(props){
        super(props);
        this.state = {
            form: [],
            loading: true,
            landOptions: [],
            amount: 0,
            amountWithTax: 0,
            tax: 0
        };
        this.pay = this.pay.bind(this);
        this.isNumber = this.isNumber.bind(this);
    }

    componentDidMount() {
        axios.get(
            generatePath(
                window.mfwApp.urls.township.user.payment.form+'/:charge_type_id/:invoice_id',
                {
                    charge_type_id: this.props.chargeTypeID,
                    invoice_id: this.props.invoiceID
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
                    state.loading = false;
                    state.form = res.data.form;
                    if (res.data.form.land_id.type !== 'mfw-hidden') {
                        res.data.form.land_id.choices.map((choice, index) => {
                            choice.label = <React.Fragment>{this.props.t('land._')} {choice.label} (<MfwNumber value={res.data.form.amount.choices[index].label}/>)</React.Fragment>;
                            choice.amount = res.data.form.amount.choices[index].label;
                        });
                        state.amount = res.data.form.amount.choices[0].label;
                        res.data.form.land_id.value = [res.data.form.land_id.value*1];
                    } else {
                        state.amount = res.data.form.amount.value;
                    }
                    state.tax = 1+res.data.form.tax.value*1;
                    state.amountWithTax = state.amount*state.tax;
                    return state;
                });
            } else {
                message.error(res.data.error);
            }
        }).catch(error => {
            message.error(error.toString());
        });
    }

    pay() {
        this.props.form
            .validateFields()
            .then(values => {
            axios({
                method: 'post',
                url: window.mfwApp.urls.township.user.payment.do,
                data: values,
                headers: {'Content-Type': 'application/json','X-Requested-With': 'XMLHttpRequest'}
            }).then(res => {
                if (res.data.success) {
                    window.location.replace(res.data.redirect);
                } else {
                    message.error(res.data.error);
                }
            }).catch(error => {
                message.error(error.toString());
            });
        });
    }

    isNumber(rule, value) {
        if ((isNaN(value/1))||(value*1 < 0)) {
            this.setState({amountWithTax: 0});
            return Promise.reject(new Error(rule.message));
        }
        this.setState({amountWithTax: value*this.state.tax});
        return Promise.resolve();
    }

    render() {
        return <Modal title={this.props.t('finance.pay.ment')}
            visible={true}
            closable={false}
            cancelText={this.props.t('modal.close')}
            onCancel={this.props.close}
            okText={this.props.t('finance.pay._')}
            okButtonsProps={{disbled: !this.state.loading}}
            onOk={this.pay}>
            {this.state.loading ? (
                <div className="d-flex justify-content-center align-items-center">
                    <Spin/>
                </div>
            ) : (
                <React.Fragment>
                    <Form form={this.props.form}
                       name="discount"
                       labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}>
                        {this.state.form.land_id.type == 'mfw-hidden' ? <Form.Item name="land_id"
                            hidden={true}
                            initialValue={this.state.form.land_id.value}>
                              <Input/>
                              </Form.Item> : <Form.Item name="land_id" labelCol={{span: 0}} wrapperCol={{ span: 24 }}
                                 initialValue={this.state.form.land_id.value}><Select options={this.state.form.land_id.choices}
                             onChange={(sel, option)=> {this.props.form.setFieldsValue({amount: option.amount});this.setState({amountWithTax: option.amount*this.state.tax});}}/></Form.Item>}
                        <Form.Item label={this.props.t('finance.sum')}
                           name="amount"
                           initialValue={this.state.amount}
                           label={this.props.t('finance.sum')}
                           extra={this.props.t('finance.pay.tax_warning')}
                           rules={[{required: true, message: this.props.t('budget.errors.amount')}, {validator: this.isNumber, message: this.props.t('budget.errors.wrong_amount')}]}>
                              <Input/>
                        </Form.Item>
                        <Form.Item name="charge_type_id"
                          hidden={true}
                          initialValue={this.state.form.charge_type_id.value}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="invoice_id"
                          hidden={true}
                          initialValue={this.state.form.invoice_id.value}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="tax"
                          hidden={true} 
                          initialValue={this.state.form.tax.value}>
                            <Input/>
                        </Form.Item>                
                        <Form.Item name="_token"
                          hidden={true}
                          initialValue={this.state.form._token.value}>
                            <Input/>
                        </Form.Item>
                    </Form>
                    {this.state.amountWithTax !== 0 ? <Alert 
                       message={<React.Fragment>{this.props.t('finance.pay.result')}
                            <Typography.Text strong>
                                <MfwNumber value={this.state.amountWithTax}/>
                            </Typography.Text>
                        </React.Fragment>} type="info" /> : null}
                </React.Fragment>
            )}
        </Modal>
    }
}

export default useWithForm(withTranslation()(Payment));