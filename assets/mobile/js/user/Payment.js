import React, {Component} from 'react';
import { Link, generatePath, Navigate } from 'react-router-dom';
import { Toast, Loading, Form, Space, Popup, Button, Selector, Input, NoticeBar } from 'antd-mobile';
import axios from 'axios';

import { withTranslation } from 'react-i18next';

import MfwNumber from '@app/mfw/MfwNumber';
import useWithForm from '@app/hooks/useWithFormMobile';

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
                            choice.description = <MfwNumber value={res.data.form.amount.choices[index].label} />;
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
                Toast.show({
                    icon: 'fail',
                    content:this.props.t(res.data.error)
                });
            }
        }).catch(error => {
            if (error.response) {
                Toast.show({
                    icon: 'fail',
                    content: error.response.status
                });
            } else {
                Toast.show({
                    icon: 'fail',
                    content:this.props.t(error.toString())
                });
            }
        });
    }
    
    pay(values) {
        axios({
            method: 'post',
            url: window.mfwApp.urls.township.user.payment.do,
            data: values,
            headers: {'Content-Type': 'application/json','X-Requested-With': 'XMLHttpRequest'}
        }).then(res => {
            if (res.data.success) {
                window.location.replace(res.data.redirect);
            } else {
                Toast.show({
                    icon: 'fail',
                    content:this.props.t(res.data.error)
                });
            }
        }).catch(error => {
            Toast.show({
                icon: 'fail',
                content:this.props.t(error.toString())
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
        return (
        <Popup title={this.props.t('account.password.change')}
           visible={true}>
            {this.state.loading ? <Loading/> : <React.Fragment>
                <Form 
                  form={this.props.form}
                  layout="horizontal"
                  onFinish={this.pay}
                  footer={<Space justify="between" className="mfw-d-flex">
                        <Button color='primary' type="submit">{this.props.t('finance.pay._')}</Button>
                        <Button 
                          color='primary'
                          type="button"
                          fill='outline'
                          onClick={this.props.close}>{this.props.t('modal.cancel')}</Button>
                    </Space>}>
                    <Form.Header>{this.props.caption}</Form.Header>
                    {this.state.form.land_id.type == 'mfw-hidden' ? <Form.Item name="land_id"
                        hidden={true} 
                        initialValue={this.state.form.land_id.value}>
                          <Input/>
                          </Form.Item> : <Form.Item name="land_id" initialValue={this.state.form.land_id.value}><Selector options={this.state.form.land_id.choices} 
                         defaultValue={this.state.form.land_id.value}
                         onChange={(sel, option)=> {this.props.form.setFieldsValue({amount: option.items[0].amount});}}/></Form.Item>}
                    <Form.Item label={this.props.t('finance.sum')} 
                       name="amount" 
                       initialValue={this.state.amount}
                       description={this.props.t('finance.pay.tax_warning')}
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
                {this.state.amountWithTax !== 0 ? <NoticeBar 
                   color="info"
                   icon={null}
                   content={<React.Fragment>{this.props.t('finance.pay.result')}
                        <b>
                            <MfwNumber value={this.state.amountWithTax}/>
                        </b>
                    </React.Fragment>} type="info" /> : null}
                </Form>
            </React.Fragment>}
        </Popup>)
    }
}

export default withTranslation()(useWithForm(Payment));