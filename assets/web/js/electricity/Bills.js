import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import {message, Table, Form, InputNumber, Input, Select, Button, Typography, Space, Divider} from 'antd';
import { SearchOutlined, CloseCircleOutlined } from '@ant-design/icons';

import axios from 'axios';
import moment from 'moment-timezone';

import useWithForm from '@app/hooks/useWithForm';
import useWithParams from '@app/hooks/useWithParams';
import MfwNumber from '@app/mfw/MfwNumber';
import ElectricityAddBill from '@app/web/js/electricity/Add';

class ElectricityBills extends Component {
    constructor(props){
        super(props);
        this.state = {
            form: false,
            bills: [],
            from: '',
            to: '',
            searchNum: '',
            loading: false,
            add: false,
            columns: [
                {
                    title: this.props.t('land._'),
                    dataIndex: 'num',
                    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
                    onFilter: (value, record) => record.num ? record.num.toString().toLowerCase().includes(value.toLowerCase()) : '',
                    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                        <div>
                        <Input.Group compact style={{ padding: 8 }}>
                            <Input
                              value={selectedKeys[0]}
                              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                              onPressEnter={() => {this.searchNum(selectedKeys, confirm)}}
                              style={{ width: 'calc(100% - 40px)' }}
                            />
                            <Button icon={<CloseCircleOutlined />} onClick={() => {setSelectedKeys([]);this.searchNum([], confirm);}} />        
                        </Input.Group>
                        </div>
                    )
                },
                {
                    title: '',
                    key: 'rate',
                    render: (text, record) => {
                        return <React.Fragment>
                            <div>{this.props.t('calendar.day')}</div>
                            <div>{this.props.t('calendar.night')}</div>
                        </React.Fragment>
                    }
                },
                {
                    title: this.props.t('electricity.meter.value_on'),
                    children: [
                        {
                            title: () => this.state.from,
                            key: 'meter_start',
                            align: 'right',
                            render: (text, record) => {
                                return <React.Fragment>
                                    <div><MfwNumber value={record.day_meter_start}/></div>
                                    <div><MfwNumber value={record.night_meter_start}/></div>
                                </React.Fragment>
                            }
                        },
                        {
                            title: () => this.state.to,
                            key: 'meter_end',
                            align: 'right',
                            render: (text, record) => {
                                return <React.Fragment>
                                    <div><MfwNumber value={record.day_meter_end}/></div>
                                    <div><MfwNumber value={record.night_meter_end}/></div>
                                </React.Fragment>
                            }
                        }
                    ]
                },
                {
                    title: this.props.t('electricity.meter.diff'),
                    key: 'meter_diff',
                    align: 'right',
                    render: (text, record) => {
                        return <React.Fragment>
                            <div>
                                <MfwNumber value={record.day_meter_end-record.day_meter_start}/>
                            </div>
                            <div>
                                <MfwNumber value={record.night_meter_end-record.night_meter_start}/>
                            </div>
                        </React.Fragment>
                    }
                },
                {
                    title: this.props.t('electricity.meter.rate'),
                    key: 'meter_rate',
                    align: 'right',
                    render: (text, record) => {
                        return <React.Fragment>
                            <div><MfwNumber value={record.day_rate}/></div>
                            <div><MfwNumber value={record.night_rate}/></div>
                        </React.Fragment>
                    }
                },
                {
                    title: this.props.t('finance.charge'),
                    key: 'meter_amount',
                    align: 'right',
                    render: (text, record) => {
                        return <React.Fragment>
                            <div><MfwNumber value={record.day_amount}/></div>
                            <div><MfwNumber value={record.night_amount}/></div>
                        </React.Fragment>
                    }
                },
                {
                    title: this.props.t('finance.sum'),
                    dataIndex: 'amount',
                    align: 'right',
                    render: (text, record) => {
                        return <MfwNumber value={record.amount}/>
                    }
                },
                {
                    title: this.props.t('finance.payed'),
                    align: 'right',
                    dataIndex: 'payed',
                    render: (text, record) => {
                        return <MfwNumber value={record.payed}/>
                    }
                },
                {
                    title: this.props.t('finance.debt'),
                    dataIndex: 'saldo',
                    align: 'right',
                    render: (text, record) => {
                        return record.amount-record.payed != 0 ? 
                            <MfwNumber value={record.amount-record.payed}/>
                            : null
                    },
                    sorter: (a, b) => (a.amount-a.payed)-(b.amount-b.payed)
                }
            ]
        };
        this.showBills = this.showBills.bind(this);
        this.searchNum = this.searchNum.bind(this);
        this.billsSummary = this.billsSummary.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.electricity.billsForm+'/'+
               (this.props.params.year ? this.props.params.year : 0)+(this.props.params.month ? '/'+this.props.params.month : ''),
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                res.data.form.month.choices.map(choice => {
                    choice.label = this.props.t('calendar.months.'+choice.value);
                });
                this.setState({
                    form: res.data.form
                });
                if (this.props.params.year) {
                    this.showBills({
                        year: this.props.params.year,
                        month: this.props.params.month,
                        _token: res.data.form._token.value
                    });
               }
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

