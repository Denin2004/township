import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Modal, Spin, message, Descriptions, Table, Form, Input } from 'antd';

import axios from 'axios';

import MfwNumber from '@app/mfw/MfwNumber';
import useWithForm from '@app/hooks/useWithForm';
import Invoice from '@app/web/js/user/Invoice';

class ChargesByType extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            year: new Date().getFullYear(),
            charges: [],
            invoiceID: null,
            columns: [
                {
                    title: this.props.t('common.name'),
                    dataIndex: 'invoice_num',
                    ellipsis: true
                },
                {
                    title: this.props.t('finance.sum'),
                    dataIndex: 'amount',
                    align: 'right',
                    render: (text, record) => {
                        return <a onClick={() => this.setState({invoiceID: record.id})}><MfwNumber value={record.amount}/></a>
                    }
                }
            ]
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

    viewCharges(values) {
        this.setState({year: values.year});  
        this.getCharges(values.year);
    }
    
    render() {
        return <React.Fragment>
            <Modal 
                width={800}
                visible={true}
                closable={false}
                cancelButtonProps={{className: 'd-none'}}
                okText={this.props.t('modal.close')}
                onOk={this.props.close}>
                {this.state.loading ? (
                    <div className="d-flex justify-content-center align-items-center">
                        <Spin/>
                    </div>
                ) : (
                    <Table
                       title={() => this.getForm()}
                       rowKey="id"                    
                       size="small"
                       columns={this.state.columns}
                       dataSource={this.state.charges}
                       scroll={{y: 600 }}
                       pagination={false}
                    />
                    )}
            </Modal>
            {this.state.invoiceID != null ? <Invoice id={this.state.invoiceID} close={() => {this.setState({invoiceID: null})}}/> : null}
        </React.Fragment>
    }
}

export default withTranslation()(useWithForm(ChargesByType));