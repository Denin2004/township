import React, {Component} from 'react';
import { Navigate } from 'react-router-dom';
import {Form, Button, Input, Modal, message} from 'antd';

import { withTranslation } from 'react-i18next';
import axios from 'axios';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    
    login = (values) => {
        var params = new URLSearchParams();
        Object.keys(values).map(key => {
            params.append(key, values[key]);        
        });
        axios({url: '/login_check', 
            method: 'post',
            data: params,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(res => {
            if (res.data.success) {
                this.setState({redirect: res.data.redirect})
            } else {
                message.error(this.props.t(res.data.error));
            }
        }).catch(error => {
            message.error(error.toString());
        });
    };    

    render() {
        return (
            this.state.redirect ? <Navigate to={this.state.redirect} replace={true}/> : (
                <Modal visible={true} closable={false} footer={null}>
                    <Form labelCol={{span: 8 }}
                          wrapperCol={{ span: 16 }}
                          name="basic"
                          onFinish={this.login}>
                        <Form.Item label={this.props.t('account.login')}
                          name="_username"
                          rules={[{ required: true, message: this.props.t('account.errors.login_blank')}]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label={this.props.t('account.password._')}
                           name="_password"
                           rules={[{ required: true, message: this.props.t('account.errors.password_blank')}]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">{this.props.t('account.enter')}</Button>
                        </Form.Item>
                    </Form>
                </Modal>
            )
        )
    }
}

export default withTranslation()(Login);