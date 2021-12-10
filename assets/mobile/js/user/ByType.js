import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { Toast, Loading, List, Popup } from 'antd-mobile';
import axios from 'axios';

import { withTranslation } from 'react-i18next';

import MfwNumber from '@app/mfw/MfwNumber';

class UserByType extends Component {
    constructor(props){
        super(props);
        this.state = {
            debt: [],
            loading: true,
            viewInvoice: null
        };
    }

    componentDidMount() {
        axios.get(
           window.mfwApp.urls.township.user.debtType+'/'+this.props.typeID,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState((state) => {
                    state.loading = false;
                    state.debt = res.data.debt;
                    return state;
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
        return this.state.loading ? <Loading/> :
            <React.Fragment>
                <List>
                   {this.state.debt.map(record => {
                        return <List.Item key={record.id} extra={<a onClick={() => this.setState({viewInvoice: record})}><MfwNumber value={record.debt}/></a>}>{record.invoice_num}</List.Item>
                    })}
                </List>
                {this.state.viewInvoice != null ? <Popup visible={true} onMaskClick={() => this.setState({viewInvoice: null})}>
                    <List>
                        <List.Item key={1} extra={<MfwNumber value={this.state.viewInvoice.amount}/>}>{this.props.t('finance.sum')}</List.Item>
                        <List.Item key={2} extra={<MfwNumber value={this.state.viewInvoice.payed}/>}>{this.props.t('finance.payed')}</List.Item>
                        <List.Item key={3} extra={<MfwNumber value={this.state.viewInvoice.debt}/>}>{this.props.t('finance.debt')}</List.Item>
                    </List>
                </Popup> : null}
            </React.Fragment>
    }
}

export default withTranslation()(UserByType);