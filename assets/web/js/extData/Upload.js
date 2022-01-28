import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Modal, Spin, message, Form, Upload, Button, Input, Result, Table } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import axios from 'axios';
import moment from 'moment-timezone';

import useWithForm from '@app/hooks/useWithForm';

class ExtDataUpload extends Component {
    constructor(props){
        super(props);
        this.state = {
            status: 0,
            form: null,
            result: null
        };
        this.upload = this.upload.bind(this);
        this.uploadMore = this.uploadMore.bind(this);
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.extData.upload.form,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    status: 1,
                    form: res.data.form
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

    uploadMore() {
        this.setState({status: 1, result: null});
    }

    normFile(e) {
        return e && (e.fileList.length > 0 ? e.fileList[0].originFileObj : null);
    };

    upload() {
        this.props.form
            .validateFields()
            .then(values => {
                let formData = new FormData();
                Object.keys(values).map((key) => {
                    formData.append(this.state.form[key].full_name, values[key]);
                });
                axios({
                    method: 'post',
                    url: window.mfwApp.urls.extData.upload.post,
                    data: formData,
                    headers: { 'Content-Type': 'multipart/form-data','Accept': 'application/json'}
                }).then(res => {
                    if (res.data.success) {
                        this.setState({status: 2, result: res.data.result});
                    } else {
                        message.error(this.props.t(res.data.error)+(res.data.errorData ? res.data.errorData : ''));
                    }
                }).catch(error => {
                    message.error(error.toString());
                });
            });
    }

    render() {
        return <Modal title={this.props.t('extData.upload')}
            visible={true}
            closable={true}
            cancelText={this.props.t('modal.close')}
            okText={this.props.t('modal.upload')}
            onCancel={this.props.close}
            okButtonProps={{disabled: this.state.status != 1}}
            onOk={this.upload}>
            {this.state.status == 0 ?
                <div className="d-flex justify-content-center align-items-center">
                    <Spin/>
                </div>
                : null}
            {this.state.status == 1 ?
                <Form form={this.props.form}
                  name="extData"
                  encType="multipart/form-data"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}>
                    <Form.Item name="file"
                        label={this.props.t('extData.file')}
                        valuePropName="File"
                        getValueFromEvent={this.normFile}
                        rules={[
                           {
                               required: true,
                               message: this.props.t('extData.errors.file_blank')
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
                       initialValue={this.state.form._token.value}>
                         <Input/>
                    </Form.Item>
                </Form>
                : null}
            {this.state.status == 2 ?
                <React.Fragment>
                {this.state.result.errors.length != 0 ?
                   <Result
                      status="error"
                      title={this.props.t('extData.errors.excel')}
                      extra={[<Table
                        key="table"
                        rowKey="id"
                        size="small"
                        pagination={false}
                        scroll={{y: 80}}
                        columns={[
                            {
                                title: this.props.t('common.line'),
                                dataIndex: 'line'
                            },
                            {
                                title: this.props.t('errors.error'),
                                dataIndex: 'error',
                                render: (text, record) => {
                                    return this.props.t(text)
                                }
                            }
                        ]}
                        dataSource={this.state.result.errors} />,
                        <Button
                          key="more"
                          type="primary"
                          className="mfw-mt-1"
                          onClick={this.uploadMore}>{this.props.t('modal.upload_more')}</Button>
                      ]}/>
                   : null}

                {this.state.result.unknowns == 0 && this.state.result.sys_errors.length == 0 && this.state.result.errors.length == 0 ?
                   <Result
                     status="success"
                     title={this.props.t('extData.result.success')}
                     extra={[<Button
                         key="more"
                         type="primary"
                         className="mfw-mt-1"
                         onClick={this.uploadMore}>{this.props.t('modal.upload_more')}</Button>]}/>
                   : null}
                {this.state.result.unknowns != 0 && this.state.result.sys_errors.length == 0 ?
                   <Result
                     status="warning"
                     title={this.props.t('extData.result.unknowns')+this.state.result.unknowns}
                     extra={[<Button
                         key="show"
                         href={window.mfwApp.urls.extData.page._}
                         target="_blank"
                         className="mfw-mt-1">{this.props.t('extData.show')}</Button>,
                         <Button
                           key="more"
                           type="primary"
                           className="mfw-mt-1"
                           onClick={this.uploadMore}>{this.props.t('modal.upload_more')}</Button>]}/>
                   : null}
                {this.state.result.unknowns == 0 && this.state.result.sys_errors.length != 0 ?
                   <Result
                     status="error"
                     title={this.props.t('extData.result.system_errors')}
                     subTitle={this.props.t('extData.errors.system_message')}
                     extra={[<Input.TextArea
                          key="text"
                          rows={8}
                          value={JSON.stringify(this.state.result.sys_errors)}
                          className="mfw-resize-none"/>,
                         <Button
                            key="more"
                            type="primary"
                            className="mfw-mt-1"
                            onClick={this.uploadMore}>{this.props.t('modal.upload_more')}</Button>]}/>
                   : null}
                {this.state.result.unknowns != 0 && this.state.result.sys_errors.length != 0 ?
                   <Result
                     status="error"
                     title={this.props.t('extData.result.system_errors')+' '+this.props.t('extData.result.unknowns')+this.state.result.unknowns}
                     subTitle={this.props.t('extData.errors.system_message')}
                     extra={[<Input.TextArea
                           key="text"
                           rows={8}
                           value={JSON.stringify(this.state.result.sys_errors)}
                           className="mfw-resize-none"/>,
                         <Button
                           key="show"
                           href={window.mfwApp.urls.extData.page._}
                           target="_blank"
                           className="mfw-mt-1">{this.props.t('extData.show')}</Button>,
                         <Button
                           key="more"
                           type="primary"
                           className="mfw-mt-1"
                           onClick={this.uploadMore}>{this.props.t('modal.upload_more')}</Button>]}/>
                   : null}
                </React.Fragment>
                : null}
        </Modal>
    }
}

export default useWithForm(withTranslation()(ExtDataUpload));