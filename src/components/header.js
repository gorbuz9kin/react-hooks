// @flow

/* REACT */
import React, { useContext, useEffect } from 'react';

/* MODULES */

/* CUSTOM MODULES */
import AppLangContext from './../context/langContext';

/* CONFIGS */

/* STYLES */
// import {} from './styles';

/* TYPES */
import type { Node } from 'react';

// type _t_props = {||};

export default (): Node => {

  const LANG_LIST = ['RU', 'EN', 'PL'];
  const context = useContext(AppLangContext);

  const checkDefaultLang = () => {
    const defaultLang = localStorage.getItem('appLang');
    if (!defaultLang) {
      context.setAppLang('EN');
    } else {
      context.setAppLang(defaultLang);
    }
  }

  useEffect(() => {
    checkDefaultLang();
  }, []);

  return (
    <header>
      Header
      <ul>
        {
          LANG_LIST.map(i => (
            <li
              key={i}
              onClick={() => context.setAppLang(i)}
              className={i === context.appLang ? 'active' : ''}
            >
              {i}
            </li>

          ))
        }
      </ul>
      <hr />
    </header>
  );
};
