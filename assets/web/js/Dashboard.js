import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import { Row, Col, Modal, Result, Button } from 'antd';

import widgets from '@app/web/js/widgets/Widgets';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            result: window.mfwApp.result
        };        
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
            {this.state.result !== null ? <Modal visible={true}
            closable={false}
            footer={null}
            onCancel={() => this.setState({result: null})}>
                <Result status={this.state.result.success ? 'success' : 'error'}
                title={this.state.result.success ? this.props.t(this.state.result.comment): this.state.result.error}
                extra={[<Button key="close" type='primary' onClick={() => this.setState({result: null})}>{this.props.t('modal.close')}</Button>]}/>
            </Modal> : null}
        </React.Fragment>
    }
}

export default withTranslation()(Dashboard);