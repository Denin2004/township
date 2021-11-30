import React, {Component} from 'react';
import { useMatch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import {message, Table, Typography} from 'antd';

import axios from 'axios';

import useWithForm from '@app/hooks/useWithForm';
import useWithParams from '@app/hooks/useWithParams';
import MfwNumber from '@app/mfw/MfwNumber';

class Line extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorCode: 0,
            debt: [],
            loading: true,
            columns: [
                {
                    title: this.props.t('common.name'),
                    dataIndex: 'name'
                },
                {
                    title: <div className="text-align-end">{this.props.t('finance.sum')}</div>,
                    dataIndex: 'amount',
                    render: (text, record) => {
                        return <div className="text-align-end"><MfwNumber value={record.amount}/></div>
                    }
                }
            ]
        };
        this.billsSummary = this.billsSummary.bind(this);
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.township.line.debtData+'/'+this.props.params.line,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    debt: res.data.debt
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
    
    billsSummary() {
        var sumSaldo = 0,
            sumAmount = 0;
        this.state.bills.map((rec) => {
            sumSaldo+= rec.amount-rec.payed;
            sumAmount+= rec.amount*1;
        });
        return <Table.Summary fixed>
            <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={8} className="text-align-end">
                    <Typography.Text strong>{this.props.t('finance.summary')}</Typography.Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={1} className="text-align-end">
                    <Typography.Text strong>
                        <MfwNumber value={sumAmount}/>
                    </Typography.Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={2} className="text-align-end">
                    <Typography.Text strong>
                        <MfwNumber value={sumSaldo}/>
                    </Typography.Text>
                </Table.Summary.Cell>
            </Table.Summary.Row>
        </Table.Summary>
    }

    render() {
        return this.state.form != false ?
            <React.Fragment>
                <Table 
                  rowKey="id" 
                  loading={this.state.loading}
                  columns={this.state.columns} 
                  dataSource={this.state.debt}
                  pagination={false}/>
            </React.Fragment>
        : null;
    }
}

export default useWithParams(useWithForm(withTranslation()(Line)));