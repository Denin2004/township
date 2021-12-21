import React, {Component} from 'react';
//import { useMatch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import {message, Table} from 'antd';

import axios from 'axios';

class Owners extends Component {
    constructor(props){
        super(props);
        this.state = {
            owners: [],
            loading: true,
            columns: [
                {
                    title: this.props.t('land._'),
                    dataIndex: 'id'
                },
                {
                    title: this.props.t('land.owner'),
                    dataIndex: 'name'
                }                
            ]
        };
    }

    componentDidMount() {
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
        console.log(this.state);
//            {this.state.invoiceID != null ? <Invoice id={this.state.invoiceID} close={() => {this.setState({invoiceID: null})}}/> : null}        
        return  <React.Fragment>
            <Table 
              rowKey="id" 
              loading={this.state.loading}
              columns={this.state.columns} 
              dataSource={this.state.owners}/>
        </React.Fragment>
    }
}

export default withTranslation()(Owners);