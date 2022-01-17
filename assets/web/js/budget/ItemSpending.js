import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import { message, Modal, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import axios from 'axios';

class ItemSpending extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false
        };
    }

    componentDidMount() {
/*        axios.get(
            window.mfwApp.urls.budget.item.spending+'/'+this.props.id,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    loading: false,
                    form: res.data.form,
                    byMonth: res.data.byMonth
                });
            } else {
                message.error(this.props.t(res.data.error));
                this.props.cancel();
            }
        }).catch(error => {
            if (error.response && error.response.data) {
                message.error(this.props.t(error.response.data.error));
                this.props.cancel();
            } else {
                message.error(error.toString());
                this.props.cancel();
            }
        });*/
    }
    
    render() {
        return  this.state.loading ? null : <Modal
          title={this.props.t('budget.item.spending')}
          visible={true}
          closable={false}
          okText={null}
          okButtonProps={{className: 'd-none'}}
          cancelText={this.props.t('modal.close')}
          onCancel={this.props.cancel}>
        </Modal>
    }
}

export default withTranslation()(ItemSpending);