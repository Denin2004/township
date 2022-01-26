import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Modal, Spin, message, Descriptions, Table } from 'antd';

import axios from 'axios';
import moment from 'moment-timezone';

import MfwNumber from '@app/mfw/MfwNumber';

class Invoice extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            columns: [
                {
                    title: this.props.t('common.type'),
                    dataIndex: 'itemName',
                    ellipsis: true
                },
                {
                    title: this.props.t('budget.tax'),
                    dataIndex: 'tax',
                    align: 'right',
                    render: (text, record) => {
                        return <MfwNumber value={record.tax}/>
                    }
                },
                {
                    title: this.props.t('finance.sum'),
                    key: 'sum',
                    align: 'right',
                    render: (text, record) => {
                        return <MfwNumber value={record.square*record.tax*(1-record.discount)}/>
                    }
                },
                {
                    title: this.props.t('finance.discount'),
                    dataIndex: 'discount',
                    align: 'right',
                    render: (text, record) => { 
                        return record.discount*1 == 1 ? null :  <MfwNumber value={record.square*record.tax*record.discount}/>
                    }
                }
            ]
        };
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.finance.invoice.data+'/'+this.props.id,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    invoice: res.data.invoice,
                    loading: false
                })
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

    render() {
        return <Modal title={this.state.loading ? this.props.t('finance.invoice.num') : 
                this.state.invoice.chargeName+' '+moment(this.state.invoice.month+'.'+this.state.invoice.year, 'MM.YYYY').format('MMMM YYYY').toUpperCase()}
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
            <React.Fragment>
               {this.state.invoice.chargeType == 1 ?
                <Descriptions>
                    <Descriptions.Item label={this.props.t('finance.sum')}><MfwNumber value={this.state.invoice.amount}/></Descriptions.Item>
                    <Descriptions.Item label={this.props.t('finance.payed')}><MfwNumber value={this.state.invoice.payed}/></Descriptions.Item>
                    <Descriptions.Item label={this.props.t('finance.debt')}><MfwNumber value={this.state.invoice.amount-this.state.invoice.payed}/></Descriptions.Item>
                    <Descriptions.Item label={this.props.t('common.included')} span={3}></Descriptions.Item>
                    <Descriptions.Item label={this.props.t('calendar.day')}><MfwNumber value={this.state.invoice.day}/></Descriptions.Item>
                    <Descriptions.Item label={this.props.t('calendar.night')}><MfwNumber value={this.state.invoice.night}/></Descriptions.Item>
                </Descriptions>
               : null}
               {this.state.invoice.chargeType == 2 ?
               <React.Fragment>
                    <Descriptions>
                        <Descriptions.Item label={this.props.t('finance.sum')}><MfwNumber value={this.state.invoice.amount}/></Descriptions.Item>
                        <Descriptions.Item label={this.props.t('finance.payed')}><MfwNumber value={this.state.invoice.payed}/></Descriptions.Item>
                        <Descriptions.Item label={this.props.t('finance.debt')}><MfwNumber value={this.state.invoice.amount-this.state.invoice.payed}/></Descriptions.Item>
                        <Descriptions.Item label={this.props.t('land.square')} ><MfwNumber value={this.state.invoice.square}/></Descriptions.Item>
                    </Descriptions>
                    <Table
                       rowKey="itemID"                    
                       size="small"
                       columns={this.state.columns}
                       dataSource={this.state.invoice.specs}
                       scroll={{y: 600 }}
                       pagination={false}
                    />
                </React.Fragment>
               : null}
            </React.Fragment>
            )}
        </Modal>
    }
}

export default withTranslation()(Invoice);