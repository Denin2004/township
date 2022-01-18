import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { Toast, Loading, List, Popup } from 'antd-mobile';

import axios from 'axios';
import { withTranslation } from 'react-i18next';

import MfwNumber from '@app/mfw/MfwNumber';
import useWithParams from '@app/hooks/useWithParams';

class Invoice extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            invoice: null
        };
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.finance.invoice.data+'/'+this.props.params.id,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    loading: false,
                    invoice: res.data.invoice
                });            
            } else {
                Toast.show({
                    icon: 'fail',
                    content:this.props.t(res.data.error)
                });
            }
        }).catch(error => {
            if (error.response) {
                Toast.show({
                    icon: 'fail',
                    content: error.response.status
                });
            } else {
                Toast.show({
                    icon: 'fail',
                    content:this.props.t(error.toString())
                });
            }
        });
    }

    render() {
        console.log(this.state);
        return this.state.loading ? <Loading/> :
            <React.Fragment>
                {this.state.invoice.chargeType == 1 ?
                <List header={this.state.invoice.num}>
                    <List.Item key={1} extra={<MfwNumber value={this.state.invoice.amount}/>}>{this.props.t('finance.sum')}</List.Item>
                    <List.Item key={2} extra={<MfwNumber value={this.state.invoice.payed}/>}>{this.props.t('finance.payed')}</List.Item>
                    <List.Item key={3} extra={<MfwNumber value={this.state.invoice.amount-this.state.invoice.payed}/>}>{this.props.t('finance.debt')}</List.Item>
                    <List.Item key={4}>
                        <List header={this.props.t('finance.charge')}>
                            <List.Item key={1} extra={<MfwNumber value={this.state.invoice.day}/>}>{this.props.t('calendar.day')}</List.Item>
                            <List.Item key={2} extra={<MfwNumber value={this.state.invoice.night}/>}>{this.props.t('calendar.night')}</List.Item>
                        </List>
                    </List.Item>
                </List>
                : null}
                {this.state.invoice.chargeType == 2 ?
                <List header={this.props.t('calendar.months.'+this.state.invoice.month)+' '+this.state.invoice.year+' '+this.state.invoice.budgetName }>
                    <List.Item key={0} extra={<MfwNumber value={this.state.invoice.square}/>}>{this.props.t('land.square')}</List.Item>
                    <List.Item key={1} extra={<MfwNumber value={this.state.invoice.amount}/>}>{this.props.t('finance.sum')}</List.Item>
                    <List.Item key={2} extra={<MfwNumber value={this.state.invoice.payed}/>}>{this.props.t('finance.payed')}</List.Item>
                    <List.Item key={3} extra={<MfwNumber value={this.state.invoice.amount-this.state.invoice.payed}/>}>{this.props.t('finance.debt')}</List.Item>
                </List>
                : null}
            </React.Fragment>
    }
}

export default useWithParams(withTranslation()(Invoice));