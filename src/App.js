import React, { useReducer } from 'react';

import Header from './components/header';
import Content from './components/content';

import AppLangContext from './context/langContext';
import langReducer from './context/langReducer';
import { SET_APP_LANG } from './context/types';

const App = () => {

  const initialState = {
    appLang: '',
  };

  const [state, dispatch] = useReducer(langReducer, initialState);

  const setAppLang = (lang) => {
    dispatch({
      type: SET_APP_LANG,
      payload: lang,
    })
  };

  return (
    <AppLangContext.Provider value={{
      appLang: state.appLang,
      setAppLang
    }}>
      <div className="App">
        <Header />
        <Content />
      </div>
    </AppLangContext.Provider>
  );
}

export default App;
