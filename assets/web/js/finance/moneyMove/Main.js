import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import { Link, generatePath } from 'react-router-dom';
import {message, Table, Typography, DatePicker, Form, Button, Input, Space, Popconfirm} from 'antd';
import { SearchOutlined, CloseCircleOutlined } from '@ant-design/icons';

import axios from 'axios';
import moment from 'moment-timezone';

import useWithForm from '@app/hooks/useWithForm';
import useWithParams from '@app/hooks/useWithParams';
import MfwNumber from '@app/mfw/MfwNumber';
import Edit from'@app/web/js/finance/moneyMove/Edit';
import Create from'@app/web/js/finance/moneyMove/Create';

class FinanceMoneyMove extends Component {
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
                    dataIndex: 'type_name',
                    onFilter: (value, record) => record.type_name.toString().toLowerCase() == value.toLowerCase(),
                    filters: [],
                    render: (text, record) => {
                        return record.amount_in == 0 ? this.props.t(text) : text
                    }
                },
                {
                    title: this.props.t('land._'),
                    dataIndex: 'num',
                    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
                    onFilter: (value, record) => record.num != null ? record.num.toString().toLowerCase() == value.toLowerCase() : false,
                    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                        <div>
                        <Input.Group compact style={{ padding: 8 }}>
                            <Input
                              value={selectedKeys[0]}
                              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                              onPressEnter={() => {this.searchConfirm(selectedKeys, confirm)}}
                              style={{ width: 'calc(100% - 40px)' }}
                            />
                            <Button icon={<CloseCircleOutlined />} onClick={() => {setSelectedKeys([]);this.searchConfirm([], confirm);}} />
                        </Input.Group>
                        </div>
                    )
                },
                {
                    title: this.props.t('common.comment'),
                    dataIndex: 'comment'
                },                
                {
                    title: this.props.t('finance.in'),
                    dataIndex: 'amount_in',
                    align: 'right',
                    render: (text, record) => {
                        return record.amount_in == 0 ? null : <MfwNumber value={record.amount_in}/>
                    }
                },
                {
                    title: this.props.t('finance.out'),
                    dataIndex: 'amount_out',
                    align: 'right',
                    render: (text, record) => {
                        return record.amount_out == 0 ? null : <MfwNumber value={record.amount_out}/>
                    }
                },
                {
                    title: this.props.t('action.s'),
                    key: 'actions',
                    render: (text, record) => {
                        return <Space>
                            <a onClick={() => this.setState({editRecord: record})} >{this.props.t('action.edit')}</a>
                            <Popconfirm
                              title={this.props.t('common.confirm_delete')}
                              onConfirm={() => {this.deleteRecord(record)}}
                              okText={this.props.t('modal.yes')}
                              cancelText={this.props.t('modal.cancel')}>
                                <a>{this.props.t('action.delete')}</a>
                            </Popconfirm>
                        </Space>
                    }
                }
            ]
        };
        this.showData = this.showData.bind(this);
        this.deleteRecord = this.deleteRecord.bind(this);
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.finance.moneyMove.filterForm,
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
            url: window.mfwApp.urls.finance.moneyMove.data,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            data: values
        }).then(res => {
            if (res.data.success) {
                this.setState((state) => {
                    state.loading = false;
                    res.data.moneyMove.map((record) => {
                        record.type_name = record.num == null ? 
                          this.props.t(record.type_name) : record.type_name;
                    });
                    state.data = res.data.moneyMove;
                    state.columns[1].filters = res.data.moneyMove
                            .filter((v, i, a)=> a.findIndex(t=> (t.type_name===v.type_name))===i)
                            .map(rec => {return {text: rec.type_name, value: rec.type_name}});
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

    searchConfirm(selectedKeys, confirm) {
        confirm();
    }
    
    deleteRecord(record) {
        axios({
            method: 'get',
            url: generatePath(
                    window.mfwApp.urls.finance.moneyMove.delete+'/:table/:id', 
                    { table: record.table, id: record.id}
                ),
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
        }).then(res => {
            if (res.data.success) {
                this.props.form.submit();
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
            {this.state.editRecord != null ? <Edit
                    id={this.state.editRecord.id}
                    table={this.state.editRecord.table}
                    cancel={() => this.setState({editRecord: null})}
                    success={() => {this.setState({editRecord: null});this.props.form.submit();}}/> : null}
            {this.state.createItem != null ? <Create
                    cancel={() => this.setState({createItem: null})}
                    success={() => {this.setState({createItem: null});this.props.form.submit();}}/> : null}              
        </React.Fragment> : null
    }
}

export default useWithParams(useWithForm(withTranslation()(FinanceMoneyMove)));