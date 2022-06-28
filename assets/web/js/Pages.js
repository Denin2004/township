import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import { Layout, Menu, Spin, message, Form, Modal, Input } from 'antd';

import axios from 'axios';

import useWithForm from '@app/hooks/useWithForm';
import Dashboard from '@app/web/js/Dashboard';
import AccountManager from '@app/web/js/AccountManager';
import ElectricityBills from '@app/web/js/electricity/Bills';
import LineByType from '@app/web/js/line/ByType';
import LandByType from '@app/web/js/land/ByType';
import UserMoneyMove from '@app/web/js/user/MoneyMove';
import Budgets from '@app/web/js/budget/Main';
import Owners from '@app/web/js/land/Owners';
import Discounts from '@app/web/js/budget/Discounts';
import ExtDataPage from '@app/web/js/extData/Page';
import Error403 from '@app/web/js/Error403';
import FinanceMoneyMove from '@app/web/js/finance/moneyMove/Main';
import Lands from '@app/web/js/land/Main';
import LandMoneyMove from '@app/web/js/land/MoneyMove';
import InfoPage from '@app/web/js/InfoPage';

class Pages extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            userName: '',
            userID: 0,
            passwordForm: false,
            menu: [
                {
                    label: <a href="/" target="_self">{this.props.t('user.cabinet')}</a>,
                    key: 'main'
                },
                {
                    label: this.props.t('township.details'),
                    key: 'contacts'
                },
                {
                    label: this.props.t('finance.pay.rules'),
                    key: 'payRules'
                },
                {
                    label: this.props.t('township.privacyPolicy'),
                    key: 'privacyPolicy'
                },
                {
                    label: '',
                    key: 'userMenu',
                    children: [
                        {
                            label: this.props.t('account.password.change'),
                            key: 'userChangePsw'
                        },
                        {
                            label: <a href="/logout" target="_self">{this.props.t('account.logout')}</a>,
                            key: 'userLogout'
                        }
                    ]
                }                
            ],
            selectedKeys: ['main']
        };
        this.passwordChangeForm = this.passwordChangeForm.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.menuClick = this.menuClick.bind(this);
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
                this.setState(state => {
                    state.loading = false;
                    state.widgets = res.data.user.widgets;
                    state.menu[4].label = res.data.user.name;
                    state.menu[1].label = <a href={window.mfwApp.urls.township.contacts} target="_self">{this.props.t('township.contacts')}</a>;
                    state.menu[2].label = <a href={window.mfwApp.urls.township.user.payment.rules} target="_self">{this.props.t('finance.pay.types')}</a>;
                    state.menu[3].label = <a href={window.mfwApp.urls.township.privacyPolicy} target="_self">{this.props.t('township.privacyPolicy')}</a>;
                    state.userID = res.data.user.id;
                    state.selectedKeys = window.location.pathname == window.mfwApp.urls.township.contacts ? ['contacts'] :
                            (window.location.pathname == window.mfwApp.urls.township.privacyPolicy ? ['privacyPolicy'] :
                            (window.location.pathname == window.mfwApp.urls.township.user.payment.rules ? ['payRules'] : state.selectedKeys));
                    console.log(window.location.pathname, window.mfwApp.urls.township.user.payment.rules);
                    return state;
                });
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

    passwordChangeForm() {
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
            if (error.response && error.response.data) {
                message.error(this.props.t(error.response.data.error));
            } else {
                message.error(error.toString());
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

    menuClick(item) {
        if (item.key === 'userChangePsw') {
            this.passwordChangeForm();
        }
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
                        <Menu theme="light"
                           mode="horizontal"
                           className="d-flex justify-content-end"
                           selectedKeys={this.state.selectedKeys}
                           items={this.state.menu}
                           onClick={this.menuClick}/>
                    </Layout.Header>
                    <Layout.Content>
                        <Routes>
                            <Route path="/" element={<Dashboard widgets={this.state.widgets}/>}/>
                            <Route path={window.mfwApp.urls.accountManager.page} element={<AccountManager/>}/>
                            <Route path={window.mfwApp.urls.electricity.bills+'/:year/:month'} element={<ElectricityBills/>}/>
                            <Route path={window.mfwApp.urls.electricity.bills} element={<ElectricityBills/>}/>
                            <Route path={window.mfwApp.urls.township.line.debtByType+'/:line/:type_id'} element={<LineByType/>}/>
                            <Route path={window.mfwApp.urls.township.land.debtType+'/:land_id/:type_id'} element={<LandByType/>}/>
                            <Route path={window.mfwApp.urls.township.land.moneyMove+'/:land_id'} element={<LandMoneyMove/>}/>
                            <Route path={window.mfwApp.urls.township.user.moneyMove} element={<UserMoneyMove/>}/>
                            <Route path={window.mfwApp.urls.budget.page} element={<Budgets/>}/>
                            <Route path={window.mfwApp.urls.budget.page+'/:id'} element={<Budgets/>}/>
                            <Route path={window.mfwApp.urls.township.land.owner.page} element={<Owners/>}/>
                            <Route path={window.mfwApp.urls.budget.discount.page} element={<Discounts/>}/>
                            <Route path={window.mfwApp.urls.extData.page._} element={<ExtDataPage/>}/>
                            <Route path={window.mfwApp.urls.finance.moneyMove.page} element={<FinanceMoneyMove/>}/>
                            <Route path={window.mfwApp.urls.township.land.page} element={<Lands/>}/>
                            <Route path="/error/403" element={<Error403/>}/>
                            <Route path={window.mfwApp.urls.township.user.payment.success} element={<Dashboard widgets={this.state.widgets}/>}/>
                            <Route path={window.mfwApp.urls.township.user.payment.fail} element={<Dashboard widgets={this.state.widgets}/>}/>
                            <Route path={window.mfwApp.urls.township.contacts} element={<InfoPage info="contacts"/>}/>
                            <Route path={window.mfwApp.urls.township.user.payment.rules} element={<InfoPage info="payRules"/>}/>
                            <Route path={window.mfwApp.urls.township.privacyPolicy} element={<InfoPage info="privacyPolicy"/>}/>
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
                                 ({ getFieldValue }) => ({
                                    message: this.props.t('account.errors.password_confirm'),
                                    validator(_, value) {
                                       if (!value || getFieldValue('new_password') === value) {
                                          return Promise.resolve();
                                       }
                                       return Promise.reject();
                                    }
                                 })
                              ]}>
                                <Input.Password/>
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
