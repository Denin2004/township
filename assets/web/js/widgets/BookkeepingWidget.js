import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Card, message, Modal, Form, Input, Select, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import axios from 'axios';

import useWithForm from '@app/hooks/useWithForm';

class BookkeepingWidgets extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorCode: 0,
            electricityForm: false,
            file: false
        }
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
                    electricityForm: res.data.form
                });
            } else {
                message.error(this.props.t(res.data.error));
                this.setState({
                    loading: false
                });
            }
        }).catch(error => {
            if (error.response) {
                this.setState({
                    loading: false,
                    errorCode: error.response.status
                });
            } else {
                message.error(error.toString());
                this.setState({
                    loading: false
                });
            }
        });
    }

    electricityUpload() {
        this.props.form
            .validateFields()
            .then(values => {
                let formData = new FormData();
                Object.keys(values).map((key) => {
                    formData.append(this.state.electricityForm[key].full_name, key != 'file'? values[key] : '');
                });
                formData.append(this.state.electricityForm.file.full_name, this.state.file);
                axios({
                    method: 'post',
                    url: window.mfwApp.urls.electricity.upload,
                    data: formData,
                    headers: { 'Content-Type': 'multipart/form-data','Accept': 'application/json'}
                }).then(res => {
                    if (res.data.success) {
                        this.setState({passwordForm: false});
                        message.success(this.props.t('account.password.changed'));
                    } else {
                        message.error(this.props.t(res.data.error));
                    }
                }).catch(error => {
                    message.error(error.toString());
                });
            })
            .catch(info => {
                message.error(this.props.t('common.errors.validate'));
            });
    }
    
    normFile(e) {
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    };    

    render() {
        return <React.Fragment>
            <Card title={this.props.t('bookkeeping._')}>
                <a onClick={() => this.electricityForm()}>{this.props.t('electricity.load_bills')}</a>
            </Card>
            {this.state.electricityForm != false ? (
                <Modal
                  title={this.props.t('electricity.loading_bills')}
                  visible={true}
                  closable={false}
                  okText={this.props.t('modal.upload')}
                  cancelText={this.props.t('modal.cancel')}
                  onCancel={() => {this.setState({electricityForm: false})}}
                  onOk={this.electricityUpload}>
                    <Form form={this.props.form}
                       name="electricity"
                       encType="multipart/form-data"
                       labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}>
                        <Form.Item name="year"
                           label={this.props.t('calendar.year')}
                           initialValue={this.state.electricityForm.year.value}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="month"
                           label={this.props.t('calendar.month')}
                           initialValue={this.state.electricityForm.month.value}>
                            <Select options={this.state.electricityForm.month.choices}/>
                        </Form.Item>
                        <Form.Item name="file"
                           label={this.props.t('electricity.bills_file')}
                           valuePropName="fileList"
                           getValueFromEvent={this.normFile}>
                            <Upload
                              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                              beforeUpload={(file) => {this.setState({file: file});return false;}}
                              onRemove={() => {this.setState({file: false});}}>
                                <Button icon={<UploadOutlined />}>{this.props.t('modal.select_file')}</Button>
                            </Upload>                        
                        </Form.Item> 
                        <Form.Item name="_token"
                          hidden={true} 
                          initialValue={this.state.electricityForm._token.value}>
                            <Input/>
                        </Form.Item>
                    </Form>
                </Modal>) :
            ''}
        </React.Fragment>
    }
}

export default useWithForm(withTranslation()(BookkeepingWidgets));