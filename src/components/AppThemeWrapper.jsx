import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './App';
import * as THEME from '../styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    textColor: THEME.uiDark_,
    primary1Color: THEME.uiDarkBlock$
  },

  textField: {
    hintColor: THEME.uiDarkField_,
    focusColor: THEME.uiDark_
  }
});

class AppThemeWrapper extends Component {
  componentWillMount() {
    injectTapEventPlugin();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <App />
      </MuiThemeProvider>
    );
  }
}

export {
  AppThemeWrapper as default,
};
