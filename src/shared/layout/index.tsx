import useStyles from "./style";
import { BrowserRouter } from "react-router-dom";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Router from "@router";
import Toolbar from "@component/toolbar";
import Sidebar from "@component/sidebar";

export default function Layout() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Box className={classes.box}>
        <CssBaseline />
        <Toolbar />
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className={classes.drawerHeader} />
          <Router />
        </Box>
      </Box>
    </BrowserRouter>
  );
}
