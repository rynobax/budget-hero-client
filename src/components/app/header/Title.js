import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import {white} from 'material-ui/styles/colors';

const Title = (props) => (
  <AppBar
    title="Budget Hero"
    titleStyle={{textAlign: "center"}}
    iconElementLeft={
      <IconMenu
        iconButtonElement={<IconButton><Menu color={white}/></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        onItemTouchTap={props.logout}
        >
        <MenuItem primaryText="Sign out"  leftIcon={<ExitToApp />} />
      </IconMenu>
    }
    zDepth={0}
    style={{
      position: "fixed",
      height: "60px"
      }}
  />
);

export default Title;