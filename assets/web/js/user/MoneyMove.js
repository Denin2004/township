import React, {Component} from 'react';
//import { useMatch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import {message, Table, Typography, DatePicker, Form, Button, Input} from 'antd';

import axios from 'axios';
import moment from 'moment-timezone';

import useWithForm from '@app/hooks/useWithForm';
import useWithParams from '@app/hooks/useWithParams';
import MfwNumber from '@app/mfw/MfwNumber';

class UserMoneyMove extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorCode: 0,
            data: [],
            loading: false,
            form: false,
            start: 0,
            columns: [
                {
                    title: this.props.t('calendar.date'),
                    dataIndex: 'dt1'
                },
                {
                    title: this.props.t('common.type'),
                    dataIndex: 'charge_name'
                },
                {
                    title: this.props.t('land._'),
                    dataIndex: 'land_num'
                },
                {
                    title: <div className="text-align-end">{this.props.t('finance.charge')}</div>,
                    dataIndex: 'amount_in',
                    render: (text, record) => {
                        return record.amount_in == 0 ? null :  <div className="text-align-end"><MfwNumber value={record.amount_in}/></div>
                    }
                },
                {
                    title: <div className="text-align-end">{this.props.t('finance.debited')}</div>,
                    dataIndex: 'amount_out',
                    render: (text, record) => {
                        return record.amount_out == 0 ? null :  <div className="text-align-end"><MfwNumber value={record.amount_out}/></div>
                    }
                }
            ]
        };
        this.showData = this.showData.bind(this);
        this.summary = this.summary.bind(this);
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.township.user.moneyMoveForm,
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
            if (error.response) {
                this.setState({
                    errorCode: error.response.status
                });
            } else {
                message.error(error.toString());
            }
        });
    }

    showData(values) {
        this.setState({loading: true});
        axios({
            method: 'post',
            url: window.mfwApp.urls.township.user.moneyMoveData,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            data: values
        }).then(res => {
            if (res.data.success) {
                var start = res.data.moneyMove.shift(),
                    key = 1;
                res.data.moneyMove.map((rec) =>{
                    rec['key'] = key;
                    key++;
                })
                this.setState({
                    loading: false,
                    data: res.data.moneyMove,
                    start: start.amount_out
                });
            } else {
                message.error(this.props.t(res.data.error));
            }
        }).catch(error => {
            if (error.response) {
                this.setState({
                    errorCode: error.response.status
                });
            } else {
                message.error(error.toString());
            }
        });
    }

    summary() {
        var sumSaldo = this.state.start*1;
        this.state.data.map((rec) => {
            sumSaldo+= rec.amount_in-rec.amount_out;
        });
        return <Table.Summary fixed>
            <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={4} className="text-align-end">
                    {this.props.t('finance.saldo.end')}:
                </Table.Summary.Cell>
                <Table.Summary.Cell index={2} className="text-align-end">
                    <Typography.Text strong>
                        <MfwNumber value={sumSaldo}/>
                    </Typography.Text>
                </Table.Summary.Cell>
            </Table.Summary.Row>
        </Table.Summary>
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
              title={() => {return <div className="text-align-end">
                  <span className="mfw-mr-1">{this.props.t('finance.saldo.start')}</span>
                  <Typography.Text strong>
                      <MfwNumber value={this.state.start}/>
                  </Typography.Text>
              </div>}}
              loading={this.state.loading}
              columns={this.state.columns}
              dataSource={this.state.data}
              pagination={false}
              summary={this.summary}/>
        </React.Fragment> : null
    }
}

export default useWithParams(useWithForm(withTranslation()(UserMoneyMove)));