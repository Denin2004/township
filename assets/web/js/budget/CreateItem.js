import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import {message, Form, Input, InputNumber, Modal, Checkbox} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import axios from 'axios';

import useWithForm from '@app/hooks/useWithForm';
import SelectItemName from '@app/web/js/budget/SelectItemName';

class CreateItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            form: null,
            loading: true,
            byMonth: false
        };
        this.itemPost = this.itemPost.bind(this);
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.budget.item.createForm+'/'+this.props.budgetID+'/'+this.props.parentID,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    loading: false,
                    form: res.data.form
                });
            } else {
                message.error(this.props.t(res.data.error));
                this.props.cancel();
            }
        }).catch(error => {
            if (error.response && error.response.data) {
                message.error(this.props.t(error.response.data.error));
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
                    url: window.mfwApp.urls.budget.item.create,
                    data: values,
                    headers: {'Content-Type': 'application/json','X-Requested-With': 'XMLHttpRequest'}
                }).then(res => {
                    if (res.data.success) {
                        this.props.success();
                        message.success(this.props.t('account.password.changed'));
                    } else {
                        message.error(this.props.t(res.data.error));
                    }
                }).catch(error => {
                    message.error(error.toString());
                });
            });
    }
    render() {
        return  this.state.loading ? null : <Modal
          title={this.props.t('budget.item.create')}
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
                <Form.Item name="item_name_id"
                   label={this.props.t('budget.item._')}>
                    <SelectItemName options={this.state.form.item_name_id.choices}/>
                </Form.Item>
                <Form.Item name="tax"
                  label={this.props.t('budget.tax')}
                  rules={[
                    {
                      required: true,
                      message: this.props.t('budget.errors.tax_blank')
                    }
                  ]}>
                    <InputNumber precision="2"/>
                </Form.Item>
                <Form.Item name="amount"
                  label={this.props.t('finance.sum')+(this.state.byMonth ? '('+this.props.t('budget.month').toLowerCase()+')' : '')}
                  rules={[
                    {
                      required: true,
                      message: this.props.t('budget.errors.amount_blank')
                    }
                  ]}>
                    <InputNumber precision="2"/>
                </Form.Item>
                <Form.Item name="by_month"
                   label={this.props.t('budget.by_month')}
                   valuePropName="checked"
                   initialValue={this.state.form.by_month.value}>
                    <Checkbox/>
                </Form.Item>
                <Form.Item name="comments"
                   label={this.props.t('common.comment')}>
                    <Input/>
                </Form.Item>
                <Form.Item name="parent_id"
                  hidden={true} 
                  initialValue={this.state.form.parent_id.value}>
                    <Input/>
                </Form.Item>
                <Form.Item name="budget_id"
                  hidden={true} 
                  initialValue={this.state.form.budget_id.value}>
                    <Input/>
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

export default useWithForm(withTranslation()(CreateItem));