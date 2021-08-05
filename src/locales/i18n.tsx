import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import pt_BR from './translations/pt_BR.json';
import en_US from './translations/en_US.json';
import fr_FR from './translations/fr_FR.json';

const resources = {
  ['pt-BR']: pt_BR,
  ['en-US']: en_US,
  ['fr-FR']: fr_FR
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt-BR',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;