import { useDispatch, useSelector } from "react-redux";

import {
  decrement,
  increment,
} from "@feature/counter";

import { RootState } from "@store";

export const useCounterRedux = () => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return {
    handleIncrement,
    handleDecrement,
    counter,
  };
};
