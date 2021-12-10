import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Card, Toast, Loading, Space, List, Collapse } from 'antd-mobile';

import axios from 'axios';

import MfwNumber from '@app/mfw/MfwNumber';
import LineManager from '@app/mobile/js/line/Manager';

class LineWidget extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            errorCode: 0,
            debt: []
        }
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.lineManager.debtLine,
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
        return <Card title={this.props.t('line.debt')+' '+window.mfwApp.user.line_manager}>
            {this.state.loading ? (
                <Space className="mfw-d-flex" justify="center">
                    <Loading/>
                </Space>
            ) : (
            <Collapse>
                {this.state.debt.map(record => {
                    return <Collapse.Panel 
                       key={record.id}
                       className="mfw-widget-record"
                       title={<List.Item key={record.id} extra={<MfwNumber value={record.debt}/>}>{record.name}</List.Item>}>
                        <LineManager typeID={record.id} />
                    </Collapse.Panel>
                })}
                </Collapse>
            )}
        </Card>
    }
}

export default withTranslation()(LineWidget);