import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import { withCookies } from 'react-cookie';

import {Layout, Select, DatePicker} from 'antd-mobile';

import moment from 'moment-timezone';

import locales from '@app/locales';

class Main extends Component {
    constructor(props){
        super(props);
        this.setLocale = this.setLocale.bind(this); 
    }

    setLocale(locale) {
        this.props.setLocale(locale);
    }
    
    render() {
        const locale = this.props.cookies.get('locale') ? this.props.cookies.get('locale') : locales.default;
        return (
            <Layout>
                <Layout.Content>
                    <Select defaultValue={locale} style={{ width: 120 }} onChange={this.setLocale}>
                        <Select.Option value="en">En</Select.Option>
                        <Select.Option value="ru">Ru</Select.Option>
                    </Select>                
                    <DatePicker defaultValue={moment()} format={window.mfwApp.formats.date} />
                    {this.props.t('test')}
                </Layout.Content>
            </Layout> 
        )
    }
}

export default withTranslation()(withCookies(Main));