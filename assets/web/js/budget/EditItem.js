import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import {message, Form, Input, Modal} from 'antd';

import axios from 'axios';

import useWithForm from '@app/hooks/useWithForm';
import MfwNumber from '@app/mfw/MfwNumber';

class EditItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorCode: 0,
            form: null,
            loading: true
        };
        this.itemPost = this.itemPost.bind(this);
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.budget.item.form+'/'+this.props.id,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                console.log(res.data);
                this.setState({
                    loading: false
                });
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
    
    itemPost() {
        this.props.form
            .validateFields()
            .then(values => {
                axios({
                    method: 'post',
                    url: window.mfwApp.urls.budget.item.post,
                    data: values,
                    headers: {'Content-Type': 'application/json','X-Requested-With': 'XMLHttpRequest'}
                }).then(res => {
                    if (res.data.success) {
                        this.props.success();
                        message.success(this.props.t('account.password.changed'));
                    } else {
                        message.error(this.props.t(res.data.error));
                    }
                }).catch(error => {
                    message.error(error.toString());
                });
            });
    }

    render() {
        return  this.state.loading ? null : <Modal
          title={this.props.t('budget.item_edit')}
          visible={true}
          closable={false}
          okText={this.props.t('modal.save')}
          cancelText={this.props.t('modal.cancel')}
          onCancel={this.props.cancel}
          onOk={this.itemPost}>
          edit item
        </Modal>
    }
}

export default useWithForm(withTranslation()(EditItem));