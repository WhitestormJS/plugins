import React from 'react';
import Header from '../Header';
import {uiDark$} from '../../styles/colors';

document.body.style.background = uiDark$;

function App() {
  return (
    <section>
      <Header />
    </section>
  );
}

export {
  App as default,
};
