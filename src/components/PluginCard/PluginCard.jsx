import React, {Component} from 'react';
import Radium from 'radium';
import _ from 'lodash';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import {uiBlue, uiDarkBlock$, uiDarkBox$, uiDarkBox_} from '../../styles/colors';

const style = {
  backgroundColor: uiDarkBox$,
  textAlign: 'center',
  margin: '10px auto',
  maxWidth: 850
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
};

const chipStyle = {
  display: 'inline-block',
  margin: '0 5px',
  backgroundColor: uiDarkBlock$
};

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
        {
          this.props.description ?
          <CardText style={{fontSize: 18}}>{this.props.description}</CardText>
          : null
        }
        <CardText style={{padding: 0}}>{
          _.map(this.props.tags, (name, i) => <Chip key={i} style={chipStyle} labelStyle={{color: uiBlue}}>{name}</Chip>)
        }</CardText>
      </Card>
    );
  }
};
