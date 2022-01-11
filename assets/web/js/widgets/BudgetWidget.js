import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Card, Spin, Descriptions, message, Space } from 'antd';

import axios from 'axios';

import MfwNumber from '@app/mfw/MfwNumber';
import AddSpending from '@app/web/js/budget/AddSpending';

class BudgetWidget extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            addSpending: false,
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
            if (error.response && error.response.data) {
                message.error(this.props.t(error.response.data.error));
            } else {
                message.error(error.toString());
            }
        });
    }


    render() {
        console.log(this.state);
        return <Card title={this.props.t('budget._')}>
            {this.state.loading ? (
                <div className="d-flex justify-content-center align-items-center">
                    <Spin/>
                </div>
            ) : (
                this.state.info.length == 0 ? <span>{this.props.t('budget.no_current')}</span>  : 
                    <React.Fragment>
                        <p>{this.state.info[0].name}</p>
                        <Descriptions layout="horizontal" column={1}>
                            <Descriptions.Item label={this.props.t('finance.sum')} contentStyle={{justifyContent: 'end'}}>
                                <Link to={window.mfwApp.urls.budget.page}>
                                    <MfwNumber value={this.state.info[0].amount}/>
                                </Link>
                            </Descriptions.Item>
                            <Descriptions.Item label={this.props.t('budget.accrued')} contentStyle={{justifyContent: 'end'}}>
                                <MfwNumber value={this.state.info[0].accrued}/>
                            </Descriptions.Item>
                            <Descriptions.Item label={this.props.t('budget.collected')} contentStyle={{justifyContent: 'end'}}>
                                <MfwNumber value={this.state.info[0].collected}/>
                            </Descriptions.Item>
                            <Descriptions.Item label={this.props.t('budget.spent')} contentStyle={{justifyContent: 'end'}}>
                                <MfwNumber value={this.state.info[0].spent}/>
                            </Descriptions.Item>
                        </Descriptions>
                        <a onClick={() => {this.setState({addSpending: true})}}>{this.props.t('budget.spendings.add')}</a>
                    </React.Fragment>
            )}
            {this.state.addSpending ? <AddSpending/>: null}
        </Card>
    }
}

export default withTranslation()(BudgetWidget);