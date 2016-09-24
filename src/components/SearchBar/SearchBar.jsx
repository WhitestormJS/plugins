import React from 'react';
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

function SearchBar() {
  const hideWhenFocused = (e) => {

  }

  return (
    <TextField hintText="Search Addons..."
      style={style}
      inputStyle={{textAlign: 'center'}}
      hintStyle={{textAlign: 'center', width: 'inherit', color: '#B8BBBE'}}
      underlineShow={false}
      onFocus={hideWhenFocused}
    />
  );
}

export {
  SearchBar as default,
};
