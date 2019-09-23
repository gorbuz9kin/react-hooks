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

  const context = useContext(AppLangContext);

  const updateContent = () => {
    if (context.appLang) {
      console.log(111, ' network request ====> ', context.appLang);
    }
  }

  useEffect(() => {
    updateContent();
  }, [context.appLang]);

  return (
    <div>
      <p>{`Application language: ${context.appLang}`}</p>
    </div>
  );
};
