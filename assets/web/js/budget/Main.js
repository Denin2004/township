import React, {Component} from 'react';
//import { useMatch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import {message, Table, Select, Space} from 'antd';
import { SearchOutlined, CloseCircleOutlined } from '@ant-design/icons';

import axios from 'axios';
import moment from 'moment-timezone';

import useWithForm from '@app/hooks/useWithForm';
import useWithParams from '@app/hooks/useWithParams';
import MfwNumber from '@app/mfw/MfwNumber';
import EditItem from'@app/web/js/budget/EditItem';

class Budgets extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorCode: 0,
            list: false,
            loading: false,
            budget: [],
            budgetID: null,
            editItem: null,
            columns: [
                {
                    title: this.props.t('budget.item._'),
                    dataIndex: 'name'
                },
                {
                    title: this.props.t('budget.planned_expense'),
                    children: [
                        {
                            title: () => {return <div className="text-align-end">{this.props.t('budget.month')}</div>},
                            key: 'month',
                            render: (text, record) => {
                                return record.by_month ? <div className="text-align-end"><MfwNumber value={record.amount}/></div> : null
                            }
                        },
                        {
                            title: () => {return <div className="text-align-end">{this.props.t('budget.period')}</div>},
                            key: 'amount',
                            render: (text, record) => {
                                return <div className="text-align-end"><MfwNumber value={record.by_month ? record.amount*record.months : record.amount}/></div>
                            }
                        },
                        {
                            title: () => {return <div className="text-align-end">{this.props.t('budget.tax')}</div>},
                            dataIndex: 'tax',
                            render: (text, record) => {
                                return record.tax != null ? <div className="text-align-end"><MfwNumber value={record.tax}/></div> : null
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
                            <a >{this.props.t('action.delete')}</a>
                        </Space> : <Space>
                            <a onClick={() => this.setState({editItem: record.id})}>{this.props.t('action.edit')}</a>
                            <a >{this.props.t('budget.add_child')}</a>
                            <a >{this.props.t('action.delete')}</a>
                        </Space>
                    }
                }                
            ]
        };
        this.showBudget = this.showBudget.bind(this);
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
            if (error.response) {
                this.setState({
                    errorCode: error.response.status
                });
            } else {
                message.error(error.toString());
            }
        });
    }

    showBudget(budgetID) {
        this.setState({
            loading: true,
            editItem: null
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
        return this.state.list != false ?
            <React.Fragment>
                <Select options={this.state.list.options} defaultValue={this.state.list.default}/>
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
            </React.Fragment>
        : null;
    }
}

export default useWithForm(withTranslation()(Budgets));