import React, {Component} from 'react';
import axios from 'axios';
import { withTranslation } from 'react-i18next';

import withRouter from '@app/hooks/withRouter';

class Pages extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            errorCode: 0
        }
        this.mainPage = this.mainPage.bind(this);
    }

    componentDidMount() {
        axios.get(
            '/config',
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                window.mfwApp.urls = JSON.parse(res.data.urls);
                this.setState({
                    loading: false
                });
            } else {
                Toast.fail(this.props.t(res.data.error));
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
                Toast.fail(error.toString());
                this.setState({
                    loading: false
                });
            }
        });
    }

    render() {
        return <div></div>;
    }
}

export default withRouter(withTranslation()(Pages));