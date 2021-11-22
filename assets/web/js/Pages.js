import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import { Layout, Menu, Spin, message } from 'antd';

import axios from 'axios';

import Dashboard from '@app/web/js/Dashboard';
import AccountManager from '@app/web/js/AccountManager';

class Pages extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            errorCode: 0,
            userName: '',
            userID: 0
        }
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
                this.setState({
                    loading: false,
                    widgets: res.data.widgets,
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
                                <Menu.Item key="userLogout"><a href="/logout" target="_self">{this.props.t('account.logout')}</a></Menu.Item>
                                <Menu.Item key="userChangePsw">{this.props.t('account.change_password')}</Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </Layout.Header>
                    <Layout.Content>
                        <Routes>
                            <Route path="/" element={<Dashboard widgets={this.state.widgets}/>}/>
                            <Route path={window.mfwApp.urls.accountManager.page} element={<AccountManager/>}/>
                        </Routes>
                    </Layout.Content>
                </React.Fragment>
            )}
        </Layout>
    }
}

export default withTranslation()(Pages);
    