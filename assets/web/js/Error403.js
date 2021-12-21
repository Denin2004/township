import React, {Component} from 'react';
//import { useMatch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import {Alert} from 'antd';

class Error403 extends Component {
    render() {
        return <Alert
          message={this.props.t('errors.error')}
          description={this.props.t('security.error.403')}
          type="error"
          showIcon/>;
    }
}

export default withTranslation()(Error403);