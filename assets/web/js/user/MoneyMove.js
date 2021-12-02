import React, {Component} from 'react';
import { useMatch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import {message, Table, Typography, DatePicker, Form, Button, Input} from 'antd';

import axios from 'axios';
import moment from 'moment-timezone';

import useWithForm from '@app/hooks/useWithForm';
import useWithParams from '@app/hooks/useWithParams';
import MfwNumber from '@app/mfw/MfwNumber';

class UserMoneyMove extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorCode: 0,
            data: [],
            loading: true,
            form: false
        };
        this.showData = this.showData.bind(this);
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.township.user.moneyMoveForm,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({form: res.data.form});
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
    
    showData(values) {
        values.date_range.map((date, i) => {
            values.date_range[i] = date.format(window.mfwApp.formats.date);
        });
        values.date_range = values.date_range.join('#');
        axios({
            method: 'post',
            url: window.mfwApp.urls.township.user.moneyMoveData,
            headers: {
                    'X-Requested-With': 'XMLHttpRequest'
            },
            data: values
        }).then(res => {
            if (res.data.success) {
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
        return this.state.form != false ? <React.Fragment>
            <Form form={this.props.form}
                  className="mfw-mb-1 mfw-mt-1"
                  onFinish={this.showData}
                  layout="inline">
                <Form.Item name="date_range"
                    initialValue={[
                        moment(this.state.form.date_range.value[0], window.mfwApp.formats.date),
                        moment(this.state.form.date_range.value[1], window.mfwApp.formats.date)
                    ]}>
                    <DatePicker.RangePicker format={window.mfwApp.formats.date}/>
                </Form.Item>
                <Form.Item name="_token"
                  hidden={true}
                  initialValue={this.state.form._token.value}>
                    <Input/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">{this.props.t('modal.show')}</Button>
                </Form.Item>
            </Form>
        </React.Fragment> : null
    }
}

export default useWithParams(useWithForm(withTranslation()(UserMoneyMove)));