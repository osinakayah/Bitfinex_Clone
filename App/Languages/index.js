import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
const en = require('./languages/en.json');
const fr = require('./languages/fr.json');

i18n.fallbacks = true;
i18n.translations = { fr, en };
i18n.locale = Localization.locale;

export default i18n;
