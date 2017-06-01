import React from 'react';
import AppBar from 'material-ui/AppBar';

const Menu = () => (
  <AppBar
    title="Budget Hero"
    titleStyle={{textAlign: "center"}}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    zDepth={0}
    style={{
      position: "fixed",
      height: "60px"
      }}
  />
);

export default Menu;