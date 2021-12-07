import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import { Space } from 'antd-mobile';

import widgets from '@app/mobile/js/widgets/Widgets';

class Dashboard extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return <React.Fragment>
                {window.mfwApp.user.widgets.map(name => {
                    if (widgets[name] != undefined) {
                        const Widget = widgets[name].node;
                        return <Widget key={name} />;
                    }
                })}
            </React.Fragment>
    }
}

export default withTranslation()(Dashboard);