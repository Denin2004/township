import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Modal, Spin, message, Table } from 'antd';

import axios from 'axios';

import MfwNumber from '@app/mfw/MfwNumber';

class PayDistributed extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            distributed: {
                data: [],
                info: [],
                columns: [
                    {
                        title: this.props.t('common.name'),
                        dataIndex: 'period',
                        ellipsis: true
                    },
                    {
                        title: this.props.t('finance.sum'),
                        dataIndex: 'amount',
                        align: 'right',
                        render: (text, record) => {
                            return <MfwNumber value={record.amount}/>
                        }
                    },
                    {
                        title: this.props.t('finance.distributed'),
                        dataIndex: 'distributed',
                        align: 'right',
                        render: (text, record) => {
                            return record.distributed == 0 ? null : <MfwNumber value={record.distributed}/>
                        }
                    },
                    {
                        title: this.props.t('finance.debt'),
                        dataIndex: 'debt',
                        align: 'right',
                        render: (text, record) => {
                            return record.debt == 0 ? null : <MfwNumber value={record.debt}/>
                        }
                    }                    
                ]
            }
        };
    }
    
    componentDidMount() {
        this.getDistributed();
    }

    getDistributed() {
        axios.get(
            generatePath(
                window.mfwApp.urls.township.land.pays.distributed+'/:pay_id',
                {
                    pay_id: this.props.payID
                }
            ),
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState((state) => {
                    state.loading = false;
                    state.distributed.data = res.data.distributed.data;
                    state.distributed.info = res.data.distributed.info;
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
        return <Modal 
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
                   rowKey="id"                    
                   size="small"
                   title={() => <React.Fragment>{this.props.t('finance.not_distributed')}: <MfwNumber value={this.state.distributed.info != null ? this.state.distributed.info.distributed : 0}/></React.Fragment>}
                   columns={this.state.distributed.columns}
                   dataSource={this.state.distributed.data}
                   scroll={{y: 600 }}
                   pagination={false}
                />
                )}
        </Modal>
    }
}

export default withTranslation()(PayDistributed);