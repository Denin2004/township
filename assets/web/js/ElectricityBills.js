import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import {Spin, message, Table, Form, Input, Modal, Select, Tag, Button} from 'antd';

import axios from 'axios';

import useWithForm from '@app/hooks/useWithForm';

class ElectricityBills extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            errorCode: 0,
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
    }

    componentDidMount() {
        console.log('mmmm');
        axios.get(
            window.mfwApp.urls.electricity.billsForm,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            console.log(res);
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
            console.log(error);
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
        console.log('dddd');
    }

    render() {
        console.log('!!!!!!', this.state);
        return this.state.loading ? (
                <div className="d-flex justify-content-center align-items-center min-height-100vh">
                    <Spin/>
                </div>
            ) : (
            <React.Fragment>
                <Button onClick={() => this.accountForm(-1)}>{this.props.t('account.new')}</Button>
                <Table rowKey="id" columns={this.state.columns} dataSource={this.state.accounts}/>
            </React.Fragment>
            );
    }
}

export default useWithForm(withTranslation()(ElectricityBills));