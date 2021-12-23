import React, {Component} from 'react';
//import { useMatch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import {message, Table, Button, Modal, Space} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import axios from 'axios';

import DiscountModal from '@app/web/js/budget/DiscountModal';

class Discounts extends Component {
    constructor(props){
        super(props);
        this.state = {
            discounts: [],
            loading: true,
            discountID: null,
            columns: [
                {
                    title: this.props.t('land._'),
                    dataIndex: 'num'
                },
                {
                    title: this.props.t('budget.item._'),
                    dataIndex: 'name'
                },
                {
                    title: this.props.t('finance.discount'),
                    dataIndex: 'discount'
                },
                {
                    title: this.props.t('action.s'),
                    key: 'actions',
                    render: (text, record) => {
                        return <Space>
                            <a onClick={() => this.setState({discountID: {land_id: record.land_id, item_name_id: record.item_name_id}})} >{this.props.t('action.edit')}</a>
                            <a onClick={() => this.deleteDiscount(record.land_id, record.item_name_id)}>{this.props.t('action.delete')}</a>
                        </Space>
                    }
                }                
            ]
        };
        this.discountsData = this.discountsData.bind(this);
        this.deleteDiscount = this.deleteDiscount.bind(this);
    }

    componentDidMount() {
        this.discountsData();
    }
    
    discountsData() {
        this.setState({discountID: null, loading: true});
        axios.get(
            window.mfwApp.urls.budget.discount.data,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    discounts: res.data.discounts,
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
    
    deleteDiscount(land_id, item_name_id) {
        Modal.confirm({
            content: this.props.t('budget.discount.confirm'),
            okText: this.props.t('modal.yes'),
            cancelText: this.props.t('modal.cancel'),
            icon: <ExclamationCircleOutlined />,
            onOk: () => {
                axios({
                    method: 'get',
                    url: window.mfwApp.urls.budget.discount.delete+'/'+land_id+'/'+item_name_id,
                    headers: {
                            'X-Requested-With': 'XMLHttpRequest'
                    }
                }).then(res => {
                    if (res.data.success) {
                        this.discountsData(); 
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
        });
    }
    
    render() {
        return  <React.Fragment>
            <Button onClick={() => this.setState({discountID: {land_id: -1, item_name_id: -1}})}>{this.props.t('budget.discount.add')}</Button>
            <Table 
              rowKey="id" 
              loading={this.state.loading}
              columns={this.state.columns} 
              dataSource={this.state.discounts}/>
            {this.state.discountID != null ? 
              <DiscountModal 
                id={this.state.discountID} 
                close={() => {this.setState({discountID: null})}} 
                success={this.discountsData} /> : null}
        </React.Fragment>
    }
}

export default withTranslation()(Discounts);