import React, {Component} from 'react';

import axios from 'axios';

import { withTranslation } from 'react-i18next';

class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            unread: -1
        };
    }

componentDidMount() {
        axios.get(
            window.mfwApp.urls.systemMonitor.unread,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    unread: res.data.unread
                });
            } else {
                Toast.fail(this.props.t(res.data.error));
            }
        }).catch(error => {
            if (error.response) {
                Toast.fail(this.props.t(error.response.status));
            } else {
                Toast.fail(error.toString());
            }
        });
    }

    render() {
        return <div>main page</div>
    }
}

export default withTranslation()(MainPage);