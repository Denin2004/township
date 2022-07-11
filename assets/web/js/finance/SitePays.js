import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import { generatePath } from 'react-router-dom';
import {message, Table, Typography, DatePicker, Form, Button, Spin, Input} from 'antd';
import { SearchOutlined, CloseCircleOutlined } from '@ant-design/icons';

import axios from 'axios';
import moment from 'moment-timezone';

import useWithForm from '@app/hooks/useWithForm';
import MfwNumber from '@app/mfw/MfwNumber';

class SitePays extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            loading: false,
            form: false,
            editRecord: null,
            columns: [
                {
                    title: this.props.t('calendar.date'),
                    dataIndex: 'dt_frmt'
                },
                {
                    title: this.props.t('common.type'),
                    dataIndex: 'type_name'
                },
                {
                    title: this.props.t('land._'),
                    dataIndex: 'num'
                },
                {
                    title: this.props.t('finance.pay.sum'),
                    dataIndex: 'amount',
                    align: 'right',
                    render: (text, record) => {
                        return <MfwNumber value={record.amount}/>
                    }
                },
                {
                    title: this.props.t('finance.pay.tax'),
                    dataIndex: 'tax',
                    align: 'right',
                    render: (text, record) => {
                        return <MfwNumber value={record.tax}/>
                    }
                },
                {
                    title: this.props.t('finance.summary'),
                    dataIndex: 'summary',
                    align: 'right',
                    render: (text, record) => {
                        return <MfwNumber value={record.summary}/>
                    }
                },
                {
                    title: this.props.t('common.comment'),
                    dataIndex: 'comment'
                }                
            ]
        };
        this.showData = this.showData.bind(this);
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.finance.sitePays.form,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({form: res.data.form});
                this.showData({
                    date_range: [
                        moment(res.data.form.date_range.value[0], window.mfwApp.formats.date),
                        moment(res.data.form.date_range.value[1], window.mfwApp.formats.date)
                    ],
                    _token: res.data.form._token.value
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

    showData(values) {
        this.setState({loading: true});
        axios({
            method: 'post',
            url: window.mfwApp.urls.finance.sitePays.data,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            data: values
        }).then(res => {
            if (res.data.success) {
                this.setState({loading: false, data: res.data.sitePays});
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
        return this.state.form != false ? <React.Fragment>
            <Form form={this.props.form}
                  className="mfw-mb-1 mfw-mt-1"
                  onFinish={this.showData}
                  layout="inline">
                <Form.Item name="date_range"
                    initialValue={[
                        moment(this.state.form.date_range.value[0], window.mfwApp.formats.date),
                        moment(this.state.form.date_range.value[1], window.mfwApp.formats.date)
                    ]}>
                    <DatePicker.RangePicker format={window.mfwApp.formats.date}/>
                </Form.Item>
                <Form.Item name="_token"
                  hidden={true}
                  initialValue={this.state.form._token.value}>
                    <Input/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">{this.props.t('modal.show')}</Button>
                </Form.Item>
            </Form>
            <Table
              rowKey="id"
              title={() => <Button onClick={() => this.setState({createItem: true})}>{this.props.t('common.add_record')}</Button>}
              loading={this.state.loading}
              columns={this.state.columns}
              dataSource={this.state.data}
              pagination={false}/>
        </React.Fragment> : <div className="d-flex justify-content-center align-items-center">
            <Spin/>
        </div>
    }
}

export default useWithForm(withTranslation()(SitePays));