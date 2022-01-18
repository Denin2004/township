import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import { message, Modal, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import axios from 'axios';

import MfwNumber from '@app/mfw/MfwNumber';

class ItemSpending extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            spending: [],
            columns: [
                {
                    title: this.props.t('calendar.date'),
                    dataIndex: 'dt',
                    width: 100
                },
                 {
                    title: this.props.t('budget.item._'),
                    dataIndex: 'name'
                },
                {
                    title: this.props.t('finance.sum'),
                    key: 'amount',
                    align: 'right',
                    render: (text, record) => {
                        return <MfwNumber value={record.amount}/>
                    }
                },
                {
                    title: this.props.t('common.comment'),
                    dataIndex: 'comment',
                    ellipsis: true,
                    width: 150
                }                
            ]
        };
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.budget.item.spending+'/'+this.props.id,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    loading: false,
                    spending: res.data.res
                });
            } else {
                message.error(this.props.t(res.data.error));
                this.props.cancel();
            }
        }).catch(error => {
            if (error.response && error.response.data) {
                message.error(this.props.t(error.response.data.error));
                this.props.cancel();
            } else {
                message.error(error.toString());
                this.props.cancel();
            }
        });
    }
    
    render() {
        return <Modal
          title={this.props.t('budget.item.spending')}
          visible={true}
          closable={false}
          okText={null}
          width={1000}
          okButtonProps={{className: 'd-none'}}
          cancelText={this.props.t('modal.close')}
          onCancel={this.props.cancel}>
          <Table rowKey="id" 
            loading={this.state.loading}
            columns={this.state.columns} 
            dataSource={this.state.spending}
            scroll={{ x: 'max-content', y: 600 }}
            pagination={false}/>
        </Modal>
    }
}

export default withTranslation()(ItemSpending);