import React, {Component} from 'react';
//import { useMatch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import {message, Table, Typography} from 'antd';

import axios from 'axios';
import moment from 'moment-timezone';

import useWithParams from '@app/hooks/useWithParams';
import MfwNumber from '@app/mfw/MfwNumber';
import Invoice from '@app/web/js/user/Invoice';

class LandByType extends Component {
    constructor(props){
        super(props);
        this.state = {
            debt: [],
            loading: true,
            invoiceID: null,
            columns: [
                {
                    title: this.props.t('finance.invoice.num'),
                    dataIndex: 'invoice_num'
                },
                {
                    title: this.props.t('finance.sum'),
                    dataIndex: 'amonut',
                    align: 'right',
                    render: (text, record) => {
                        return <MfwNumber value={record.amount}/>
                    }
                },
                {
                    title: this.props.t('finance.payed'),
                    dataIndex: 'payed',
                    align: 'right',
                    render: (text, record) => {
                        return <MfwNumber value={record.payed}/>
                    }
                },
                {
                    title: this.props.t('finance.debt'),
                    dataIndex: 'debt',
                    align: 'right',
                    render: (text, record) => {
                        return <a onClick={()=> this.setState({invoiceID: record.id})}><MfwNumber value={record.debt}/></a>
                    }
                }                
            ]
        };
        this.landSummary = this.landSummary.bind(this);
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.township.land.debtTypeData+'/'+this.props.params.land_id+'/'+this.props.params.type_id,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    debt: res.data.debt,
                    loading: false
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
    
    landSummary() {
        var sumAmount = 0;
        this.state.debt.map((rec) => {
            sumAmount+= rec.debt*1;
        });
        return <Table.Summary fixed>
            <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={3} className="text-align-end">
                    <Typography.Text strong>{this.props.t('finance.summary')}</Typography.Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={1} className="text-align-end">
                    <Typography.Text strong>
                        <MfwNumber value={sumAmount}/>
                    </Typography.Text>
                </Table.Summary.Cell>
            </Table.Summary.Row>
        </Table.Summary>
    }

    render() {
        return  <React.Fragment>
            <Table 
            title={() => <Typography.Text strong>{this.props.t('land._')+' '+this.props.params.land_id}</Typography.Text>}
              rowKey="id" 
              loading={this.state.loading}
              columns={this.state.columns} 
              dataSource={this.state.debt}
              summary={this.landSummary}
              pagination={false}/>
            {this.state.invoiceID != null ? <Invoice id={this.state.invoiceID} close={() => {this.setState({invoiceID: null})}}/> : null}
        </React.Fragment>
    }
}

export default useWithParams(withTranslation()(LandByType));