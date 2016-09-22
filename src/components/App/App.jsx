import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

function App() {
  return (
    <RaisedButton onClick={() => alert('WHS!')}>
      Hello!
    </RaisedButton>
  );
}

export {
  App as default,
};
