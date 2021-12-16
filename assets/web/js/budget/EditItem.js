import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import { message, Form, Input, InputNumber, Modal, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import axios from 'axios';

import useWithForm from '@app/hooks/useWithForm';
import SelectItemName from '@app/web/js/budget/SelectItemName';

class EditItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorCode: 0,
            form: null,
            loading: true,
            byMonth: false
        };
        this.itemPost = this.itemPost.bind(this);
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.budget.item.form+'/'+this.props.id,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            //console.log(res.request.responseURL, window.mfwApp.urls.budget.item.form+'/'+this.props.id);
            if (res.data.success) {
                this.setState({
                    loading: false,
                    form: res.data.form,
                    byMonth: res.data.byMonth
                });
            } else {
                message.error(this.props.t(res.data.error));
                this.props.cancel();
            }
        }).catch(error => {
            if (error.response) {
                this.setState({
                    errorCode: error.response.status
                });
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
                    url: window.mfwApp.urls.budget.item.post,
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
                <Form.Item name="item_name_id"
                   label={this.props.t('budget.item._')}
                   initialValue={this.state.form.item_name_id.value*1}>
                    <SelectItemName initialValue={this.state.form.item_name_id.value*1} options={this.state.form.item_name_id.choices}/>
                </Form.Item>
                {this.state.form.tax.type != 'mfw-hidden' ? 
                    <Form.Item name="tax"
                      label={this.props.t('budget.tax')}
                      initialValue={this.state.form.tax.value}
                      rules={[
                        {
                          required: true,
                          message: this.props.t('budget.errors.tax_blank')
                        }
                      ]}>
                        <InputNumber precision="2"/>
                    </Form.Item> :
                    <Form.Item name="tax"
                      hidden={true} 
                      initialValue={this.state.form.tax.value}>
                        <Input/>
                    </Form.Item>
                }
                {this.state.form.amount.type != 'mfw-hidden' ? 
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
                    </Form.Item> :
                    <Form.Item name="amount"
                      hidden={true} 
                      initialValue={this.state.form.amount.value}>
                        <Input/>
                    </Form.Item>
                }
                <Form.Item name="comments"
                   label={this.props.t('common.comment')}
                   initialValue={this.state.form.comments.value}>
                    <Input/>
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

export default useWithForm(withTranslation()(EditItem));