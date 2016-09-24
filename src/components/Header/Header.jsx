import React, {Component} from 'react';
import {Card, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import SearchBar from '../SearchBar';
import {uiDarkBlock$} from '../../styles/colors';

const style = {
  backgroundColor: uiDarkBlock$,
  width: 'calc(100% - 16px)',
  top: 8,
  left: 8,
  position: 'fixed'
};

const containerStyle = {
  display: 'flex',
  height: 70,
  justifyContent: 'space-around'
};

const logoStyle = {
  height: 50,
  alignSelf: 'center',
  position: 'relative',
  margin: '0 10px',
  cursor: 'pointer'
};

class Logo extends Component {
  constructor () {
    super();
    const _path = 'images/';

    this.state = {
      currentLogo: _path + 'logo_orange.png'
    };

    this.imageList = [
      'logo_orange.png',
      'logo_blue.png',
      'logo_purple.png',
      'logo_green.png'
    ];

    this.rareList = {
      'logo_fish.png': 70,
      'logo_bear.png': 100,
      'logo_rare.png': 200,
      'logo_veryrare.png': 350,
      'logo_extremelyrare.png': 3000
    }

    this.changeImage = () => {
      let newLogo = this.state.currentLogo;

      while (newLogo === this.state.currentLogo) {
        for (let key in this.rareList) {
          const value = this.rareList[key];

          if (Math.round(Math.random() * value) === value) {
            newLogo = _path + key;
          }
        }

        if (newLogo === this.state.currentLogo)
          newLogo = _path + this.imageList[Math.round(Math.random() * 3)];
      }

      this.setState({currentLogo: newLogo});
    }
  }

  render() {
    return (<img src={this.state.currentLogo} style={logoStyle} onClick={this.changeImage}></img>)
  }
}

function Header() {
  return (
    <Card style={style} containerStyle={containerStyle}>
      <Logo />
      <SearchBar />
      <CardActions style={{alignSelf: 'center'}}>
        <FlatButton label="Plugins" />
        <FlatButton label="Components" />
      </CardActions>
    </Card>
  );
}

export {
  Header as default,
};
