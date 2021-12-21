import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Modal, Spin, message, Descriptions, Table } from 'antd';

import axios from 'axios';

import MfwNumber from '@app/mfw/MfwNumber';

class OwnerModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            form: null
        };
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.township.land.owner.form+'/'+this.props.id,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
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

    render() {
        return <Modal title={this.props.t('land.owner.__')}
            visible={true}
            closable={false}
            cancelText={this.props.t('modal.close')}
            onCancel={this.props.close}
            okText={this.props.t('modal.save')}
            onOk={this.post}>
            {this.state.loading ? (
                <div className="d-flex justify-content-center align-items-center">
                    <Spin/>
                </div>
            ) : (
            <React.Fragment>
            </React.Fragment>
            )}
        </Modal>
    }
}

export default withTranslation()(OwnerModal);