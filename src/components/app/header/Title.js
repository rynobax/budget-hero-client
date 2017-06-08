import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import muiThemeable from 'material-ui/styles/muiThemeable';

const Title = (props) => {
  const alternateTextColor = props.muiTheme.palette.alternateTextColor;
  const height = "52px";
  return (
  <AppBar
    title="Budget Hero"
    titleStyle={{ textAlign: "center", height: height }}
    iconElementLeft={
      <IconMenu
        iconButtonElement={<IconButton><Menu color={alternateTextColor}/></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        onItemTouchTap={props.logout}
        >
        <MenuItem primaryText="Sign out"  leftIcon={<ExitToApp />} />
      </IconMenu>
    }
    iconElementRight={<div style={{color: alternateTextColor, height: height, lineHeight: height}}>{props.identity.username}</div>}
    zDepth={0}
    style={{ position: "fixed", height: height,  }}
  />
  );
};

export default muiThemeable()(Title);