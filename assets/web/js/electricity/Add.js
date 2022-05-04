import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Modal, Spin, message, Form, Select, Input, Divider, Space, Result, Button } from 'antd';

import axios from 'axios';
import moment from 'moment-timezone';

import MfwNumber from '@app/mfw/MfwNumber';
import useWithForm from '@app/hooks/useWithForm';

class ElectricityAddBill extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            form: null,
            result: null
        };
        this.post = this.post.bind(this);
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.electricity.addBillForm,
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
                this.setState({loading: true, result: null});
                axios({
                    method: 'post',
                    url: window.mfwApp.urls.electricity.addBill,
                    data: values,
                    headers: {'Content-Type': 'application/json','X-Requested-With': 'XMLHttpRequest'}
                }).then(res => {
                    if (res.data.success) {
                        this.props.success();
                        this.setState({result: true, loading: false})
                    } else {
                        message.error(this.props.t(res.data.error));
                    }
                }).catch(error => {
                    message.error(error.toString());
                });
            });
    }

    render() {
        return <Modal title={this.props.t('land.owner.__')}
            visible={true}
            closable={true}
            cancelButtonProps={{className: 'd-none'}}
            onCancel={this.props.close}
            okText={this.props.t('modal.save')}
            onOk={this.post}>
            {this.state.loading ? (
                <div className="d-flex justify-content-center align-items-center">
                    <Spin/>
                </div>
            ) : ( this.state.result != null ? (
                   <Result
                     status="success"
                     title={this.props.t('electricity.success')}
                     extra={[<Button
                         key="more"
                         type="primary"
                         className="mfw-mt-1"
                         onClick={() => this.setState({loading: false, result: null})}>{this.props.t('electricity.add_mmore')}</Button>]}/>
                  ) : (
                <Form form={this.props.form}
                   name="bill"
                   labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}>
                    <Space>
                    <Form.Item name="year"
                      label={this.props.t('calendar.year')}
                      initialValue={moment().year()}
                      rules={[
                           {
                               required: true,
                               message: this.props.t('calendar.errors.year_blank')
                           }
                        ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="month"
                      label={this.props.t('calendar.month')}
                      initialValue={moment().month()+1}>
                        <Select options={this.state.form.month.choices}/>
                    </Form.Item>                    
                    <Form.Item name="land_id"
                       label={this.props.t('land._')}>
                        <Select
                          showSearch
                          options={this.state.form.land_id.choices}/>
                    </Form.Item>
                    </Space>
                    <Divider>{this.props.t('calendar.day')}</Divider>
                        <Form.Item name="dayStart"
                           label={this.props.t('electricity.meter.start')}
                           initialValue={0}
                           rules={[
                              {
                                  required: true,
                                  message: this.props.t('electricity.errors.amount')
                              }
                           ]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="dayEnd"
                           label={this.props.t('electricity.meter.end')}
                           initialValue={0}
                           rules={[
                              {
                                  required: true,
                                  message: this.props.t('electricity.errors.amount')
                              }
                           ]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="dayRate"
                           label={this.props.t('electricity.meter.rate')}
                           initialValue={0}
                           rules={[
                              {
                                  required: true,
                                  message: this.props.t('electricity.errors.amount')
                              }
                           ]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="dayAmount"
                           label={this.props.t('finance.sum')}
                           initialValue={0}
                           rules={[
                              {
                                  required: true,
                                  message: this.props.t('electricity.errors.amount')
                              }
                           ]}>
                            <Input/>
                        </Form.Item>
                    <Divider>{this.props.t('calendar.night')}</Divider>
                    <Form.Item name="nightStart"
                       label={this.props.t('electricity.meter.start')}
                       initialValue={0}
                       rules={[
                          {
                              required: true,
                              message: this.props.t('electricity.errors.amount')
                          }
                       ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="nightEnd"
                       label={this.props.t('electricity.meter.end')}
                       initialValue={0}
                       rules={[
                          {
                              required: true,
                              message: this.props.t('electricity.errors.amount')
                          }
                       ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="nightRate"
                       label={this.props.t('electricity.meter.rate')}
                       initialValue={0}
                       rules={[
                          {
                              required: true,
                              message: this.props.t('electricity.errors.amount')
                          }
                       ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="nightAmount"
                       label={this.props.t('finance.sum')}
                       initialValue={0}
                       rules={[
                          {
                              required: true,
                              message: this.props.t('electricity.errors.amount')
                          }
                       ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="billNum"
                      hidden={true} 
                      initialValue={'manual'}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="_token"
                      hidden={true} 
                      initialValue={this.state.form._token.value}>
                        <Input/>
                    </Form.Item>
                </Form>
            ))}
        </Modal>
    }
}

export default useWithForm(withTranslation()(ElectricityAddBill));