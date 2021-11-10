import enUs from '@app/translations/enUs.json';
import ru from '@app/translations/ru.json';

import en_Us from 'antd-mobile/lib/locale-provider/en_US';
import ru_RU from 'antd-mobile/lib/locale-provider/ru_RU';
import en_Us_calendar from 'antd-mobile/lib/calendar/locale/en_US';
import ru_RU_calendar from '@app/translations/calendar_ru_RU';

const locales = {
    default: window.mfwApp.locale,
    en: {
        moment: 'en',
        i18n: 'en',
        antd: en_Us,
        name: 'EN',
        calendar: en_Us_calendar
    },
    ru: {
        moment: 'ru',
        i18n: 'en' /*ru*/,
        antd: en_Us /*ru_RU*/,
        name: 'RU',
        calendar: ru_RU_calendar
    },    
    i18resources: {
        en: {
            translation: enUs
        },
        ru: {
            translation: ru
        }
    }
};
  
export default locales;