import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import { message, Form, Input, Modal, Select, InputNumber, DatePicker } from 'antd';

import axios from 'axios';
import moment from 'moment-timezone';

import useWithForm from '@app/hooks/useWithForm';

class EditExtData extends Component {
    constructor(props){
        super(props);
        this.state = {
            form: null,
            loading: true
        };
        this.itemPost = this.itemPost.bind(this);
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.extData.page.form+'/'+this.props.id,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                res.data.form.month.choices.map(choice => {
                    choice.label = this.props.t('calendar.months.'+choice.value);
                });
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
                    url: window.mfwApp.urls.extData.page.post,
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
    render() {
        return  this.state.loading ? null : <Modal
          title={this.props.t('budget.item.edit')}
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
                <Form.Item name="dt"
                    label={this.props.t('calendar.date')}
                    initialValue={moment(this.state.form.dt.value, window.mfwApp.formats.date)}
                    rules={[
                      {
                        required: true,
                         message: this.props.t('calendar.errors.blank')
                      }
                    ]}>
                    <DatePicker allowClear={false} format={window.mfwApp.formats.date}/>
                </Form.Item>
                <Form.Item name="year"
                  label={this.props.t('calendar.year')}
                  initialValue={this.state.form.year.value}
                  rules={[
                    {
                      required: true,
                      message: this.props.t('calendar.errors.year')
                    }
                  ]}>
                    <InputNumber/>
                </Form.Item>
                <Form.Item name="month"
                  label={this.props.t('calendar.month')}
                  initialValue={this.state.form.month.value*1}
                  rules={[
                    {
                      required: true,
                      message: this.props.t('calendar.errors.month_blank')
                    }
                  ]}>
                    <Select options={this.state.form.month.choices}/>
                </Form.Item>
                <Form.Item name="amount"
                  label={this.props.t('finance.sum')}
                  initialValue={this.state.form.amount.value}
                  rules={[
                    {
                      required: true,
                      message: this.props.t('budget.errors.amount_blank')
                    }
                  ]}>
                    <InputNumber precision="2"/>
                </Form.Item>
                <Form.Item name="budget"
                   label={this.props.t('budget._')}
                   initialValue={this.state.form.budget.value}>
                    <Select allowClear={true} options={this.state.form.budget.choices}/>
                </Form.Item>
                <Form.Item name="budget_item"
                   label={this.props.t('budget.item._')}
                   initialValue={this.state.form.budget_item.value}>
                    <Select
                       showSearch
                       allowClear={true}
                       options={this.state.form.budget_item.choices}/>
                </Form.Item>
                <Form.Item name="charge_code"
                   label={this.props.t('land.charge')}
                   initialValue={this.state.form.charge_code.value}>
                    <Select
                       allowClear={true}
                       options={this.state.form.charge_code.choices}/>
                </Form.Item>
                <Form.Item name="land"
                   label={this.props.t('land._')}
                   initialValue={this.state.form.land.value}>
                    <Select
                       showSearch
                       allowClear={true}
                       options={this.state.form.land.choices}/>
                </Form.Item>
                <Form.Item name="id"
                  hidden={true} 
                  initialValue={this.state.form.id.value}>
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

export default useWithForm(withTranslation()(EditExtData));