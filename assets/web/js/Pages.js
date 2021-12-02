import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import { Layout, Menu, Spin, message, Form, Modal, Input } from 'antd';

import axios from 'axios';

import useWithForm from '@app/hooks/useWithForm';
import Dashboard from '@app/web/js/Dashboard';
import AccountManager from '@app/web/js/AccountManager';
import ElectricityBills from '@app/web/js/ElectricityBills';
import LineByType from '@app/web/js/line/ByType';
import LandByType from '@app/web/js/land/ByType';
import UserMoneyMove from '@app/web/js/user/MoneyMove';

class Pages extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            errorCode: 0,
            userName: '',
            userID: 0,
            passwordForm: false
        }
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
                    loading: false,
                    widgets: res.data.user.widgets,
                    userName: res.data.user.name,
                    userID: res.data.user.id
                });
            } else {
                message.error(this.props.t(res.data.error));
                this.setState({
                    loading: false
                });
            }
        }).catch(error => {
            if (error.response) {
                this.setState({
                    loading: false,
                    errorCode: error.response.status
                });
            } else {
                message.error(error.toString());
                this.setState({
                    loading: false
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
                this.props.form.resetFields();
                this.setState({
                    loading: false,
                    passwordForm: res.data.form
                });
            } else {
                message.error(this.props.t(res.data.error));
                this.setState({
                    loading: false
                });
            }
        }).catch(error => {
            if (error.response) {
                this.setState({
                    loading: false,
                    errorCode: error.response.status
                });
            } else {
                message.error(error.toString());
                this.setState({
                    loading: false
                });
            }
        });
    }
    
    passwordChange() {
        this.props.form
            .validateFields()
            .then(values => {
                axios({
                    method: 'post',
                    url: window.mfwApp.urls.accountManager.changePassword,
                    data: values,
                    headers: {'Content-Type': 'application/json','X-Requested-With': 'XMLHttpRequest'}
                }).then(res => {
                    if (res.data.success) {
                        this.setState({passwordForm: false});
                        message.success(this.props.t('account.password.changed'));
                    } else {
                        message.error(this.props.t(res.data.error));
                    }
                }).catch(error => {
                    message.error(error.toString());
                });
            })
            .catch(info => {
                message.error(this.props.t('common.errors.validate'));
            });
    }

    render() {
        return <Layout theme="light" className="min-height-100vh">
            {this.state.loading ? (
                <Layout.Content className="d-flex justify-content-center align-items-center">
                    <Spin/>
                </Layout.Content>
            ) : (
                <React.Fragment>
                    <Layout.Header className="mfw-mainmenu"> 
                        <Menu theme="light" mode="horizontal" className="d-flex justify-content-end" selectedKeys={['userMenu']}>
                            <Menu.SubMenu key="userMenu" title={this.state.userName}>
                                <Menu.Item key="userChangePsw" onClick={this.passwordChangeForm}>{this.props.t('account.password.change')}</Menu.Item>
                                <Menu.Item key="userLogout"><a href="/logout" target="_self">{this.props.t('account.logout')}</a></Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </Layout.Header>
                    <Layout.Content>
                        <Routes>
                            <Route path="/" element={<Dashboard widgets={this.state.widgets}/>}/>
                            <Route path={window.mfwApp.urls.accountManager.page} element={<AccountManager/>}/>
                            <Route path={window.mfwApp.urls.electricity.bills+'/:year/:month'} element={<ElectricityBills/>}/>
                            <Route path={window.mfwApp.urls.electricity.bills} element={<ElectricityBills/>}/>
                            <Route path={window.mfwApp.urls.township.line.debtByType+'/:line/:type_id'} element={<LineByType/>}/>
                            <Route path={window.mfwApp.urls.township.land.debtType+'/:land_id/:type_id'} element={<LandByType/>}/>
                            <Route path={window.mfwApp.urls.township.user.moneyMove} element={<UserMoneyMove/>}/>
                        </Routes>
                    </Layout.Content>
                {this.state.passwordForm != false ? (
                    <Modal
                      title={this.props.t('account.password.change')}
                      visible={true}
                      closable={false}
                      okText={this.props.t('modal.save')}
                      cancelText={this.props.t('modal.cancel')}
                      onCancel={() => {this.setState({passwordForm: false})}}
                      onOk={this.passwordChange}>
                        <Form form={this.props.form}
                          name="password"
                          labelCol={{ span: 12 }}
                          wrapperCol={{ span: 12 }}>
                            <Form.Item name="old_password"
                              label={this.props.t('account.password.old')}
                              rules={[
                                  {
                                      required: true,
                                      message: this.props.t('account.errors.password_blank'),
                                  }
                               ]}>
                                <Input.Password err={this.props.t('account.password.confirm')}/>
                            </Form.Item>
                            <Form.Item name="new_password"
                              label={this.props.t('account.password.new')}
                              rules={[
                                  {
                                      required: true,
                                      message: this.props.t('account.errors.password_blank')
                                  }
                              ]}>
                                <Input.Password />
                            </Form.Item>
                            <Form.Item name="new1_password"
                              label={this.props.t('account.password.confirm')}
                              dependencies={['password']}
                              rules={[
                                 {
                                     required: true,
                                     message: this.props.t('account.errors.password_blank')
                                 },
                                 ({ getFieldValue, getFieldInstance }) => ({
                                    validator(_, value) {
                                       if (!value || getFieldValue('new_password') === value) {
                                          return Promise.resolve();
                                       }
                                       const input = getFieldInstance('new1_password');
                                       return Promise.reject(new Error(input.props.confirm_error));
                                    }
                                 })
                              ]}>
                                <Input.Password confirm_error={this.props.t('account.errors.password_confirm')} />
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
                    </Modal>) : ''}
                </React.Fragment>
            )}
        </Layout>
    }
}

export default useWithForm(withTranslation()(Pages));
    