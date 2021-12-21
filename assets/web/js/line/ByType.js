import React, {Component} from 'react';
//import { useMatch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import {message, Table, Typography} from 'antd';

import axios from 'axios';
import moment from 'moment-timezone';

import useWithForm from '@app/hooks/useWithForm';
import useWithParams from '@app/hooks/useWithParams';
import MfwNumber from '@app/mfw/MfwNumber';
import Invoice from '@app/web/js/user/Invoice';

class LineByType extends Component {
    constructor(props){
        super(props);
        this.state = {
            debt: [],
            loading: true,
            loadLand: false,
            debtLand: [],
            invoiceID: null,
            columns: [
                {
                    title: this.props.t('land._'),
                    dataIndex: 'num'
                },
                {
                    title: this.props.t('finance.sum'),
                    dataIndex: 'debt',
                    align: 'right',
                    render: (text, record) => {
                        return <MfwNumber value={record.debt}/>
                    }
                }
            ],
            columnsLand: [
                {
                    title: this.props.t('finance.invoice.num'),
                    dataIndex: 'invoice_num',
                    render: (text, record) => {
                        switch (record.charge_type_id) {
                            case 1:
                                return text;
                            case 2:
                                return record.name+' '+moment().set({month: record.month,year: record.year}).format('MMMM YYYY')
                        }
                        return text;
                    }                    
                },
                {
                    title: this.props.t('finance.sum'),
                    dataIndex: 'amonut',
                    align: 'right',
                    render: (text, record) => {
                        return <a onClick={()=> this.setState({invoiceID: record.id})}><MfwNumber value={record.amount}/></a>
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
                        return <MfwNumber value={record.debt}/>
                    }
                }                
            ]
        };
        this.lineSummary = this.lineSummary.bind(this);
        this.debtLand = this.debtLand.bind(this);
        this.debtLandData = this.debtLandData.bind(this);
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.township.line.debtTypeData+'/'+this.props.params.line+'/'+this.props.params.type_id,
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
    
    lineSummary() {
        var sumAmount = 0;
        this.state.debt.map((rec) => {
            sumAmount+= rec.debt*1;
        });
        return <Table.Summary fixed>
            <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={2} className="text-align-end">
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

    debtLand(record) {
        return <Table
            rowKey="id"
            size="small"
            columns={this.state.columnsLand}
            dataSource={this.state.debtLand[record.id]}
            pagination={false}
            loading={this.state.loadLand}/>;
    }

    debtLandData(expanded, record) {
        if (expanded === false) {
            this.setState((state) => {
                state.loadLand = false;
                delete state.debtLand[record.id];
                return state;
            });            
            return;
        }
        this.setState({loadLand: true});
        axios.get(
            window.mfwApp.urls.township.land.debtTypeData+'/'+record.id+'/'+this.props.params.type_id,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState((state) => {
                    state.loadLand = false;
                    state.debtLand[record.id] = res.data.debt;
                    return state;
                });
            } else {
                message.error(this.props.t(res.data.error));
                this.setState({
                    loadLand: false
                });
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
        return this.state.form != false ?
            <React.Fragment>
                <Table 
                  rowKey="id" 
                  loading={this.state.loading}
                  columns={this.state.columns} 
                  dataSource={this.state.debt}
                  summary={this.lineSummary}
                  pagination={false}
                  expandable={{
                      expandedRowRender: this.debtLand,
                      onExpand: this.debtLandData
                  }}/>
                {this.state.invoiceID != null ? <Invoice id={this.state.invoiceID} close={() => {this.setState({invoiceID: null})}}/> : null}
            </React.Fragment>
        : null;
    }
}

export default useWithParams(useWithForm(withTranslation()(LineByType)));