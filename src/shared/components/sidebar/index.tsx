import * as React from "react";
import useStyles from "./style";
import { useNavigate } from "react-router-dom";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import IconButton from "@mui/material/IconButton";
import FitbitIcon from '@mui/icons-material/Fitbit';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';

import { useDrawerRedux } from "@hooks/drawer/useDrawerRedux";

const drawerWidth = 220;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const classes = useStyles();
  const navigate = useNavigate();

  const theme = useTheme();
  const [open] = React.useState(false);
  const { handleDrawerClose, stateDrawer } = useDrawerRedux(open);

  const itemsList = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      onClick: () => navigate("/"),
    },
    {
      text: "Strategy",
      icon: <FitbitIcon />,
      onClick: () => navigate("/strategy"),
    },
    {
      text: "Backtest",
      icon: <AlignVerticalBottomIcon />,
      onClick: () => navigate("/backtest"),
    },
    {
      text: "Trader",
      icon: <CandlestickChartIcon />,
      onClick: () => navigate("/trader"),
    }
  ];

  return (
    <Drawer variant="permanent" open={stateDrawer}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>

      <Divider />

      <List>
        {itemsList.map(({ text, icon, onClick }, index) => {
          return (
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              button
              key={index}
              onClick={onClick}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: stateDrawer ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: stateDrawer ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ opacity: stateDrawer ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}
