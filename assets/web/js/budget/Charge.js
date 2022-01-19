import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Modal, Spin, message, Descriptions, Table, Form, Select, Input } from 'antd';

import axios from 'axios';

import MfwNumber from '@app/mfw/MfwNumber';
import useWithForm from '@app/hooks/useWithForm';

class Charge extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            form: null
        };
        this.post = this.post.bind(this);
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.budget.charge.form,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                res.data.form.month.choices.map(choice => {
                    choice.label = this.props.t('calendar.months.'+choice.value);
                });
                const allLands = res.data.form.land_id.choices.findIndex(opt => opt.label == 'land.all');
                res.data.form.land_id.choices[allLands].label = this.props.t('land.all');
                this.setState({
                    form: res.data.form,
                    loading: false
                })
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
    
    post() {
        this.props.form
            .validateFields()
            .then(values => {
                this.setState({loading: false});
                axios({
                    method: 'post',
                    url: window.mfwApp.urls.budget.charge._,
                    data: values,
                    headers: {'Content-Type': 'application/json','X-Requested-With': 'XMLHttpRequest'}
                }).then(res => {
                    if (res.data.success) {
                        this.props.success();
                    } else {
                        message.error(this.props.t(res.data.error));
                    }
                }).catch(error => {
                    message.error(error.toString());
                });
            });
    }

    render() {
        return <Modal title={this.props.t('budget.discount._')}
            visible={true}
            closable={false}
            cancelText={this.props.t('modal.close')}
            onCancel={this.props.success}
            okText={this.props.t('finance.charge_do')}
            okButtonsProps={{disbled: !this.state.loading}}
            onOk={this.post}>
            {this.state.loading ? (
                <div className="d-flex justify-content-center align-items-center">
                    <Spin/>
                </div>
            ) : (
                <Form form={this.props.form}
                   name="discount"
                   labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}>
                    <Form.Item name="land_id"
                       label={this.props.t('land._')}
                       initialValue={this.state.form.land_id.value*1}>
                        <Select
                          showSearch
                          options={this.state.form.land_id.choices}/>
                    </Form.Item>
                    <Form.Item name="year"
                       label={this.props.t('calendar.year')}
                       initialValue={this.state.form.year.value}
                       rules={[
                          {
                              required: true,
                              message: this.props.t('calendar.year')
                          }
                       ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="month"
                      label={this.props.t('calendar.month')}
                      initialValue={this.state.form.month.value*1}>
                        <Select options={this.state.form.month.choices}/>
                    </Form.Item>
                    <Form.Item name="_token"
                      hidden={true} 
                      initialValue={this.state.form._token.value}>
                        <Input/>
                    </Form.Item>
                </Form>
            )}
        </Modal>
    }
}

export default useWithForm(withTranslation()(Charge));