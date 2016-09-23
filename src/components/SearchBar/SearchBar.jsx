import React from 'react';
import TextField from 'material-ui/TextField';
import {uiDarkField_, uiDark_} from '../../styles/colors';

const styles = {
  style: {
    fontSize: '30px',
    lineHeight: '36px',
    width: 500,
    height: 60,
    alignSelf: 'center',
    margin: '0 10px'
  }
}

function SearchBar() {
  return (
    <TextField hintText="Search Addons..."
      style={styles.style}
    />
  );
}

export {
  SearchBar as default,
};
