import React, {Component} from 'react';
import { Routes, Route } from 'react-router-dom';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import {ConfigProvider, message} from 'antd';

import withRouter from '@app/hooks/withRouter';

import Login from '@app/web/js/Login';
import Pages from '@app/web/js/Pages';

import locales from '@app/web/js/locales';

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
        this.state = {
            locale: locales.default
        };
        if (this.state.locale != locales.default) {
            moment.locale(locales[this.state.locale].moment);
            window.mfwApp.formats.date = moment.localeData().longDateFormat('L');
            window.mfwApp.formats.time = moment.localeData().longDateFormat('LT');
            window.mfwApp.formats.datetime = window.mfwApp.formats.date + ' ' + window.mfwApp.formats.time;
            i18n.changeLanguage(this.state.locale);
        }
    }

    render() {
        return (
            <ConfigProvider locale={locales[this.state.locale].antd}> 
                <Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route path="*" element={<Pages/>} />
                </Routes>
            </ConfigProvider>
        )
    }
}

export default App;
//export default withRouter(App); ???