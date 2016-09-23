import React from 'react';
import Header from '../Header';
import PluginList from '../PluginList';
import {uiDark$} from '../../styles/colors';

document.body.style.background = uiDark$;

function App() {
  return (
    <section>
      <Header />
      <PluginList />
    </section>
  );
}

export {
  App as default,
};
