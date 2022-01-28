import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Card, message, Modal, Form, Input, Select, Upload, Button, Spin, Descriptions, List } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import axios from 'axios';

import useWithForm from '@app/hooks/useWithForm';
import MfwNumber from '@app/mfw/MfwNumber';
import Charge from '@app/web/js/budget/Charge';
import ExtDataUpload from '@app/web/js/extData/Upload';

class BookkeepingWidgets extends Component {
    constructor(props){
        super(props);
        this.state = {
            electricity: {
                state: 0,
                form: false,
                result: false
            },
            charge: false,
            extDataUpload: false
        };
        this.electricityForm = this.electricityForm.bind(this);
        this.electricityUpload = this.electricityUpload.bind(this);
    }

    electricityForm()
    {
        axios.get(
            window.mfwApp.urls.electricity.uploadForm,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.props.form.resetFields();
                this.setState({
                    electricity: {
                        state: 1,
                        form: res.data.form,
                        result: false
                    }
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

    electricityUpload() {
        if (this.state.electricity.state == 3) {
            this.props.form.resetFields();
            this.setState((state) => {
                state.electricity.state = 1;
                return state
            });
            return;
        }
        this.props.form
            .validateFields()
            .then(values => {
                let formData = new FormData();
                Object.keys(values).map((key) => {
                    formData.append(this.state.electricity.form[key].full_name, values[key]);
                });
                this.setState((state) => {
                    state.electricity.state = 2;
                    return state;
                });
                axios({
                    method: 'post',
                    url: window.mfwApp.urls.electricity.upload,
                    data: formData,
                    headers: { 'Content-Type': 'multipart/form-data','Accept': 'application/json'}
                }).then(res => {
                    if (res.data.success) {
                        this.setState((state) => {
                            state.electricity.state = 3;
                            state.electricity.result = res.data.result;
                            return state;
                        });
                    } else {
                        message.error(this.props.t(res.data.error)+(res.data.errorData ? res.data.errorData : ''));
                        this.setState((state) => {
                            state.electricity.state = 1;
                            return state;
                        });
                    }
                }).catch(error => {
                    message.error(error.toString());
                    this.setState((state) => {
                        state.electricity.state = 1;
                        return state;
                    });
                });
            });
    }
    
    normFile(e) {
        return e && (e.fileList.length > 0 ? e.fileList[0].originFileObj : null);
    };    

    render() {
        return <React.Fragment>
            <Card title={this.props.t('bookkeeping._')}>
                <List>
                    <List.Item>
                        <a onClick={() => this.electricityForm()}>{this.props.t('electricity.load_bills')}</a>
                    </List.Item>
                    <List.Item>
                        <a onClick={() => this.setState({charge: true})}>{this.props.t('budget.charge')}</a>
                    </List.Item>
                    <List.Item>
                        <a onClick={() => this.setState({extDataUpload: true})}>{this.props.t('extData.upload')}</a>
                    </List.Item>
                    <List.Item>
                        <a target="_blank" href={window.mfwApp.urls.extData.page._}>{this.props.t('extData._')}</a>
                    </List.Item>
                    
                </List>
            </Card>
            {this.state.electricity.state != 0 ? (
                <Modal
                  title={this.props.t('electricity.loading_bills')}
                  visible={true}
                  closable={false}
                  okText={this.state.electricity.state == 3 ? this.props.t('modal.upload_more') : this.props.t('modal.upload')}
                  cancelText={this.state.electricity.state == 3 ? this.props.t('modal.close') : this.props.t('modal.cancel')}
                  onCancel={() => {this.setState({electricity: {state: 0, form: false, result: false}})}}
                  onOk={this.electricityUpload}>
                    {this.state.electricity.state == 1 ? <Form form={this.props.form}
                           name="electricity"
                           encType="multipart/form-data"
                           labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}>
                           <Form.Item name="file"
                               label={this.props.t('electricity.bills_file')}
                               valuePropName="File"
                               getValueFromEvent={this.normFile}
                               rules={[
                                  {
                                      required: true,
                                      message: this.props.t('electricity.errors.file_blank')
                                  }
                               ]}>
                                <Upload
                                  beforeUpload={() => {return false;}}
                                  maxCount={1}
                                  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel">
                                    <Button icon={<UploadOutlined />}>{this.props.t('modal.select_file')}</Button>
                                </Upload>                        
                            </Form.Item> 
                            <Form.Item name="_token"
                              hidden={true} 
                              initialValue={this.state.electricity.form._token.value}>
                                <Input/>
                            </Form.Item>
                        </Form> : null }
                    {this.state.electricity.state == 2 ? <div className="d-flex justify-content-center">
                        <Spin/>
                    </div> : null}
                    {this.state.electricity.state == 3 ? <Descriptions layout="vertical" bordered>
                        <Descriptions.Item label={this.props.t('calendar.year')}>
                            {this.state.electricity.result.year}
                        </Descriptions.Item>
                        <Descriptions.Item label={this.props.t('calendar.month')}>
                            {this.props.t('calendar.months.'+this.state.electricity.result.month)}
                        </Descriptions.Item>
                        <Descriptions.Item label={<div className="d-flex justify-content-end">{this.props.t('electricity.bills_on_sum')}</div>}>
                            <div className="d-flex justify-content-end">
                                <a href={generatePath(window.mfwApp.urls.electricity.bills+'/:year/:month', { year: this.state.electricity.result.year, month: this.state.electricity.result.month})} target="_blank">
                                    <MfwNumber value={this.state.electricity.result.sum}/>
                                </a>
                            </div>
                        </Descriptions.Item>
                    </Descriptions> : null}
                </Modal>) :
            null}
            {this.state.charge ? <Charge success={() => this.setState({charge: false})}/> : null}
            {this.state.extDataUpload ? <ExtDataUpload close={() => this.setState({extDataUpload: false})}/> : null}
        </React.Fragment>
    }
}

export default useWithForm(withTranslation()(BookkeepingWidgets));