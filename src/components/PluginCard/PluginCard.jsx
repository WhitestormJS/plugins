import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {uiDarkBox$} from '../../styles/colors';

const style = {
  backgroundColor: uiDarkBox$,
  textAlign: 'center',
  margin: '10px 0'
};

const headerStyle = {
  fontSize: 30
};

export default class PluginCard extends Component {
  render() {
    return (
      <Card style={style}>
        <CardHeader
          title={this.props.name}
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