    showBills(values) {
        this.setState({loading: true});
        axios({
            method: 'post',
            url: window.mfwApp.urls.electricity.billsData,
            headers: {
                    'X-Requested-With': 'XMLHttpRequest'
            },
            data: values
        }).then(res => {
            if (res.data.success) {
                var date = moment().set({
                    year: values.year,
                    month: values.month-1,
                    date: 1,
                    hour: 0,
                    minute: 0,
                    second: 0,
                    millisecond: 0
                });
                this.setState(state => {
                    state.bills = res.data.bills,
                    state.loading = false;
                    state.from = date.format(window.mfwApp.formats.datetime);
                    date.add(1, 'month');
                    state.to = date.format(window.mfwApp.formats.datetime);
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

    searchNum(selectedKeys, confirm) {
        confirm();
    }
    
    billsSummary() {
        var sumSaldo = 0,
            sumAmount = 0;
        this.state.bills.map((rec) => {
            sumSaldo+= rec.amount-rec.payed;
            sumAmount+= rec.amount*1;
        });
        return <Table.Summary fixed>
            <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={8} className="text-align-end">
                    <Typography.Text strong>{this.props.t('finance.summary')}</Typography.Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={1} className="text-align-end">
                    <Typography.Text strong>
                        <MfwNumber value={sumAmount}/>
                    </Typography.Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={2} className="text-align-end">
                    <Typography.Text strong>
                        <MfwNumber value={sumSaldo}/>
                    </Typography.Text>
                </Table.Summary.Cell>
            </Table.Summary.Row>
        </Table.Summary>
    }
    
    refresh() {
        this.showBills(this.props.form.getFieldsValue(true));
    }

    render() {
        return this.state.form != false ?
            <React.Fragment>
                <Space plit={<Divider type="vertical" />}> 
                    <Form form={this.props.form}
                      className="mfw-mb-1 mfw-mt-1"
                      onFinish={this.showBills}
                      layout="inline">
                        <Form.Item name="year"
                          label={this.props.t('calendar.year')}
                          initialValue={this.state.form.year.value}
                          rules={[
                               {
                                   required: true,
                                   message: this.props.t('calendar.errors.year_blank')
                               }
                            ]}>
                            <InputNumber/>
                        </Form.Item>
                        <Form.Item name="month"
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
                    <Button onClick={() => this.setState({add: true})}>{this.props.t('electricity.add')}</Button>
                </Space>
                <Table 
                  rowKey="id" 
                  loading={this.state.loading}
                  columns={this.state.columns} 
                  dataSource={this.state.bills}
                  scroll={{ x: 'max-content', y: 600 }}
                  pagination={false}
                  summary={this.billsSummary}/>
                {this.state.add ? <ElectricityAddBill success={this.refresh} close={() => this.setState({add: false})}/> : null}
            </React.Fragment>
        : null;
    }
}

export default useWithParams(useWithForm(withTranslation()(ElectricityBills)));