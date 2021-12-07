import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Card, Toast, Loading, Space, List, Collapse } from 'antd-mobile';

import axios from 'axios';

import MfwNumber from '@app/mfw/MfwNumber';

class TownshipWidget extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            errorCode: 0,
            debt: [],
            debtLines: [],
            loadLines: false
        }
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.township.debt,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    loading: false,
                    debt: res.data.debt
                });
            } else {
                Toast.show({
                    icon: 'fail',
                    content:this.props.t(res.data.error)
                });
            }
        }).catch(error => {
            if (error.response) {
                Toast.show({
                    icon: 'fail',
                    content:this.props.t(error.response.status)
                });
            } else {
                Toast.show({
                    icon: 'fail',
                    content:this.props.t(error.toString())
                });
            }
        });
    }

    render() {
        console.log(this.state);
        return <Card title={this.props.t('township.debt')}>
            {this.state.loading ? (
                <Space className="mfw-d-flex" justify="center">
                    <Loading/>
                </Space>
            ) : (
            <React.Fragment>
            <List>
                {this.state.debt.map(record => {
                    return <List.Item key={record.id} clickable extra={<MfwNumber value={record.debt}/>}>{record.name}</List.Item>
                })}
            </List>
            <Collapse>
                {this.state.debt.map(record => {
                    return <Collapse.Panel 
                       key={record.id}
                       className="mfw-widget-record"
                       title={<List.Item key={record.id} extra={<MfwNumber value={record.debt}/>}>{record.name}</List.Item>}>{record.name}</Collapse.Panel>
                })}
            </Collapse>
            </React.Fragment>
            )}
        </Card>
    }
}

export default withTranslation()(TownshipWidget);