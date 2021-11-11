import React, {Component} from 'react';

import { withTranslation } from 'react-i18next';

class ErrorPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            code: props.match.params.code ? props.match.params.code : props.code,
            text: props.match.params.code ? 'errorPage.'+props.match.params.code : props.text,
        }        
    }    
    
    render() {
        return (
            <div>Error page</div>
        )
    }
}

export default withTranslation()(ErrorPage);