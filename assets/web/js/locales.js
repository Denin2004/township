import ru from '@app/translations/ru.json';

import ruRU from 'antd/lib/locale/ru_RU';

const locales = {
    default: window.mfwApp.locale,
    ru: {
        moment: 'ru',
        i18n: 'ru',
        antd: ruRU
    },    
    i18resources: {
        ru: {
            translation: ru
        }
    }
};
  
export default locales;