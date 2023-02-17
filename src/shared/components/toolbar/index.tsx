import React from "react";
import { styled } from "@mui/material/styles";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

import { useDrawerRedux } from "@hooks/drawer/useDrawerRedux";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth = 220;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function ToolBar() {
  const [open] = React.useState(true);
  const { handleDrawerOpen, stateDrawer } = useDrawerRedux(open);

  return (
    <AppBar position="fixed" open={stateDrawer}>
      <Toolbar variant="dense">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(stateDrawer && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="subtitle2">
          ITrader
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
