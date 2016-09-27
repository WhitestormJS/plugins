import React, {Component} from 'react';
import {Card, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import SearchBar from '../SearchBar';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import {uiDarkBlock$} from '../../styles/colors';

require([
  '../../images/logo_orange.png',
  '../../images/logo_blue.png',
  '../../images/logo_purple.png',
  '../../images/logo_green.png',
  '../../images/logo_fish.png',
  '../../images/logo_bear.png',
  '../../images/logo_rare.png',
  '../../images/logo_veryrare.png',
  '../../images/logo_extremelyrare.png'
]);

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

class Header extends Component {
  render() {
    return (
      <Card style={style} containerStyle={containerStyle}>
        <Logo />
        <SearchBar handleChange={this.props.handleSearch} />
        <CardActions style={{alignSelf: 'center'}}>
          <FlatButton label="Plugins" onClick={this.props.changeType(['whs-plugin'])}/>
          <FlatButton label="Components" onClick={this.props.changeType(['whs-component'])} />
          <FlatButton icon={<ClearIcon />} style={{minWidth: 36}} onClick={this.props.changeType(['whs-plugin', 'whs-component'])} />
        </CardActions>
      </Card>
    );
  }
  // onChange={this.props.handleSearch}
}

export {
  Header as default,
};
