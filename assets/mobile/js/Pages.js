import React, {Component} from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { withTranslation } from 'react-i18next';

import { NavBar, Loading, Popup, List, Modal, Toast, Form, Input, Button, Space} from 'antd-mobile';

import Dashboard from '@app/mobile/js/Dashboard';
import LineByType from '@app/mobile/js/line/ByType';
import LandByType from '@app/mobile/js/land/ByType';
import Invoice from '@app/mobile/js/user/Invoice';
import Budget from '@app/mobile/js/township/Budget';
import useWithNavigate from '@app/hooks/useWithNavigate';

class Pages extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            userMenu: false,
            passwordForm: false
        };
        this.passwordChangeForm = this.passwordChangeForm.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    componentDidMount() {
        axios.get(
            '/config',
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                window.mfwApp.urls = JSON.parse(res.data.urls);
                window.mfwApp.user = res.data.user;
                this.setState({
                    loading: false
                });
            } else {
                Toast.show({
                    icon: 'fail',
                    content:this.props.t(res.data.error)
                });
            }
        }).catch(error => {
            if (error.response && error.response.data) {
                Toast.show({
                    icon: 'fail',
                    content:this.props.t(error.response.data.error)
                });
            } else {
                Toast.show({
                    icon: 'fail',
                    content:this.props.t(error.toString())
                });
            }
        });
    }
    
    passwordChangeForm()
    {
        axios.get(
            window.mfwApp.urls.accountManager.passwordChangeForm,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    passwordForm: res.data.form,
                    userMenu: false
                });
            } else {
                Toast.show({
                    icon: 'fail',
                    content:this.props.t(res.data.error)
                });
            }
        }).catch(error => {
            if (error.response) {
                Toast.show({
                    icon: 'fail',
                    content: error.response.status
                });
            } else {
                Toast.show({
                    icon: 'fail',
                    content:this.props.t(error.toString())
                });
            }
        });
    }
    
    passwordChange(values) {
        axios({
            method: 'post',
            url: window.mfwApp.urls.accountManager.changePassword,
            data: values,
            headers: {'Content-Type': 'application/json','X-Requested-With': 'XMLHttpRequest'}
        }).then(res => {
            if (res.data.success) {
                this.setState({passwordForm: false});
                Toast.success(this.props.t('account.password.changed'));
            } else {
                Toast.show({
                    icon: 'fail',
                    content:this.props.t(res.data.error)
                });
            }
        }).catch(error => {
                Toast.show({
                    icon: 'fail',
                    content:this.props.t(error.toString())
                });
        });
    }

    render() {
        return this.state.loading ? 
            <Loading/>
            : <React.Fragment>
                <NavBar onBack={()=>{this.props.navigate(-1)}} right={<a href="#" onClick={() => this.setState({userMenu: true})}>{window.mfwApp.user.name}</a>}/>
                { this.state.userMenu ? 
                    <Popup visible={true} onMaskClick={() => this.setState({userMenu: false})}>
                        <List mode="card">
                            <List.Item className="mfw-text-align-center">
                                <a href="\logout"
                                   className="mfw-text-decoration-none"
                                   target="_self">{this.props.t('account.logout')}</a>
                            </List.Item>
                            <List.Item className="mfw-text-align-center">
                                <a onClick={this.passwordChangeForm}>{this.props.t('account.password.change')}</a>
                            </List.Item>
                        </List>
                    </Popup>
                 : null}
                {this.state.passwordForm != false ? (
                    <Popup
                      title={this.props.t('account.password.change')}
                      visible={true}
                      onMaskClick={() => {this.setState({passwordForm: false})}}>
                        <Form 
                          form={this.props.form}
                          onFinish={this.passwordChange}
                          footer={<Space justify="between" className="mfw-d-flex">
                                  <Button color='primary' type="submit">{this.props.t('modal.save')}</Button>
                                  <Button 
                                    color='primary'
                                    type="button"
                                    fill='outline'
                                    onClick={() => {this.setState({passwordForm: false})}}>{this.props.t('modal.cancel')}</Button>
                              </Space>}>
                            <Form.Item name="old_password"
                              label={this.props.t('account.password.old')}
                              rules={[
                                  {
                                      required: true,
                                      message: this.props.t('account.errors.password_blank'),
                                  }
                               ]}>
                                <Input type="password" placeholder={this.props.t('account.password.old')}/>
                            </Form.Item>
                            <Form.Item name="new_password"
                              label={this.props.t('account.password.new')}
                              rules={[
                                  {
                                      required: true,
                                      message: this.props.t('account.errors.password_blank')
                                  }
                              ]}>
                                <Input type="password" placeholder={this.props.t('account.password.new')}/>
                            </Form.Item>
                            <Form.Item name="new1_password"
                              label={this.props.t('account.password.confirm')}
                              dependencies={['password']}
                              rules={[
                                 {
                                     required: true,
                                     message: this.props.t('account.errors.password_blank')
                                 },
                                 (form) => ({
                                     message: this.props.t('account.errors.password_confirm'),
                                    validator(rule, value) {
                                       if (!value || form.getFieldValue('new_password') === value) {
                                          return Promise.resolve();
                                       }
                                       return Promise.reject();
                                    }
                                 })
                              ]}>
                                <Input type="password" placeholder={this.props.t('account.password.confirm')}/>
                            </Form.Item>                            
                            <Form.Item name="id"
                              hidden={true} 
                              initialValue={this.state.passwordForm.id.value}>
                                <Input/>
                            </Form.Item>
                            <Form.Item name="_token"
                              hidden={true} 
                              initialValue={this.state.passwordForm._token.value}>
                                <Input/>
                            </Form.Item>
                        </Form>
                    </Popup>)
                : ''}
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path={window.mfwApp.urls.township.line.debtByType+'/:line/:type_id'} element={<LineByType/>}/>
                <Route path={window.mfwApp.urls.township.land.debtType+'/:land_id/:charge_type_id'} element={<LandByType/>}/>
                <Route path={window.mfwApp.urls.finance.invoice.page+'/:id'} element={<Invoice/>}/>
                <Route path={window.mfwApp.urls.budget.page+'/:id'} element={<Budget/>}/>
            </Routes>
        </React.Fragment>;
    }
}

export default useWithNavigate(withTranslation()(Pages));