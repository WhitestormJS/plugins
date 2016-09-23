import React from 'react';
import {Card, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import SearchBar from '../SearchBar';
import {uiDarkBlock$} from '../../styles/colors';

const style = {
  backgroundColor: uiDarkBlock$
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around'
};

const logoStyle = {
  height: 50,
  alignSelf: 'center',
  position: 'relative',
  margin: '0 10px'
};

function Header() {
  return (
    <Card style={style} containerStyle={containerStyle}>
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
