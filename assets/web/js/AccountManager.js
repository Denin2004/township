import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'antd';

class AccountManager extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return <React.Fragment>
        AccountManager
            </React.Fragment>
    }
}

export default withTranslation()(AccountManager);