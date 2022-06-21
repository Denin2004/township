import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { Toast, Loading, List, Tag } from 'antd-mobile';
import axios from 'axios';

import { withTranslation } from 'react-i18next';

import MfwNumber from '@app/mfw/MfwNumber';
import Payment from '@app/mobile/js/user/Payment';

class UserByType extends Component {
    constructor(props){
        super(props);
        this.state = {
            debt: [],
            loading: true,
            payment: null
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
                    return <List.Item 
                      key={record.id} 
                      extra={<Link to={generatePath(
                        window.mfwApp.urls.finance.invoice.page+'/:id',
                        { 
                            id: record.id
                        }
                      )}><MfwNumber value={record.debt}/></Link>}
                       description={<Tag color='primary' fill='outline' onClick={() => this.setState({payment: record})}>{this.props.t('finance.pay._')}</Tag>}>{record.invoice_num}</List.Item>
                })}
            </List>
            {this.state.payment !== null ? <Payment 
                chargeTypeID="-1" 
                invoiceID={this.state.payment.id} 
                caption={this.state.payment.invoice_num} 
                close={() => this.setState({payment: null})}/> : null}
            </React.Fragment>
    }
}

export default withTranslation()(UserByType);