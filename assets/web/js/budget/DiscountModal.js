import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Modal, Spin, message, Descriptions, Table, Form, Select, Input } from 'antd';

import axios from 'axios';

import MfwNumber from '@app/mfw/MfwNumber';
import useWithForm from '@app/hooks/useWithForm';

class DiscountModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            form: null
        };
        this.post = this.post.bind(this);
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.budget.discount.form+'/'+this.props.id.land_id+'/'+this.props.id.item_name_id,
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
            }
        }).catch(error => {
            if (error.response && error.response.data) {
                message.error(this.props.t(error.response.data.error));
            } else {
                message.error(error.toString());
            }
        });
    }
    
    post() {
        this.props.form
            .validateFields()
            .then(values => {
                axios({
                    method: 'post',
                    url: window.mfwApp.urls.budget.discount.post,
                    data: values,
                    headers: {'Content-Type': 'application/json','X-Requested-With': 'XMLHttpRequest'}
                }).then(res => {
                    if (res.data.success) {
                        this.props.success();
                    } else {
                        message.error(this.props.t(res.data.error));
                    }
                }).catch(error => {
                    message.error(error.toString());
                });
            });
    }

    render() {
        return <Modal title={this.props.t('budget.discount._')}
            visible={true}
            closable={false}
            cancelText={this.props.t('modal.close')}
            onCancel={this.props.close}
            okText={this.props.t('modal.save')}
            onOk={this.post}>
            {this.state.loading ? (
                <div className="d-flex justify-content-center align-items-center">
                    <Spin/>
                </div>
            ) : (
                <Form form={this.props.form}
                   name="discount"
                   labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}>
                    <Form.Item name="land_id"
                       label={this.props.t('land._')}
                       initialValue={this.state.form.land_id.value*1}>
                        <Select
                          options={this.state.form.land_id.choices}/>
                    </Form.Item>
                    <Form.Item name="item_name_id"
                       label={this.props.t('budget.item._')}
                       initialValue={this.state.form.item_name_id.value*1}>
                        <Select
                          options={this.state.form.item_name_id.choices}/>
                    </Form.Item>
                    <Form.Item name="discount"
                       label={this.props.t('finance.discount')}
                       initialValue={this.state.form.discount.value}
                       rules={[
                          {
                              required: true,
                              message: this.props.t('budget.errors.discount_blank')
                          }
                       ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="_token"
                      hidden={true} 
                      initialValue={this.state.form._token.value}>
                        <Input/>
                    </Form.Item>
                </Form>
            )}
        </Modal>
    }
}

export default useWithForm(withTranslation()(DiscountModal));