import React, { ReactElement } from "react";
import { Box, Grid, styled, Paper } from "@mui/material";

import Chart from "./chart";

export default function Backtest(): ReactElement {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    width: "100%",
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Grid container spacing={1}>
        <Grid item sx={{ p: 0, border: 0 }}>
          <Chart/>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
