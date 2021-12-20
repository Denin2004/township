import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { Toast, Loading, List, Popup } from 'antd-mobile';
import axios from 'axios';

import { withTranslation } from 'react-i18next';

import MfwNumber from '@app/mfw/MfwNumber';
import useWithParams from '@app/hooks/useWithParams';

class LandByType extends Component {
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
            window.mfwApp.urls.township.land.debtTypeData+'/'+
              (this.props.land_id ? this.props.land_id : this.props.params.land_id)+'/'+
              (this.props.charge_type_id ? this.props.charge_type_id : this.props.params.charge_type_id),
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
                        switch (record.charge_type_id) {
                            case 2:
                                record.invoice_num = record.name+' '+moment().set({month: record.month,year: record.year}).format('MMMM YYYY');
                        }    
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

export default useWithParams(withTranslation()(LandByType));