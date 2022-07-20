import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Card, Spin, message, Table } from 'antd';

import axios from 'axios';

import MfwNumber from '@app/mfw/MfwNumber';
import SpendingCreate from '@app/web/js/budget/SpendingCreate';

class BudgetWidget extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            addSpending: false,
            info: null,
            columns: [
                {
                    title: this.props.t('budget._'),
                    dataIndex: 'name'
                },
                {
                    title: this.props.t('finance.sum'),
                    dataIndex: 'amount',
                    align: 'right',
                    render: (text, record) => {
                        return <Link to={generatePath(window.mfwApp.urls.budget.page+'/:id', {id: record.id})} target="_blank">
                               <MfwNumber value={record.amount}/>
                            </Link>
                    }
                }
            ]
        }
        this.budgetOptions = this.budgetOptions.bind(this);
        this.getInfo = this.getInfo.bind(this);
    }

    componentDidMount() {
        this.getInfo();
    }
    
    getInfo() {
        axios.get(
            window.mfwApp.urls.budget.widget,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState(state => {
                    state.loading = false;
                    state.info = res.data.info;
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

    budgetOptions() {
        var opt = [];
        this.state.info.map( (bd, i) => {
            opt.push({label: bd.name, value: i});
        });
        return opt;
    }

    render() {
        return <Card title={this.props.t('budget.for_year')} className="mfw-budget-widget">
            {this.state.loading ? (
                <div className="d-flex justify-content-center align-items-center">
                    <Spin/>
                </div>
            ) : (
                this.state.info.length == 0 ? <span>{this.props.t('budget.no_current')}</span>  : 
                    <React.Fragment>
                        <Table rowKey="id" 
                           pagination={false}
                           columns={this.state.columns} 
                           dataSource={this.state.info}/>
                        { window.mfwApp.user.security.routes['budget.spending'].access ?
                            <a onClick={() => this.setState({addSpending: true})}>{this.props.t('budget.spendings.add')}</a> : null }
                    </React.Fragment>
            )}
            {this.state.addSpending ? <SpendingCreate cancel={() => this.setState({addSpending: false})} success={this.getInfo}/>: null}
        </Card>
    }
    
}

export default withTranslation()(BudgetWidget);