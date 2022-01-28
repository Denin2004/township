import React, {Component} from 'react';
//import { useMatch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import {message, Table, Space} from 'antd';

import axios from 'axios';
import moment from 'moment-timezone';

import useWithForm from '@app/hooks/useWithForm';
import useWithParams from '@app/hooks/useWithParams';
import MfwNumber from '@app/mfw/MfwNumber';
import EditExtData from '@app/web/js/extData/Edit';

class ExtDataPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            loading: false,
            editId: -1,
            columns: [
                {
                    title: this.props.t('calendar.date'),
                    dataIndex: 'dt'
                },
                {
                    title: this.props.t('common.type'),
                    dataIndex: 'amount',
                    align: 'right',
                    render: (text, record) => {
                        return record.amount == 0 ? null : <MfwNumber value={record.amount}/>
                    }
                },
                {
                    title: this.props.t('calendar.month'),
                    dataIndex: 'month'
                },
                {
                    title: this.props.t('calendar.year'),
                    dataIndex: 'year'
                },
                {
                    title: this.props.t('land._'),
                    dataIndex: 'land'
                },
                {
                    title: this.props.t('common.type'),
                    dataIndex: 'tp'
                },
                {
                    title: this.props.t('budget._'),
                    dataIndex: 'budget'
                },
                {
                    title: this.props.t('budget.item._'),
                    dataIndex: 'budget_item'
                },
                {
                    title: this.props.t('errors.error'),
                    dataIndex: 'error',
                    render: (text, record) => {
                        return this.props.t(text)
                    }
                },
                {
                    title: this.props.t('action.s'),
                    key: 'actions',
                    render: (text, record) => {
                        return <Space>
                            <a onClick={() => this.setState({editId: record.id})} >{this.props.t('action.edit')}</a>
                        </Space>
                    }
                }
            ]
        };
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.extData.page.data,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    loading: false,
                    data: res.data.data
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

    render() {
        return <React.Fragment>
            <Table
              rowKey="id"
              loading={this.state.loading}
              columns={this.state.columns}
              dataSource={this.state.data}
              pagination={false}/>
            {this.state.editId != -1 ? <EditExtData id={this.state.editId} /> : null}
        </React.Fragment>
    }
}

export default withTranslation()(ExtDataPage);