import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import {Spin, message, Table, Form, Input, Modal, Select, Tag, Button} from 'antd';

import axios from 'axios';

import useWithForm from '@app/hooks/useWithForm';

class AccountManager extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            errorCode: 0,
            accounts: [],
            accountForm: false,
            passwordForm: false,
            columns: [
                {
                    title: this.props.t('account.login'),
                    dataIndex: 'login',
                    render: (text, record) => {
                        return <a onClick={() => {this.accountForm(record.id)}}>{text}</a>
                    }
                },
                {
                    title: this.props.t('land.s'),
                    dataIndex: 'lands',
                    render: (lands) => {
                        return <React.Fragment>
                            {lands.map(land => {
                                  return (
                                   <Tag key={land}>{land}</Tag>
                                );
                            })}
                        </React.Fragment>;
                    }
                },
                {
                    title: this.props.t('account.role'),
                    dataIndex: 'role_name'
                },
                {
                    title: '',
                    dataIndex: 'id',
                    render: (id) => {
                        return <a onClick={() => {this.passwordForm(id)}}>{this.props.t('account.password.change')}</a>
                    }
                }
            ]
        };
        this.accountForm = this.accountForm.bind(this);
        this.accountPost = this.accountPost.bind(this);
        this.passwordForm = this.passwordForm.bind(this);
        this.passwordPost = this.passwordPost.bind(this);
    }

    accountForm(id)
    {
        axios.get(
            window.mfwApp.urls.accountManager.accountForm+(id != -1 ? '/'+id : ''),
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
                    accountForm: res.data.form
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
    
    accountPost() {
        this.props.form
            .validateFields()
            .then(values => {
                axios({
                    method: 'post',
                    url: window.mfwApp.urls.accountManager.accountPost,
                    data: values,
                    headers: {'Content-Type': 'application/json','X-Requested-With': 'XMLHttpRequest'}
                }).then(res => {
                    if (res.data.success) {
                        this.setState(state => {
                            const postRowIndex = this.state.accounts.findIndex(function(account){return account.id*1 === res.data.account.id*1});
                            var acc = [...state.accounts];
                            res.data.account.id = res.data.account.id*1;
                            if (postRowIndex == -1) {
                                acc.push(res.data.account);
                            } else {
                                acc[postRowIndex] = res.data.account;
                            }
                            state.accounts = acc;
                            state.accountForm = false;
                            return state;
                        })
                    } else {
                        message.error(this.props.t(res.data.error));
                    }
                }).catch(error => {
                    message.error(error.toString());
                });
            });
    }
    
    passwordForm(id)
    {
        axios.get(
            window.mfwApp.urls.accountManager.passwordForm+'/'+id,
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
    
    passwordPost() {
        this.props.form
            .validateFields()
            .then(values => {
                axios({
                    method: 'post',
                    url: window.mfwApp.urls.accountManager.setPassword,
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
            });
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.accountManager.accounts,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    loading: false,
                    accounts: res.data.accounts
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

    render() {
        return this.state.loading ? (
                <div className="d-flex justify-content-center align-items-center min-height-100vh">
                    <Spin/>
                </div>
            ) : (
            <React.Fragment>
                <Button onClick={() => this.accountForm(-1)}>{this.props.t('account.new')}</Button>
                <Table rowKey="id" columns={this.state.columns} dataSource={this.state.accounts}/>
                {this.state.accountForm != false ? (
                    <Modal
                      title={this.state.accountForm.id.value == -1 ? this.props.t('account.new') : this.props.t('account.edit')}
                      visible={true}
                      closable={false}
                      okText={this.props.t('modal.save')}
                      cancelText={this.props.t('modal.cancel')}
                      onCancel={() => {this.setState({accountForm: false})}}
                      onOk={this.accountPost}>
                        <Form form={this.props.form}
                           name="account"
                           labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}>
                            <Form.Item name="login"
                               label={this.props.t('account.login')}
                               initialValue={this.state.accountForm.login.value}
                               rules={[
                                  {
                                      required: true,
                                      message: this.props.t('account.errors.login_blank')
                                  }
                               ]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item name="role_id"
                               label={this.props.t('account.role')}
                               initialValue={this.state.accountForm.role_id.value*1}>
                                <Select
                                  options={this.state.accountForm.role_id.choices}/>
                            </Form.Item>
                            <Form.Item name="land_ids"
                               label={this.props.t('land.s')}
                               initialValue={this.state.accountForm.land_ids.value}>
                                <Select mode="multiple"
                                  options={this.state.accountForm.land_ids.choices}/>
                            </Form.Item>
                            {this.state.accountForm.id.value == -1 ? 
                                <Form.Item name="password"
                                   label={this.props.t('account.password._')}>
                                   <Input.Password />
                                </Form.Item> : ''}
                            <Form.Item name="id"
                              hidden={true} 
                              initialValue={this.state.accountForm.id.value}>
                                <Input/>
                            </Form.Item>
                            <Form.Item name="_token"
                              hidden={true} 
                              initialValue={this.state.accountForm._token.value}>
                                <Input/>
                            </Form.Item>
                        </Form>
                    </Modal>) : ''}
                {this.state.passwordForm != false ? (
                    <Modal
                      title={this.props.t('account.password.change')}
                      visible={true}
                      closable={false}
                      okText={this.props.t('modal.save')}
                      cancelText={this.props.t('modal.cancel')}
                      onCancel={() => {this.setState({passwordForm: false})}}
                      onOk={this.passwordPost}>
                        <Form form={this.props.form}
                           name="password"
                           labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}>
                            <Form.Item name="password"
                               label={this.props.t('account.password')}
                               rules={[
                                  {
                                      required: true,
                                      message: this.props.t('account.errors.password_blank'),
                                  }
                               ]}>
                                <Input.Password />
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
            );
    }
}

export default useWithForm(withTranslation()(AccountManager));