import ru from '@app/translations/ru.json';

import ru_RU from 'antd-mobile/es/locales/en-US';

const locales = {
    default: window.mfwApp.locale,
    ru: {
        moment: 'ru',
        i18n: 'ru',
        antd: ru_RU
    },    
    i18resources: {
        ru: {
            translation: ru
        }
    }
};
  
export default locales;