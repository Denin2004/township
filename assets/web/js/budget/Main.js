import React, {Component} from 'react';
import { generatePath } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import {message, Table, Select, Space, Button, Modal, Menu, Dropdown} from 'antd';
import { ExclamationCircleOutlined, DownOutlined } from '@ant-design/icons';

import axios from 'axios';
import moment from 'moment-timezone';

import useWithForm from '@app/hooks/useWithForm';
import useWithParams from '@app/hooks/useWithParams';
import MfwNumber from '@app/mfw/MfwNumber';
import ItemEdit from'@app/web/js/budget/ItemEdit';
import ItemCreate from'@app/web/js/budget/ItemCreate';
import ItemSpending from'@app/web/js/budget/ItemSpending';

class Budgets extends Component {
    constructor(props){
        super(props);
        const bookkeeping = window.mfwApp.user.widgets.includes('bookkeeping._');
        this.state = {
            list: false,
            loading: false,
            budget: [],
            budgetID: null,
            editItem: null,
            createItem: null,
            spendingItem: null,
            columns: [
                {
                    title: this.props.t('budget.item._'),
                    dataIndex: 'name',
                    width: '30%',
                    ellipsis: true,
                    render: (text, record) => {
                        return bookkeeping ? '('+record.id+')  '+text: text;
                    }
                },
                {
                    title: this.props.t('budget.planned_expense'),
                    children: [
                        {
                            title: () => this.props.t('budget.month'),
                            key: 'month',
                            align: 'right',
                            width: 100,
                            render: (text, record) => {
                                return record.by_month ? <MfwNumber value={record.amount}/> : null
                            }
                        },
                        {
                            title: () => this.props.t('budget.period'),
                            key: 'amount',
                            align: 'right',
                            width: 150,
                            render: (text, record) => {
                                return <MfwNumber value={record.by_month ? record.amount*record.months : record.amount}/>
                            }
                        },
                        {
                            title: () => this.props.t('budget.tax'),
                            dataIndex: 'tax',
                            align: 'right',
                            width: 150,
                            render: (text, record) => {
                                return record.tax != null ? <MfwNumber value={record.tax}/> : null
                            }
                        }
                    ]
                },
                {
                    title: this.props.t('common.comments'),
                    dataIndex: 'comments',
                    ellipsis: true,
                    width: '30%'
                },
                {
                    title: this.props.t('budget.spent'),
                    dataIndex: 'spent',
                    align: 'right',
                    width: 150,
                    render: (text, record) => {
                        return record.spent != null ? <a onClick={() => this.setState({spendingItem: record.id})} >
                            <MfwNumber value={record.spent}/>
                        </a>: null
                    }
                },
                {
                    title: this.props.t('action.s'),
                    key: 'actions',
                    render: (text, record) => {
                        return window.mfwApp.user.security.routes['budget.edit'].access ? this.actions(record) : null
                    },
                    fixed: 'right',
                    width: 100
                }                
            ].filter(col => col != undefined ? 
               (col.key == 'actions' ? window.mfwApp.user.security.routes['budget.edit'].access
                  : (col.dataIndex == 'spent' ? window.mfwApp.user.security.routes['budget.spending'].access : true) )
               : true)
        };
        this.showBudget = this.showBudget.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.actions = this.actions.bind(this);
    }

    actions(record) {
        return (record.tax != null ? <Dropdown overlay={
                <Menu>
                    <Menu.Item key={1}>
                        <a onClick={() => this.setState({editItem: record.id})} >{this.props.t('action.edit')}</a>
                    </Menu.Item>
                    <Menu.Item key={2}>
                        <a onClick={() => this.deleteItem(record.id)}>{this.props.t('action.delete')}</a>
                     </Menu.Item>
                </Menu>}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()} >{this.props.t('action.s')}<DownOutlined /></a>
            </Dropdown> : <Dropdown overlay={
            <Menu>
                <Menu.Item key={1}>
                    <a onClick={() => this.setState({editItem: record.id})}>{this.props.t('action.edit')}</a>
                </Menu.Item>
                <Menu.Item key={2}>
                    <a onClick={() => this.setState({createItem: record.id})}>{this.props.t('budget.add_child')}</a>
                </Menu.Item>
                <Menu.Item key={3}>
                    <a onClick={() => this.deleteItem(record.id)}>{this.props.t('action.delete')}</a>
                </Menu.Item>
            </Menu>}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()} >{this.props.t('action.s')}<DownOutlined /></a>
        </Dropdown>);
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
                res.data.list.default = this.props.params.id ? this.props.params.id*1 : res.data.list.default;
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
            url: generatePath(window.mfwApp.urls.budget.data+'/:budgetID', {budgetID: budgetID}),
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
                    url: generatePath(window.mfwApp.urls.budget.item.delete+'/:id', {id: id}),
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
                    <Select 
                       options={this.state.list.options} 
                       defaultValue={this.state.list.default}
                       onChange={(value) => this.showBudget(value)}/>
                    { window.mfwApp.user.security.routes['budget.edit'].access ?
                        <Button type="primary" onClick={() => this.setState({createItem: -1})}>{this.props.t('budget.item.add_to_root')}</Button>
                    : null }
                </Space>
                <Table 
                  rowKey="id" 
                  loading={this.state.loading}
                  columns={this.state.columns} 
                  dataSource={this.state.budget}
                  scroll={{ x: '100%', y: 600 }}
                  pagination={false}/>
                {this.state.editItem !== null ? <ItemEdit
                    id={this.state.editItem} 
                    cancel={() => this.setState({editItem: null})}
                    success={() => this.showBudget(this.state.budgetID)}/> : null}
                {this.state.createItem != null ? <ItemCreate
                    budgetID={this.state.budgetID} 
                    parentID={this.state.createItem}
                    cancel={() => this.setState({createItem: null})}
                    success={() => this.showBudget(this.state.budgetID)}/> : null}
                {this.state.spendingItem != null ? <ItemSpending
                    id={this.state.spendingItem} 
                    cancel={() => this.setState({spendingItem: null})}/> : null}                    
            </React.Fragment>
        : null;
    }
}

export default useWithParams(useWithForm(withTranslation()(Budgets)));