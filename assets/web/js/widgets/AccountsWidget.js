import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Card, Spin, Descriptions, message } from 'antd';

import axios from 'axios';

class AccountsWidgets extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            errorCode: 0,
            count: 0
        }
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.accountManager.count,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    loading: false,
                    count: res.data.count
                });
            } else {
                message.error(this.props.t(res.data.error));
                this.setState({
                    loading: false
                });
            }
        }).catch(error => {
            if (error.response) {
                this.setState({
                    loading: false,
                    errorCode: error.response.status
                });
            } else {
                message.error(error.toString());
                this.setState({
                    loading: false
                });
            }
        });
    }


    render() {
        return <Card title={<Link to={window.mfwApp.urls.accountManager.page}>{this.props.t('account.manager')}</Link>}>
            {this.state.loading ? (
                <div className="d-flex justify-content-center align-items-center">
                    <Spin/>
                </div>
            ) : (
                <Descriptions layout="horizontal">
                    <Descriptions.Item label={this.props.t('account.s')}>{this.state.count}</Descriptions.Item>
                </Descriptions>
            )}
        </Card>
    }
}

export default withTranslation()(AccountsWidgets);