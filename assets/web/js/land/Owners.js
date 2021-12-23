import React, {Component} from 'react';
//import { useMatch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import {message, Table, Button, Modal, Space} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import axios from 'axios';

import OwnerModal from '@app/web/js/land/OwnerModal';

class Owners extends Component {
    constructor(props){
        super(props);
        this.state = {
            owners: [],
            loading: true,
            ownerID: null,
            columns: [
                {
                    title: this.props.t('land._'),
                    dataIndex: 'num'
                },
                {
                    title: this.props.t('land.owner._'),
                    dataIndex: 'name'
                },
                {
                    title: this.props.t('action.s'),
                    key: 'actions',
                    render: (text, record) => {
                        return <Space>
                            <a onClick={() => this.setState({ownerID: record.id})} >{this.props.t('action.edit')}</a>
                            <a onClick={() => this.deleteOwner(record.id)}>{this.props.t('action.delete')}</a>
                        </Space>
                    }
                }                
            ]
        };
        this.ownersData = this.ownersData.bind(this);
        this.deleteOwner = this.deleteOwner.bind(this);
    }

    componentDidMount() {
        this.ownersData();
    }
    
    ownersData() {
        this.setState({ownerID: null, loadin: true});
        axios.get(
            window.mfwApp.urls.township.land.owner.data,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    owners: res.data.owners,
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
    
    deleteOwner(id) {
        Modal.confirm({
            content: this.props.t('land.owner.confirm'),
            okText: this.props.t('modal.yes'),
            cancelText: this.props.t('modal.cancel'),
            icon: <ExclamationCircleOutlined />,
            onOk: () => {
                axios({
                    method: 'get',
                    url: window.mfwApp.urls.township.land.owner.delete+'/'+id,
                    headers: {
                            'X-Requested-With': 'XMLHttpRequest'
                    }
                }).then(res => {
                    if (res.data.success) {
                        this.ownersData(); 
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
            <Button onClick={() => this.setState({ownerID: -1})}>{this.props.t('land.owner.add')}</Button>
            <Table 
              rowKey="id" 
              loading={this.state.loading}
              columns={this.state.columns} 
              dataSource={this.state.owners}/>
            {this.state.ownerID != null ? 
              <OwnerModal 
                id={this.state.ownerID} 
                close={() => {this.setState({ownerID: null})}} 
                success={this.ownersData} /> : null}
        </React.Fragment>
    }
}

export default withTranslation()(Owners);