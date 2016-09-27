import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import {uiDarkField_, uiDark_} from '../../styles/colors';

const style = {
  fontSize: '30px',
  lineHeight: '36px',
  width: 500,
  height: 60,
  alignSelf: 'center',
  margin: '0 10px'
}

class SearchBar extends Component {
  render() {
    return (
      <TextField hintText="Search Addons..."
        style={style}
        inputStyle={{textAlign: 'center'}}
        hintStyle={{textAlign: 'center', width: 'inherit', color: '#B8BBBE'}}
        underlineShow={false}
        onChange={this.props.handleChange}
      />
    );
  }
}

export {
  SearchBar as default,
};
