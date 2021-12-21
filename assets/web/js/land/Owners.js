import React, {Component} from 'react';
//import { useMatch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import {message, Table, Button} from 'antd';

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
                    dataIndex: 'id'
                },
                {
                    title: this.props.t('land.owner._'),
                    dataIndex: 'name'
                }                
            ]
        };
        this.ownersData = this.ownersData.bind(this);
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