import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Card, Spin, Descriptions, message, List } from 'antd';

import axios from 'axios';

class AccountsWidgets extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
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
            if (error.response && error.response.data) {
                message.error(this.props.t(error.response.data.error));
            } else {
                message.error(error.toString());
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
            <React.Fragment>
                <Descriptions layout="horizontal">
                    <Descriptions.Item label={this.props.t('account.s')}>{this.state.count}</Descriptions.Item>
                </Descriptions>
                <List>
                    <List.Item>
                        <Link to={window.mfwApp.urls.township.land.owner.page}>{this.props.t('land.owner.s')}</Link>
                    </List.Item>
                    <List.Item>
                        <Link to={window.mfwApp.urls.budget.discount.page}>{this.props.t('finance.correction.s')}</Link>
                    </List.Item>
                    <List.Item>
                        <Link to={window.mfwApp.urls.township.land.page}>{this.props.t('land.s')}</Link>
                    </List.Item>
                </List>
            </React.Fragment>)}
        </Card>
    }
}

export default withTranslation()(AccountsWidgets);