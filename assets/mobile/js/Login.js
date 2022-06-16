import React, {Component} from 'react';
import { Navigate } from 'react-router-dom';

import { Form, Input, Button, Toast } from 'antd-mobile';

import { withTranslation } from 'react-i18next';
import axios from 'axios';

import useWithForm from '@app/hooks/useWithFormMobile';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.login = this.login.bind(this);
    }

    errorsToast(errors) {
        return  <React.Fragment>{errors.map(error => {return <div key={error}>{error}</div>})}</React.Fragment>
    }
    
    login(values) {
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
                Toast.show({
                    content: this.props.t(res.data.error),
                    icon: 'fail'
                });
            }
        }).catch(error => {
            Toast.show({
                content: error.toString(),
                icon: 'fail'
            });
        });
    };    
    
    render() {
        return this.state.redirect ? <Navigate to={this.state.redirect} replace={true}/> : 
            <React.Fragment>
                 <Form
                  name="basic"
                  onFinish={this.login}
                  form={this.props.form}
                  footer={
                     <Button block type='submit' color='primary'>{this.props.t('modal.enter')}</Button>
                  }>
                     <Form.Item label={this.props.t('account.login')}
                       name="_username"
                       rules={[{ required: true, message: this.props.t('account.errors.login_message')}]}>
                         <Input placeholder={this.props.t('account.login')}/>
                     </Form.Item>
                     <Form.Item label={this.props.t('account.password._')}
                        name="_password"
                        rules={[{ required: true, message: this.props.t('account.errors.password_message')}]}>
                         <Input type="password" onEnterPress={() => this.props.form.submit()} placeholder={this.props.t('account.password._')}/>
                     </Form.Item>
                 </Form>
             </React.Fragment>
    }
}

export default withTranslation()(useWithForm(Login));