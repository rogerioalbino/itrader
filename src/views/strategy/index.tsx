import { ReactElement, useState } from "react";

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from "@mui/icons-material/Delete";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";
import AlignHorizontalCenterIcon from "@mui/icons-material/AlignHorizontalCenter";

import {
  List,
  Collapse,
  ListItemText,
  ListItemIcon,
  ListSubheader,
  ListItemButton,
  Box,
  Grid,
  styled,
  Paper,
  ListItem,
  IconButton,
} from "@mui/material";

import useStyles from "./style";

export default function Strategy(): ReactElement {
  const classes = useStyles();

  const [openBuy, setOpenBuy] = useState(true);
  const [openSell, setOpenSell] = useState(true);

  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleOpenBuy = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpenBuy(!openBuy);
  };

  const handleOpenSell = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpenSell(!openSell);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Item
            sx={{
              width: "100%",
              maxWidth: 300,
              height: "80vh",
            }}
          >
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Operations
                </ListSubheader>
              }
            >
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleOpenBuy(event, 0)}
              >
                <ListItemIcon>
                  <AlignHorizontalLeftIcon sx={{ fontSize: 17 }} />
                </ListItemIcon>
                <ListItemText
                  primary="Entry"
                  primaryTypographyProps={{ fontSize: "12px" }}
                />
              </ListItemButton>

              <Collapse in={openBuy} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItem
                      secondaryAction={
                        <IconButton edge="end" aria-label="add">
                          <AddIcon sx={{ fontSize: 17 }} />
                        </IconButton>
                      }
                    >
                      <ListItemIcon>
                        <TrendingUpIcon sx={{ fontSize: 17 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Buy at Market"
                        primaryTypographyProps={{ fontSize: "12px" }}
                      />
                    </ListItem>
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItem
                      secondaryAction={
                        <IconButton edge="end" aria-label="add">
                          <AddIcon sx={{ fontSize: 17 }} />
                        </IconButton>
                      }
                    >
                      <ListItemIcon>
                        <TrendingDownIcon sx={{ fontSize: 17 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Short at Market"
                        primaryTypographyProps={{ fontSize: "12px" }}
                      />
                    </ListItem>
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleOpenSell(event, 1)}
              >
                <ListItemIcon>
                  <AlignHorizontalRightIcon sx={{ fontSize: 17 }} />
                </ListItemIcon>
                <ListItemText
                  primary="Exit"
                  primaryTypographyProps={{ fontSize: "12px" }}
                />
              </ListItemButton>
              <Collapse in={openSell} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemIcon>
                      <AlignHorizontalCenterIcon sx={{ fontSize: 17 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Short at Market"
                      primaryTypographyProps={{ fontSize: "12px" }}
                    />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Item>
        </Grid>

        <Grid item xs={9}>
          <Item
            sx={{
              width: "100%",
              height: "80vh",
            }}
          >
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Item>xs=12</Item>
              </Grid>
              <Grid item xs={8}>
                <Item>xs=8</Item>
              </Grid>
              <Grid item xs={4}>
                <Item>xs=4</Item>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
