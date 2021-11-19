import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'antd';

import widgets from '@app/web/js/widgets/Widgets';

class Dashboard extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return <React.Fragment>
            <Row gutter={16}>
                {this.props.widgets.map(name => {
                    if (widgets[name] != undefined) {
                        const Widget = widgets[name].node;
                        return <Col key={name} span={widgets[name].width}>
                            <Widget />
                        </Col>;
                    }
                })}
            </Row>  
            </React.Fragment>
    }
}

export default withTranslation()(Dashboard);