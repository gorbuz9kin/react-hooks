import { SET_APP_LANG } from './types';

const setAppLang = (lang, state) => {
  localStorage.setItem('appLang', lang);
  return { ...state, appLang: lang };
}

export default (state, action) => {
  switch (action.type) {
    case SET_APP_LANG:
      return setAppLang(action.payload, state);
    default:
      return state;
  }
}
