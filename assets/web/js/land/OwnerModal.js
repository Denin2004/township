import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Modal, Spin, message, Descriptions, Table, Form, Select, Input, Checkbox } from 'antd';

import axios from 'axios';

import MfwNumber from '@app/mfw/MfwNumber';
import useWithForm from '@app/hooks/useWithForm';

class OwnerModal extends Component {
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
            window.mfwApp.urls.township.land.owner.form+'/'+this.props.id,
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
                    url: window.mfwApp.urls.township.land.owner.post,
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
        return <Modal title={this.props.t('land.owner.__')}
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
                   name="owner"
                   labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}>
                    <Form.Item name="name"
                       label={this.props.t('land.owner._')}
                       initialValue={this.state.form.name.value}
                       rules={[
                          {
                              required: true,
                              message: this.props.t('land.errors.owner_blank')
                          }
                       ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="phone"
                       label={this.props.t('person.phone')}
                       initialValue={this.state.form.phone.value}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="email"
                       label={this.props.t('person.email')}
                       initialValue={this.state.form.email.value}>
                        <Input/>
                    </Form.Item>             
                    <Form.Item name="township_member"
                       label={this.props.t('township.member')}
                       valuePropName="checked"
                       initialValue={this.state.form.township_member.value}>
                        <Checkbox/>
                    </Form.Item>
                    <Form.Item name="land_ids"
                       label={this.props.t('land._')}
                       initialValue={this.state.form.land_ids.value}>
                        <Select mode="multiple"
                          options={this.state.form.land_ids.choices}/>
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
            )}
        </Modal>
    }
}

export default useWithForm(withTranslation()(OwnerModal));