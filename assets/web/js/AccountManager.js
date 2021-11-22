import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import {Spin, message, Table, Form, Input, Modal, Select, Tag } from 'antd';

import axios from 'axios';

import useWithForm from '@app/hooks/useWithForm';

class AccountManager extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            errorCode: 0,
            accounts: [],
            form: false,
            columns: [
                {
                    title: this.props.t('account.login'),
                    dataIndex: 'login',
                    render: (text, record) => {
                        return <a onClick={() => {this.editAccount(record.id)}}>{text}</a>
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
                }
            ]
        };
        this.editAccount = this.editAccount.bind(this);
        this.post = this.post.bind(this);
    }

    editAccount(id)
    {
        axios.get(
            window.mfwApp.urls.accountManager.edit+'/'+id,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    loading: false,
                    form: res.data.form
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

    post() {
        this.props.form
            .validateFields()
            .then(values => {
                console.log(values);
                axios({
                    method: 'post',
                    url: window.mfwApp.urls.accountManager.post,
                    data: values,
                    headers: {'Content-Type': 'application/json','X-Requested-With': 'XMLHttpRequest'}
                }).then(res => {
                    if (res.data.success) {
                        this.setState(state => {
                            const postRowIndex = this.state.accounts.findIndex(function(account){return account.id*1 === res.data.account.id*1});
                            if (postRowIndex == -1) {

                                return state;
                            }
                            state.accounts[postRowIndex] = res.data.account;
                            state.form = false;
                            return state;
                        })
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
        console.log(this.state);
        return this.state.loading ? (
                <div className="d-flex justify-content-center align-items-center min-height-100vh">
                    <Spin/>
                </div>
            ) : (
            <React.Fragment>
                <Table rowKey="id" columns={this.state.columns} dataSource={this.state.accounts}/>
                {this.state.form != false ? (
                    <Modal
                      title={this.props.t('account.edit')}
                      visible={true}
                      closable={false}
                      okText={this.props.t('modal.save')}
                      cancelText={this.props.t('modal.cancel')}
                      onCancel={() => {this.setState({form: false})}}
                      onOk={this.post}>
                        <Form form={this.props.form}
                           name="account"
                           labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}>
                            <Form.Item name="login"
                               label={this.props.t('account.login')}
                               initialValue={this.state.form.login.value}>
                                <Input/>
                            </Form.Item>
                            <Form.Item name="role_id"
                               label={this.props.t('account.role')}
                               initialValue={this.state.form.role_id.value*1}>
                                <Select
                                  options={this.state.form.role_id.choices}/>
                            </Form.Item>
                            <Form.Item name="land_ids"
                               label={this.props.t('land.s')}
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
                    </Modal>) : ''}
            </React.Fragment>
            );
    }
}

export default useWithForm(withTranslation()(AccountManager));