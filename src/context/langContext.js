import { createContext } from 'react';

const AppLangContext = createContext({
  appLang: '',
  setAppLang: (lang) => {}
});

export default AppLangContext;
