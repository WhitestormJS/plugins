import React from 'react';
import TextField from 'material-ui/TextField';
import {uiDarkField_, uiDark_} from '../../styles/colors';

const styles = {
  inputStyle: {
    color: uiDark_,
    textAlign: 'center'
  },
  hintStyle: {
    color: uiDarkField_
  },
  underlineStyle: {
    borderColor: uiDarkField_
  },
  underlineFocusStyle: {
    borderColor: uiDark_
  },
  style: {
    fontSize: '30px',
    lineHeight: '36px',
    width: 400,
    height: 60
  }
}

function SearchBar() {
  return (
    <TextField hintText="Search Plugins..."
      hintStyle={styles.hintStyle}
      underlineStyle={styles.underlineStyle}
      underlineFocusStyle={styles.underlineFocusStyle}
      inputStyle={styles.inputStyle}
      style={styles.style}
    />
  );
}

export {
  SearchBar as default,
};
