import React, {Component} from 'react';
import Radium from 'radium';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {uiDarkBox$, uiDarkBox_} from '../../styles/colors';

const style = {
  backgroundColor: uiDarkBox$,
  textAlign: 'center',
  margin: '10px 0'
};

const headerStyle = {
  fontSize: 30
};

const linkStyle = {
  color: uiDarkBox_,
  textDecoration: 'none',

  ':hover': {
    textDecoration: 'underline'
  }
}

@Radium
export default class PluginCard extends Component {
  render() {
    const link = (<a href="#" style={linkStyle}>{this.props.name}</a>)

    return (
      <Card style={style}>
        <CardHeader
          title={link}
          titleStyle={headerStyle}
          textStyle={{paddingRight: 0}}
        />
        { this.props.description ?
          <CardText>{this.props.description}</CardText>
          : null
        }
      </Card>
    );
  }
};
