import React from 'react';
import TextField from 'material-ui/TextField';
import {uiDarkField_, uiDark_} from '../../styles/colors';

const styles = {
  inputStyle: {
    textAlign: 'center'
  },
  style: {
    fontSize: '30px',
    lineHeight: '36px',
    width: 500,
    height: 60
  }
}

function SearchBar() {
  return (
    <TextField hintText="Search Addons..."
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
