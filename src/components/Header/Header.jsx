import React from 'react';
import AppBar from 'material-ui/AppBar';
import SearchBar from '../SearchBar';
import {uiDarkBlock$} from '../../styles/colors';

const style = {
  backgroundColor: uiDarkBlock$,
  justifyContent: 'space-around'
};

function Header() {
  return (
    <AppBar showMenuIconButton={false} titleStyle={{display: 'none'}} style={style}>
      <SearchBar />
    </AppBar>
  );
}

export {
  Header as default,
};
