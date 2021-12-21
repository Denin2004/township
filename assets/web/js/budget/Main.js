import React, {Component} from 'react';
//import { useMatch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import {message, Table, Select, Space, Button, Modal} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import axios from 'axios';
import moment from 'moment-timezone';

import useWithForm from '@app/hooks/useWithForm';
import useWithParams from '@app/hooks/useWithParams';
import MfwNumber from '@app/mfw/MfwNumber';
import EditItem from'@app/web/js/budget/EditItem';
import CreateItem from'@app/web/js/budget/CreateItem';

class Budgets extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: false,
            loading: false,
            budget: [],
            budgetID: null,
            editItem: null,
            createItem: null,
            columns: [
                {
                    title: this.props.t('budget.item._'),
                    dataIndex: 'name'
                },
                {
                    title: this.props.t('budget.planned_expense'),
                    children: [
                        {
                            title: () => this.props.t('budget.month'),
                            key: 'month',
                            align: 'right',
                            render: (text, record) => {
                                return record.by_month ? <MfwNumber value={record.amount}/> : null
                            }
                        },
                        {
                            title: () => this.props.t('budget.period'),
                            key: 'amount',
                            align: 'right',
                            render: (text, record) => {
                                return <MfwNumber value={record.by_month ? record.amount*record.months : record.amount}/>
                            }
                        },
                        {
                            title: () => this.props.t('budget.tax'),
                            dataIndex: 'tax',
                            align: 'right',
                            render: (text, record) => {
                                return record.tax != null ? <MfwNumber value={record.tax}/> : null
                            }
                        }
                    ]
                },
                {
                    title: this.props.t('common.comments'),
                    dataIndex: 'comments'
                },
                {
                    title: this.props.t('action.s'),
                    key: 'actions',
                    render: (text, record) => {
                        return record.tax != null ? <Space>
                            <a onClick={() => this.setState({editItem: record.id})} >{this.props.t('action.edit')}</a>
                            <a onClick={() => this.deleteItem(record.id)}>{this.props.t('action.delete')}</a>
                        </Space> : <Space>
                            <a onClick={() => this.setState({editItem: record.id})}>{this.props.t('action.edit')}</a>
                            <a onClick={() => this.setState({createItem: record.id})}>{this.props.t('budget.add_child')}</a>
                            <a onClick={() => this.deleteItem(record.id)}>{this.props.t('action.delete')}</a>
                        </Space>
                    }
                }                
            ]
        };
        this.showBudget = this.showBudget.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.budget.list,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    list: res.data.list
                });
                if (res.data.list.default != 0) {
                    this.showBudget(res.data.list.default);
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

    showBudget(budgetID) {
        this.setState({
            loading: true
        });
        axios({
            method: 'get',
            url: window.mfwApp.urls.budget.data+'/'+budgetID,
            headers: {
                    'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(res => {
            if (res.data.success) {
                this.setState({
                    loading: false,
                    budgetID: budgetID,
                    budget: res.data.budget
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
    
    deleteItem(id) {
        Modal.confirm({
            content: this.props.t('budget.item.confirm'),
            okText: this.props.t('modal.yes'),
            cancelText: this.props.t('modal.cancel'),
            icon: <ExclamationCircleOutlined />,
            onOk: () => {
                axios({
                    method: 'get',
                    url: window.mfwApp.urls.budget.item.delete+'/'+id,
                    headers: {
                            'X-Requested-With': 'XMLHttpRequest'
                    }
                }).then(res => {
                    if (res.data.success) {
                        this.showBudget(this.state.budgetID)  
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
        });
    }
    

    render() {
        return this.state.list != false ?
            <React.Fragment>
                <Space>
                    {this.props.t('budget._')}
                    <Select options={this.state.list.options} defaultValue={this.state.list.default}/>
                    <Button type="primary" onClick={() => this.setState({createItem: -1})}>{this.props.t('budget.item.add_to_root')}</Button>
                </Space>
                <Table 
                  rowKey="id" 
                  loading={this.state.loading}
                  columns={this.state.columns} 
                  dataSource={this.state.budget}
                  scroll={{ x: 'max-content', y: 600 }}
                  pagination={false}/>
                {this.state.editItem != null ? <EditItem
                    id={this.state.editItem} 
                    cancel={() => this.setState({editItem: null})}
                    success={() => this.showBudget(this.state.budgetID)}/> : null}
                {this.state.createItem != null ? <CreateItem
                    budgetID={this.state.budgetID} 
                    parentID={this.state.createItem}
                    cancel={() => this.setState({createItem: null})}
                    success={() => this.showBudget(this.state.budgetID)}/> : null}
                    
            </React.Fragment>
        : null;
    }
}

export default useWithForm(withTranslation()(Budgets));