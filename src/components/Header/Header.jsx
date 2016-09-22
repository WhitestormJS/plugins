import React from 'react';
import AppBar from 'material-ui/AppBar';

function Header() {
  return (
    <AppBar title="WHS Plugins" showMenuIconButton={false} />
  );
}

export {
  Header as default,
};
