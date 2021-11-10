import React, {Component} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import { withCookies } from 'react-cookie';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import {ConfigProvider, message} from 'antd';

import Login from '@app/components/mobile/Login';
//import Main from '@app/components/Main';

import locales from '@app/locales';

import moment from 'moment-timezone';

moment.tz.setDefault('Etc/GMT0');
moment.locale(locales[locales.default].moment);

window.mfwApp.formats = {
    date: moment.localeData().longDateFormat('L'),
    time: moment.localeData().longDateFormat('LT'),
    datetime: moment.localeData().longDateFormat('L')+' '+moment.localeData().longDateFormat('LT'),
    datetimeToMoment: function(datetime) {return moment(datetime, window.mfwApp.formats.datetime)},
    dateToMoment: function(datetime) {return moment(datetime, window.mfwApp.formats.date)}
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: locales.i18resources,
        lng: locales[locales.default].i18n,
        fallbackLng: locales[locales.default].i18n,
        interpolation: {
            escapeValue: false
        }
    });

class App extends Component {
    constructor(props){
        super(props);
        this.setLocale = this.setLocale.bind(this);
        this.mainPage = this.mainPage.bind(this);
        this.state = {
            locale: this.props.cookies.get('locale') ? this.props.cookies.get('locale') : locales.default
        };
        if (this.state.locale != locales.default) {
            moment.locale(locales[this.state.locale].moment);
            window.mfwApp.formats.date = moment.localeData().longDateFormat('L');
            window.mfwApp.formats.time = moment.localeData().longDateFormat('LT');
            window.mfwApp.formats.datetime = window.mfwApp.formats.date + ' ' + window.mfwApp.formats.time;
            i18n.changeLanguage(this.state.locale);
        }
    }

    componentDidMount() {

    }
    
    setLocale(locale) {
        locale = locales[locale] == undefined ? window.mfwApp.locale : locale;
        moment.locale(locales[locale].moment);
        window.mfwApp.formats.date = moment.localeData().longDateFormat('L');
        window.mfwApp.formats.time = moment.localeData().longDateFormat('LT');
        window.mfwApp.formats.datetime = window.mfwApp.formats.date + ' ' + window.mfwApp.formats.time;
        i18n.changeLanguage(locale);
        this.props.cookies.set('locale', locale, { path: '/' });
        this.setState({locale: locale});
    }
    
    mainPage() {
        return (
            <Main setLocale={this.setLocale}/>
        );
    }

    render() {
        return (
            <ConfigProvider locale={locales[this.state.locale].antd}> 
                <Switch>
                    <Route path="/login" component={Login} />
                </Switch>
            </ConfigProvider>
        )
        
        
        return (
            <ConfigProvider locale={locales[this.state.locale].antd}> 
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route component={this.mainPage} />
                </Switch>
            </ConfigProvider>
        )
    }
}

export default withRouter(withCookies(App));