import React from 'react';
import {Card, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import SearchBar from '../SearchBar';
import {uiDarkBlock$} from '../../styles/colors';

const style = {
  backgroundColor: uiDarkBlock$,
  textAlign: 'center'
};

const logoStyle = {
  width: 150,
  left: 50,
  top: 35,
  position: 'absolute'
};

function Header() {
  return (
    <Card style={style}>
      <img src="images/logo.png" style={logoStyle}></img>
      <SearchBar />
      <CardActions>
        <FlatButton label="Plugins" />
        <FlatButton label="Components" />
      </CardActions>
    </Card>
  );
}

export {
  Header as default,
};
