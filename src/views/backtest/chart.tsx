import React, { useEffect } from "react";

import dataSeries from "./data/data-series";
import ChartAdapter from "../../adapter/chart/chart-adapter";
import { TimeFrame } from "./../../adapter/chart/common/enums";

import useStyles from "./style";

export default function Chart() {
  const valueInit = '00.00';
  const classes = useStyles();
  const chartRef = React.useRef(null);
  const [crosshairMove, setCrosshairMove] = React.useState({ open: valueInit, high: valueInit, low: valueInit, close: valueInit });

  useEffect(() => {
    if (chartRef.current) {
      const container = document.getElementById("chart-container") as HTMLElement;
      const chart = new ChartAdapter(container, "Candlestick", dataSeries, TimeFrame.S1);

      chart.setIndicator(
        "Line",
        { type: "SMA", period: 21, source: "close" },
        { title: "SMA(21)", color: "red", lineWidth: 1, priceLineVisible: false }
      );

      chart.setIndicator(
        "Line",
        { type: "EMA", period: 50, source: "close" },
        { title: "EMA(50)", color: "yellow", lineWidth: 1, priceLineVisible: false }
      );

      chart.setIndicator(
        "Line",
        { type: "EMA", period: 200, source: "close" },
        { title: "EMA(200)", color: "blue", lineWidth: 1, priceLineVisible: false }
      );

      // chart.setIndicator(
      //   "Line",
      //   { type: "WMA", period: 20, source: "close" },
      //   { title: "WMA(20)", color: "blue", lineWidth: 1, priceLineVisible: false }
      // );

      chart.setConditions({
        type: "entry",
        condition: "BuyAtMarket",
        model: "IndicatorCrossIndicator",
        params: {
          crosses: "over",
          indicators: [
            { type: "sma", period: 20, source: "close" },
            { type: "sma", period: 200, source: "close" },
          ],
        },
      });

      chart.setConditions({
        type: "exit",
        condition: "SellAtMarket",
        model: "IndicatorCrossIndicator",
        params: {
          crosses: "under",
          indicator: [
            { type: "sma", period: 20, source: "close" },
            { type: "sma", period: 200, source: "close" },
          ],
        },
      });

      chart.init();
      chart.eventEmitter.emit("CrosshairMove", ({ open, high, low, close }: any) => { setCrosshairMove({ open, high, low, close })} );
    }
  }, []);

  return (
    <div className={classes.container} id="chart-container" ref={chartRef}>
      <div className={classes.info}>
        PETR4, 
        Open:{crosshairMove.open} High:{crosshairMove.high} Low:{crosshairMove.low} Close:{crosshairMove.close}
      </div>
      <div className={classes.indicators}></div>
    </div>
  );
}
