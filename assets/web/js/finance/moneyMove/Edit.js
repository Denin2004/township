import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import { message, Form, Input, InputNumber, Modal, Select, DatePicker, List } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import axios from 'axios';
import moment from 'moment-timezone';

import useWithForm from '@app/hooks/useWithForm';
import SelectItemName from '@app/web/js/budget/SelectItemName';

class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            form: null,
            loading: true
        };
        this.post = this.post.bind(this);
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.finance.moneyMove.editForm+'/'+this.props.table+'/'+this.props.id,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    loading: false,
                    form: res.data.form,
                    record: res.data.record
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
    
    post() {
        this.props.form
            .validateFields()
            .then(values => {
                axios({
                    method: 'post',
                    url: window.mfwApp.urls.finance.moneyMove.post,
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
          visible={true}
          closable={false}
          okText={this.props.t('modal.save')}
          cancelText={this.props.t('modal.cancel')}
          onCancel={this.props.cancel}
          onOk={this.post}>
            <List split={false}>
                <List.Item key="1">{this.state.record.type_name}</List.Item>
                <List.Item key="2">{this.state.record.comment}</List.Item>
            </List>
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
                <Form.Item name="amount"
                  label={this.props.t('finance.sum')+(this.state.byMonth ? '('+this.props.t('budget.month').toLowerCase()+')' : '')}
                  initialValue={this.state.form.amount.value}
                  rules={[
                    {
                      required: true,
                      message: this.props.t('budget.errors.amount_blank')
                    }
                  ]}>
                    <InputNumber precision="2"/>
                </Form.Item>
                <Form.Item name="id"
                  hidden={true} 
                  initialValue={this.state.form.id.value}>
                    <Input/>
                </Form.Item>
                <Form.Item name="table"
                  hidden={true} 
                  initialValue={this.state.form.table.value}>
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

export default useWithForm(withTranslation()(Edit));