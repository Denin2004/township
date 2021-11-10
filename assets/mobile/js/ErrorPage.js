import React, {Component} from 'react';
import {Card, WingBlank, WhiteSpace, Icon} from 'antd-mobile';

import i18n from '@app/i18app';
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
            <WingBlank size="lg">
                <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header title={this.props.t('errorPage.error')+': '+this.state.code}/> 
                        <Card.Body>
                            <div>{this.props.t(this.state.text)}</div>
                            <WhiteSpace size="lg"></WhiteSpace>
                            <div>{this.props.t('errorPage.body')}&nbsp;<a href="/login">{this.props.t('login.relogin')}</a></div>
                        </Card.Body>
                    </Card>
                <WhiteSpace size="lg" />
            </WingBlank>
        )
    }
}

export default withTranslation()(ErrorPage);