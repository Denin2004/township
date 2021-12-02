import React, {Component} from 'react';
import { useMatch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import {message, Table, Typography} from 'antd';

import axios from 'axios';

import useWithParams from '@app/hooks/useWithParams';
import MfwNumber from '@app/mfw/MfwNumber';

class LandByType extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorCode: 0,
            debt: [],
            loading: true,
            columns: [
                {
                    title: this.props.t('finance.invoice.num'),
                    dataIndex: 'invoice_num'
                },
                {
                    title: <div className="text-align-end">{this.props.t('finance.sum')}</div>,
                    dataIndex: 'amonut',
                    render: (text, record) => {
                        return <div className="text-align-end"><MfwNumber value={record.amount}/></div>
                    }
                },
                {
                    title: <div className="text-align-end">{this.props.t('finance.payed')}</div>,
                    dataIndex: 'payed',
                    render: (text, record) => {
                        return <div className="text-align-end"><MfwNumber value={record.payed}/></div>
                    }
                },
                {
                    title: <div className="text-align-end">{this.props.t('finance.debt')}</div>,
                    dataIndex: 'debt',
                    render: (text, record) => {
                        return <div className="text-align-end"><MfwNumber value={record.debt}/></div>
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
            if (error.response) {
                this.setState({
                    errorCode: error.response.status
                });
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
        </React.Fragment>
    }
}

export default useWithParams(withTranslation()(LandByType));