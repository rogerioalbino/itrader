import { createChart } from "lightweight-charts";

import Indicator from "./indicators/indicator";
import Condition from "./conditions/condition";

import { TypeBar } from "./common/types";
import { TimeFrame } from "./common/enums";

import { chartOptions } from "./properties/chart-options";
import { EventEmitter } from 'events';

export default class ChartAdapter {
  private _chart: any;
  private _symbolSeries: any;
  private _container: HTMLElement;
  private _dataSeries: any;
  private _timeFrame: TimeFrame;
  private _indexTimeFrame: number = 0;

  private _indicators: Array<any> = [];
  private _conditions: Array<any> = [];
  private _markers: Array<any> = [];

  public eventEmitter = new EventEmitter();

  /**
 * constructor.
 * 
 * @param container 
 * @param barType 
 * @param dataSeries 
 * @param timeFrame 
 */
  constructor(container: HTMLElement, barType: any, dataSeries: any, timeFrame: TimeFrame) {
    this._container = container;
    this._dataSeries = dataSeries;
    this._timeFrame = timeFrame;
    this._chart = this._createChart();
    this.setBarType(barType)
  }

  /**
 * init
 * This method returns a Promise<void>.
 */
  public async init(): Promise<void> {
    this._subscribeCrosshairMove();
    this._chart.applyOptions({ priceFormat: { type: 'price', precision: 2, minMove: 0.01 } });

    while (true) {
      // Add Symbol Chart
      this._plotSymbol(this._symbolSeries);

      // Add Indicators Chart
      const indicators = this._plotIndicators();

      // Add Marker Chart
      // if (indicators.length) this._plotMarker(indicators);

      this._indexTimeFrame++;
      await this._sleep(this._timeFrame);
    }
  }

  public _subscribeCrosshairMove() {
    this.eventEmitter.on('CrosshairMove', (callback: any) => {
      this._chart.subscribeCrosshairMove((param: any) => {
        if (param.time)
          return callback(param.seriesPrices.get(this._symbolSeries));
      })
    });
  }

  /**
  * _sleep
  * This method returns a Promise<void>.
  */
  private async _sleep(time: number): Promise<void> {
    // const hours = (time: number): number => time * 60 * 60 * 1000
    // const minutes = (time: number): number => time * 60 * 1000;
    // const seconds = (time: number): number => time * 1000;

    // return new Promise(resolve => setTimeout(resolve, ms * 60 * 1000));
    // return new Promise(resolve => setTimeout(resolve, seconds(1)));
    return new Promise(resolve => setTimeout(resolve, 200));
  }

  private _createChart() {
    return createChart(this._container, chartOptions);
  }

  public setBarType(barType: any) {
    switch (barType) {
      case 'Bar':
        this._symbolSeries = this._chart.addBarSeries();
        break;
      case 'Candlestick':
        this._symbolSeries = this._chart.addCandlestickSeries();
    }
  }

  public plotStop(price: number, style: { color: string, lineWidth: string, lineStyle: string, title: string }) {
    this._symbolSeries.createPriceLine({ price, style });
  }

  private _plotSymbol(symbolSeries: TypeBar) {
    return symbolSeries.update(this._dataSeries.at(this._indexTimeFrame));
  };

  /**
   * _plotIndicators
   * This method returns Array<any> or undefined.
   */
  private _plotIndicators(): any {
    const indicators: any = [];

    this._indicators.forEach((indicator) => {
      const period = indicator.params.period;
      const source = this._dataSeries[this._indexTimeFrame][indicator.params.source];
      const type = indicator.type;

      const value = Indicator.execute(type, { period, source, type });

      if (value) {
        this._updateSerie(indicator.call, value);
        indicators.push({ indicator: { period, source, type, value } })
      }
    });
    return indicators;
  }

  private _updateSerie(seriesType: any, callback: any) {
    const { time } = this._dataSeries.at(this._indexTimeFrame);
    seriesType.update({ time, value: callback });
  };

  private _plotMarker(indicators: any) {

    this._conditions.forEach((rule, index) => {
      const period = rule.params.period;
      const source = this._dataSeries[this._indexTimeFrame][rule.params.source];
      const type = indicators;

      const value = Condition.execute(type, { period, source, type });
      // const condition = Condition[rule.condition[index].type as TypeCondition](indicators, rule.condition[index].crosses, indicators.type);
    });
    // strategy.entry.forEach((rule, index) => {
    //   const condition = Condition[rule.condition[index].type as TypeCondition](indicator.value, rule.condition[index].crosses, indicator.type);
    //   if (condition) {
    //     const bar = this._dataSeries.at(this._indexTimeFrame)
    //     this._setMarker({ time: bar.time, "id": 1, "text": "BUY" });
    //   }
    // });
    // this._setMarker({ time: "2002-10-25", "id": 2, "text": "SELL" });
    // return this._symbolSeries.setMarkers(this._getMarker());
  };

  public _setMarker(marker: { time: string, id: number, text: string }): void {
    this._markers.push({ time: marker.time, "position": "belowBar", "shape": "arrowUp", "color": "yellow", "id": marker.id, "text": marker.text })
  };

  private _getMarker(): any {
    return this._markers;
  };

  public setConditions(condition: any): void {
    this._conditions.push(condition)
  }

  /**
   * setIndicator
   * This method returns a void.
   * @param typeSeries
   * @param indicator: { type: string, period: number, source: string }
   * @param style: { title: string, color: string, lineWidth: number, priceLineVisible: boolean }
   */
  public setIndicator(
    typeSeries: any,
    indicator: { type: string, period: number, source: string },
    style: { title: string, color: string, lineWidth: number, priceLineVisible: boolean }
  ): void {
    let call = null;
    switch (typeSeries) {
      case 'Line':
        call = this._chart.addLineSeries(style);
        break;
      case 'Histogram':
        call = this._chart.addHistogramSeries(style);
        break;
      case 'Area':
        call = this._chart.addAreaSeries(style);
        break;
    }
    this._indicators.push({ call, type: indicator.type, params: indicator, style })
  }

  public removeIndicator(priceLine: any): void {
    this._chart.removePriceLine(priceLine);
  }

}
