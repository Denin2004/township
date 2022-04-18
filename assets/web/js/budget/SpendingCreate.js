import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import { generatePath } from 'react-router-dom';
import {message, Form, Input, InputNumber, Modal, Checkbox, Select, DatePicker} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import axios from 'axios';
import moment from 'moment-timezone';

import useWithForm from '@app/hooks/useWithForm';

class SpendingCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: null,
            loading: true
        };
        this.post = this.post.bind(this);
        this.getItems = this.getItems.bind(this);
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.budget.spending.createForm,
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

    post() {
        this.props.form
            .validateFields()
            .then(values => {
                axios({
                    method: 'post',
                    url: window.mfwApp.urls.budget.spending.post,
                    data: values,
                    headers: {'Content-Type': 'application/json','X-Requested-With': 'XMLHttpRequest'}
                }).then(res => {
                    if (res.data.success) {
                        this.props.success();
                        message.success(this.props.t('common.create_success'));
                    } else {
                        message.error(this.props.t(res.data.error));
                    }
                }).catch(error => {
                    message.error(error.toString());
                });
            });
    }
    
    getItems(value) {
        axios({
            method: 'get',
            url: generatePath(window.mfwApp.urls.budget.spending.getItems+'/:value', {value: value}),
            headers: {'Content-Type': 'application/json','X-Requested-With': 'XMLHttpRequest'}
        }).then(res => {
            if (res.data.success) {
                this.setState( state => {
                   state.form.item_id.choices = res.data.choices;
                   return state;
                   }
                );
                this.props.form.setFieldsValue({item_id: res.data.value})
            } else {
                message.error(this.props.t(res.data.error));
            }
        }).catch(error => {
            message.error(error.toString());
        });
    }
    
    render() {
        return  this.state.loading ? null : <Modal
          title={this.props.t('budget.spendings.create')}
          visible={true}
          closable={false}
          okText={this.props.t('modal.save')}
          cancelText={this.props.t('modal.cancel')}
          onCancel={this.props.cancel}
          onOk={this.post}>
            <Form form={this.props.form}
               name="item"
               labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}>
                <Form.Item name="budget_id"
                   initialValue={this.state.form.budget_id.value*1}
                   label={this.props.t('budget._')}>
                    <Select
                       filterOption={(input, option) => option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                       onChange={(value) => this.getItems(value)}
                       options={this.state.form.budget_id.choices}/>
                </Form.Item>
                <Form.Item name="item_id"
                   label={this.props.t('budget.item._')}
                   initialValue={this.state.form.item_id.value*1}>
                    <Select 
                       showSearch
                       filterOption={(input, option) =>  option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                       options={this.state.form.item_id.choices}/>
                </Form.Item>
                <Form.Item name="date"
                    label={this.props.t('calendar.date')}
                    initialValue={this.state.form.date.value == '' ? moment() : moment(this.state.form.date.value, window.mfwApp.formats.date)}>
                    <DatePicker format={window.mfwApp.formats.date}/>
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
                <Form.Item name="comment"
                   label={this.props.t('common.comment')}>
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

export default useWithForm(withTranslation()(SpendingCreate));