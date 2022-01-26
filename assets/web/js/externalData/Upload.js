import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Modal, Spin, message, Descriptions, Table } from 'antd';

import axios from 'axios';
import moment from 'moment-timezone';

import MfwNumber from '@app/mfw/MfwNumber';

class ExtDataUpload extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true
        };
        this.upload = this.upload.bind(this);
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
                        this.props.close();
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
            width={800}
            visible={true}
            closable={false}
            cancelButtonProps={{className: 'd-none'}}
            okText={this.props.t('modal.close')}
            onOk={this.upload}>
            {this.state.loading ? (
                <div className="d-flex justify-content-center align-items-center">
                    <Spin/>
                </div>
            ) : (
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
            )}
        </Modal>
    }
}

export default useWithForm(withTranslation()(ExtDataUpload));