import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Card, Toast, Loading, Space, List, Collapse, Picker, Button } from 'antd-mobile';

import axios from 'axios';

import MfwNumber from '@app/mfw/MfwNumber';
import UserByType from '@app/mobile/js/user/ByType';

class BudgetWidget extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            budgetIndex: null,
            info: null,
            picker: false
        }
        this.budgetOptions = this.budgetOptions.bind(this);
    }

    componentDidMount() {
        axios.get(
             window.mfwApp.urls.budget.widget,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                console.log(res.data);
                this.setState(state => {
                    state.loading = false;
                    state.info = res.data.info;
                    state.budgetIndex = res.data.info.length > 0 ? 0 : null;
                    return state;
                });
            } else {
                Toast.show({
                    icon: 'fail',
                    content:this.props.t(res.data.error)
                });
            }
        }).catch(error => {
            if (error.response && error.response.data) {
                Toast.show({
                    icon: 'fail',
                    content:this.props.t(error.response.data.error)
                });
            } else {
                Toast.show({
                    icon: 'fail',
                    content:this.props.t(error.toString())
                });
            }
        });
    }

    budgetOptions() {
        var opt = [];
        this.state.info.map( (bd, i) => {
            opt.push({label: bd.name, value: i});
        });
        return [opt];
    }

    render() {
        return <Card title={this.props.t('budget._')}>
            {this.state.loading ? (
                <Space className="mfw-d-flex" justify="center">
                    <Loading/>
                </Space>
            ) : (
               <React.Fragment>
                    <div>
                        <Button
                          color='primary'
                          onClick={() => this.setState({picker: true})}
                          fill='none'>{this.state.info[this.state.budgetIndex].name}</Button>
                        <Picker
                          visible={this.state.picker}
                          onClose={() => this.setState({picker: false})}
                          columns={this.budgetOptions}
                          onConfirm={(v) => this.setState({picker:false, budgetIndex: v})}
                          confirmText={this.props.t('modal.set')}
                          cancelText={this.props.t('modal.cancel')}
                          value={[this.state.budgetIndex]}/>
                    </div>
                    <List>
                        <List.Item 
                          key={1} 
                          extra={<MfwNumber value={this.state.info[this.state.budgetIndex].amount}/>}>{this.props.t('finance.sum')}</List.Item>
                        <List.Item 
                          key={2} 
                          extra={<MfwNumber value={this.state.info[this.state.budgetIndex].accrued}/>}>{this.props.t('budget.accrued')}</List.Item>
                        <List.Item 
                          key={3} 
                          extra={<MfwNumber value={this.state.info[this.state.budgetIndex].collected}/>}>{this.props.t('budget.collected')}</List.Item>
                        <List.Item 
                          key={4} 
                          extra={<MfwNumber value={this.state.info[this.state.budgetIndex].spent}/>}>{this.props.t('budget.spent')}</List.Item>
                    </List>
               </React.Fragment>
            )}
        </Card>
    }
}

export default withTranslation()(BudgetWidget);