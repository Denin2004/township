import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import { generatePath } from 'react-router-dom';
import { message, Form, Input, Modal, Select, InputNumber, DatePicker, Typography } from 'antd';

import axios from 'axios';
import moment from 'moment-timezone';

import useWithForm from '@app/hooks/useWithForm';
import MfwNumber from '@app/mfw/MfwNumber';

class Create extends Component {
    constructor(props){
        super(props);
        this.state = {
            form: null,
            loading: true,
            landExData: false
        };
        this.itemPost = this.itemPost.bind(this);
        this.getBudgetItems = this.getBudgetItems.bind(this);
        this.getDebtLand = this.getDebtLand.bind(this);
    }

    componentDidMount() {
        axios.get(
             window.mfwApp.urls.finance.moneyMove.createForm,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                res.data.form.charge_type_id.choices.map(choice => {
                    choice.label = this.props.t(choice.label);
                });
                res.data.form.charge_type_id.value = res.data.form.charge_type_id.choices.length != 0 ? 
                   res.data.form.charge_type_id.choices[0].value : null;
                this.setState({
                    loading: false,
                    form: res.data.form,
                    landExData: res.data.form.charge_type_id.value != -1
                });
            } else {
                message.error(this.props.t(res.data.error));
                this.props.cancel();
            }
        }).catch(error => {
            if (error.response && error.response.data) {
                message.error(this.props.t(error.response.data.error));
                this.props.cancel();
            } else {
                message.error(error.toString());
                this.props.cancel();
            }
        });
    }
    
    itemPost() {
        this.props.form
            .validateFields()
            .then(values => {
                axios({
                    method: 'post',
                    url: window.mfwApp.urls.finance.moneyMove.create,
                    data: values,
                    headers: {'Content-Type': 'application/json','X-Requested-With': 'XMLHttpRequest'}
                }).then(res => {
                    if (res.data.success) {
                        this.props.success();
                        message.success(this.props.t('modal.saved'));
                    } else {
                        message.error(this.props.t(res.data.error));
                    }
                }).catch(error => {
                    message.error(error.toString());
                });
            });
    }
    
    getBudgetItems(budget_id) {
        axios({
            method: 'get',
            url: generatePath(window.mfwApp.urls.budget.item.choices+'/:budget_id', {budget_id: budget_id}),
            headers: {'Content-Type': 'application/json','X-Requested-With': 'XMLHttpRequest'}
        }).then(res => {
            if (res.data.success) {
                this.setState(state => {
                    state.form.budget_item_id.choices = res.data.choices;
                    return state; 
                });
            } else {
                message.error(this.props.t(res.data.error));
            }
        }).catch(error => {
            message.error(error.toString());
        });
    }
    
    debtLabel(choice) {
        return choice.debt == choice.amount ? <React.Fragment>
            <small>
                <Typography.Text type="secondary">{choice.label}</Typography.Text>
            </small>
            <Typography.Text strong> <MfwNumber value={choice.debt}/></Typography.Text> 
            </React.Fragment> : <React.Fragment> 
                <small>
                    <Typography.Text type="secondary">{choice.label}</Typography.Text>
                </small>
                <Typography.Text strong> <MfwNumber value={choice.debt}/></Typography.Text> (<MfwNumber value={choice.amount}/>)
        </React.Fragment>;
    }
    
    getDebtLand(charge_type_id, land_id) {
        if (charge_type_id != -1) {
            this.setState({landExData: true});
            if (land_id != undefined) {
                axios({
                    method: 'get',
                    url: generatePath(
                        window.mfwApp.urls.township.land.debtInvoiceChoices+'/:land_id/:charge_type_id',
                        {land_id: land_id, charge_type_id: charge_type_id}
                    ),
                    headers: {'Content-Type': 'application/json','X-Requested-With': 'XMLHttpRequest'}
                    }).then(res => {
                    if (res.data.success) {
                        res.data.choices.map( choice => {
                            choice.label = this.debtLabel(choice)
                        });
                        this.setState(state => {
                            state.form.start_invoice_id.choices = res.data.choices;
                            return state; 
                        });
                        
                    } else {
                        message.error(this.props.t(res.data.error));
                    }
                }).catch(error => {
                    message.error(error.toString());
                });
            }
        } else {
            this.setState({landExData: false});
        }
    }
    
    render() {
        return  this.state.loading ? null : <Modal
          visible={true}
          closable={false}
          okText={this.props.t('modal.save')}
          cancelText={this.props.t('modal.cancel')}
          onCancel={this.props.cancel}
          onOk={this.itemPost}>
            <Form form={this.props.form}
               name="item"
               labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}>
                <Form.Item name="charge_type_id"
                   label={this.props.t('land.charge')}
                   initialValue={this.state.form.charge_type_id.value}>
                    <Select
                       allowClear={true}
                       onSelect={(tp) => this.getDebtLand(tp, this.props.form.getFieldValue('land'))}
                       options={this.state.form.charge_type_id.choices}/>
                </Form.Item>
                <Form.Item name="dt"
                    label={this.props.t('calendar.date')}
                    rules={[
                      {
                        required: true,
                         message: this.props.t('calendar.errors.blank')
                      }
                    ]}
                    initialValue={moment()}>
                    <DatePicker allowClear={false} format={window.mfwApp.formats.date}/>
                </Form.Item>
                <Form.Item name="amount"
                  label={this.props.t('finance.sum')}
                  rules={[
                    {
                      required: true,
                      message: this.props.t('budget.errors.amount_blank')
                    }
                  ]}>
                    <InputNumber precision="2"/>
                </Form.Item>
                <Form.Item name="land_id"
                   label={this.props.t('land._')}
                   className={this.state.landExData ? '' : 'd-none'}>
                    <Select
                       showSearch
                       allowClear={true}
                       options={this.state.form.land_id.choices}
                       onSelect={(land_id) => this.getDebtLand(this.props.form.getFieldValue('charge_type_id'), land_id)}/>
                </Form.Item>
                <Form.Item name="start_invoice_id"
                   label={this.props.t('finance.invoice.num')}
                   className={this.state.landExData ? '' : 'd-none'}>
                    <Select allowClear={true} 
                      options={this.state.form.start_invoice_id.choices}/>
                </Form.Item>                
                <Form.Item name="budget_id"
                   label={this.props.t('budget._')}
                   className={this.state.landExData ? 'd-none' : ''}>
                    <Select allowClear={true} options={this.state.form.budget_id.choices} onSelect={this.getBudgetItems}/>
                </Form.Item>
                <Form.Item name="budget_item_id"
                   label={this.props.t('budget.item._')}
                   className={this.state.landExData ? 'd-none' : ''}>
                    <Select
                       showSearch
                       allowClear={true}
                       options={this.state.form.budget_item_id.choices}/>
                </Form.Item>
                <Form.Item name="_token"
                  hidden={true} 
                  initialValue={this.state.form._token.value}>
                    <Input/>
                </Form.Item>
            </Form>
        </Modal>
    }
}

export default useWithForm(withTranslation()(Create));