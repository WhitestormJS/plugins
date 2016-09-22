import React from 'react';
import TextField from 'material-ui/TextField';
import {uiDarkField_, uiDark_} from '../../styles/colors';

const styles = {
  inputStyle: {
    color: uiDark_
  },
  hintStyle: {
    color: uiDarkField_
  },
  underlineStyle: {
    borderColor: uiDarkField_
  },
  underlineFocusStyle: {
    borderColor: uiDark_
  }
}

function SearchBar() {
  return (
    <TextField hintText="Search here!"
      hintStyle={styles.hintStyle}
      underlineStyle={styles.underlineStyle}
      underlineFocusStyle={styles.underlineFocusStyle}
      inputStyle={styles.inputStyle}
    />
  );
}

export {
  SearchBar as default,
};
