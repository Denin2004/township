import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Card, Toast, Loading, Space, List, Collapse } from 'antd-mobile';

import axios from 'axios';

import MfwNumber from '@app/mfw/MfwNumber';
import useWithParams from '@app/hooks/useWithParams';
import LandByType from '@app/mobile/js/land/ByType';

class LineByType extends Component {
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
            window.mfwApp.urls.township.line.debtTypeData+'/'+this.props.params.line+'/'+this.props.params.type_id,
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
        return this.state.loading ? (
            <Space className="mfw-d-flex" justify="center">
                <Loading/>
            </Space>
        ) : (
        <React.Fragment>
            <h3>{this.props.t('line.debt')} {this.props.params.line}</h3>
            <Collapse>
                {this.state.debt.map(record => {
                    return <Collapse.Panel 
                       key={record.id}
                       className="mfw-widget-record"
                       title={<List.Item key={record.id} extra={<MfwNumber value={record.debt}/>}>{record.num}</List.Item>}>
                        <LandByType land_id={record.id} charge_type_id={record.charge_type_id}/>
                    </Collapse.Panel>
                })}
            </Collapse>
        </React.Fragment>
        );
    }
}

export default useWithParams(withTranslation()(LineByType));