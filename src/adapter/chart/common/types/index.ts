import { ISeriesApi } from "lightweight-charts";

export declare type TypeStop = 'Loss' | 'Gain';
export declare type TypeSeries = 'Line' | 'Histogram' | 'Area';
export declare type TypeBar = ISeriesApi<"Candlestick"> | ISeriesApi<"Bar">

export declare type TypeIndicator = 'SMA' | 'EMA' | 'WMA';
export declare type TypeCondition = 'IndicatorCrossIndicator';