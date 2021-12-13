import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Card, Spin, Descriptions, message } from 'antd';

import axios from 'axios';

import MfwNumber from '@app/mfw/MfwNumber';

class BudgetWidget extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            errorCode: 0,
            info: null
        }
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.budget.widget,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    loading: false,
                    info: res.data.info
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


    render() {
        return <Card title={<Link to={window.mfwApp.urls.budget.page}>{this.props.t('budget._')}</Link>}>
            {this.state.loading ? (
                <div className="d-flex justify-content-center align-items-center">
                    <Spin/>
                </div>
            ) : (
                this.state.info.length == 0 ? <span>{this.props.t('budget.no_current')}</span>  : 
                <Descriptions layout="horizontal">
                    <Descriptions.Item label={this.props.t('account.s')}>{this.state.count}</Descriptions.Item>
                </Descriptions>
            )}
        </Card>
    }
}

export default withTranslation()(BudgetWidget);