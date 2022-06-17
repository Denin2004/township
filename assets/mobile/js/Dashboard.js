import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import { Space, Collapse, Result, Button } from 'antd-mobile';

import widgets from '@app/mobile/js/widgets/Widgets';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            result: window.mfwApp.result,
            invoice: null
        };        
    }
    
    render() {
        return this.state.result != null ? <Result
          status={this.state.result.success ? 'success' : 'error'}
          title={this.props.t(this.state.result.comment)}
          description={<Button color='success' onClick={() => this.setState({result: null})}>{this.props.t('modal.close')}</Button>}
        /> : <React.Fragment>
            <h4>{this.props.t('common.dashboard')}{window.mfwApp.user.lands.length != 0 ? ' '+this.props.t('land.short')+' '+window.mfwApp.user.lands.map(land => land.num).join()+'.' : ''}</h4>
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