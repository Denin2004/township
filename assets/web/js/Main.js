import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';

import locales from '@app/web/js/locales';

class Main extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
          <div>{this.props.t('test')}</div>
        )
    }
}

export default withTranslation()(Main);