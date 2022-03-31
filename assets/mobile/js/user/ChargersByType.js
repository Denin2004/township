import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { Toast, Loading, List, Form, Input } from 'antd-mobile';
import axios from 'axios';

import { withTranslation } from 'react-i18next';

import MfwNumber from '@app/mfw/MfwNumber';
import useWithForm from '@app/hooks/useWithFormMobile';

class UserChargesByType extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            charges: [],
            loading: true,
            year: new Date().getFullYear()
        };
        this.getForm = this.getForm.bind(this);
        this.getCharges = this.getCharges.bind(this);
        this.viewCharges = this.viewCharges.bind(this);
    }

    componentDidMount() {
        this.getCharges(this.state.year);
    }
    
    getForm() {
        return <Form 
          form={this.props.form}
          onFinish={this.viewCharges}
          initialValues={{
          year: this.state.year
        }}>
            <Form.Item 
              label={this.props.t('calendar.year')}
              layout="horizontal"
              className="mfw-charges-year"
              name="year"
              rules={[{ required: true, message: this.props.t('calendar.errors.year_blank')}]}>
                <Input/>
            </Form.Item>            
        </Form>;
    }
    
    getCharges(year) {
        axios.get(
           window.mfwApp.urls.township.user.chargesByType+'/'+this.props.typeID+'/'+year,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState((state) => {
                    state.loading = false;
                    state.charges = res.data.charges;
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
    
    viewCharges(values) {
        this.setState({year: values.year});  
        this.getCharges(values.year);
    }

    render() {
        return this.state.loading ? <Loading/> :
            <List header={this.getForm()}>
               {this.state.charges.map(record => {
                    return <List.Item 
                      key={record.id} 
                      extra={<Link to={generatePath(
                        window.mfwApp.urls.finance.invoice.page+'/:id',
                        { 
                            id: record.id
                        }
                      )}><MfwNumber value={record.amount}/></Link>}>{record.invoice_num}</List.Item>
                })}
            </List>
    }
}

export default withTranslation()(useWithForm(UserChargesByType));