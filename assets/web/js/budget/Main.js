import React, {Component} from 'react';
//import { useMatch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import {message, Table, Form, InputNumber, Input, Select, Button, Space, Typography} from 'antd';
import { SearchOutlined, CloseCircleOutlined } from '@ant-design/icons';

import axios from 'axios';
import moment from 'moment-timezone';

import useWithForm from '@app/hooks/useWithForm';
import useWithParams from '@app/hooks/useWithParams';
import MfwNumber from '@app/mfw/MfwNumber';

class Budgets extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorCode: 0,
            form: false,
            loading: false,
            columns: [
                {
                    title: this.props.t('land._'),
                    dataIndex: 'num'
                },
                {
                    title: () => {return <div className="text-align-end">{this.state.from}</div>},
                    key: 'meter_start',
                    render: (text, record) => {
                        return <React.Fragment>
                            <div className="text-align-end"><MfwNumber value={record.day_meter_start}/></div>
                            <div className="text-align-end"><MfwNumber value={record.night_meter_start}/></div>
                        </React.Fragment>
                    }
                }
            ]
        };
        this.showBudget = this.showBudget.bind(this);
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.budget.form,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    form: res.data.form
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

    showBudget(values) {
        this.setState({loading: true});
        axios({
            method: 'post',
            url: window.mfwApp.urls.budget.data,
            headers: {
                    'X-Requested-With': 'XMLHttpRequest'
            },
            data: values
        }).then(res => {
            if (res.data.success) {
                this.setState({loading:false});
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

    render() {
        return this.state.form != false ?
            <React.Fragment>
                <Form form={this.props.form}
                  className="mfw-mb-1 mfw-mt-1"
                  onFinish={this.showBills}
                  layout="inline">
                    <Form.Item name="budgets"
                      label={this.props.t('calendar.month')}
                      initialValue={this.state.form.month.value*1}>
                        <Select options={this.state.form.month.choices}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">{this.props.t('modal.show')}</Button>
                    </Form.Item>
                    <Form.Item name="_token"
                      hidden={true}
                      initialValue={this.state.form._token.value}>
                        <Input/>
                    </Form.Item>
                </Form>
                <Table 
                  rowKey="id" 
                  loading={this.state.loading}
                  columns={this.state.columns} 
                  dataSource={this.state.bills}
                  scroll={{ x: 'max-content', y: 600 }}
                  pagination={false}
                  summary={this.billsSummary}/>
            </React.Fragment>
        : null;
    }
}

export default useWithForm(withTranslation()(Budgets));