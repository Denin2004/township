import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Card, Toast, Loading, Space, List, Collapse } from 'antd-mobile';

import axios from 'axios';

import MfwNumber from '@app/mfw/MfwNumber';
import UserByType from '@app/mobile/js/user/ByType';
import UserChargesByType from '@app/mobile/js/user/ChargersByType';

class UserWidget extends Component {
    
    constructor(props){
        super(props);
        this.state = window.mfwApp.userWidgetState ? {...window.mfwApp.userWidgetState} : {
            loading: true,
            debt: [],
            charges: []
        };
    }

    componentDidMount() {
        if (!this.state.loading) {
            return;
        }
       axios.get(
            window.mfwApp.urls.township.user.debt,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    loading: false,
                    debt: res.data.debt,
                    charges: res.data.charges
                });
            } else {
                Toast.show({
                    icon: 'fail',
                    content: this.props.t(res.data.error)
                });
            }
        }).catch(error => {
            if (error.response && error.response.data) {
                Toast.show({
                    icon: 'fail',
                    content: this.props.t(error.response.data.error)
                });
            } else {
                Toast.show({
                    icon: 'fail',
                    content: this.props.t(error.toString())
                });
            }
        });
    }
    
    componentWillUnmount() {
        window.mfwApp.userWidgetState = {...this.state};
    }

    render() {
        return <React.Fragment>
            <Card title={this.props.t('user.debt')}>
                {this.state.loading ? (
                    <Space className="mfw-d-flex" justify="center">
                        <Loading/>
                    </Space>
                ) : (
                <Collapse>
                    {this.state.debt.map(record => {
                        return <Collapse.Panel
                           key={record.id}
                           title={<List.Item key={record.id} extra={<MfwNumber value={record.debt}/>}>{record.name}</List.Item>}
                           className="mfw-widget-record">
                            <UserByType typeID={record.id} />
                        </Collapse.Panel>
                    })}
                </Collapse>)}
            </Card>
            <Card title={this.props.t('finance.charges')}>
                <Collapse>
                    {this.state.charges.map(record => {
                            return <Collapse.Panel
                               key={record.id}
                               className="mfw-widget-record"
                               title={<List.Item key={record.id}>{record.name}</List.Item>}>
                                <UserChargesByType typeID={record.id} />
                            </Collapse.Panel>
                        })}
                </Collapse>
            </Card>
        </React.Fragment>
    }
}

export default withTranslation()(UserWidget);