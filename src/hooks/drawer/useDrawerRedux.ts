import { useDispatch, useSelector } from "react-redux";

import {
  openDrawer,
  closeDrawer,
} from "@feature/drawer";

import { RootState } from "@store";

export const useDrawerRedux = (stateRedux: boolean) => {
  const stateDrawer = useSelector((state: RootState) => state.drawer.value);
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    dispatch(openDrawer());
  };

  const handleDrawerClose = () => {
    dispatch(closeDrawer());
  };

  return {
    handleDrawerOpen,
    handleDrawerClose,
    stateDrawer,
  };
};
