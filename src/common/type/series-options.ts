/**
 * Represents the type of partial options for each series type.
 *
 * For example a bar series has options represented by {@link BarSeriesPartialOptions}.
 */
export interface SeriesPartialOptionsMap {
	/**
	 * The type of bar series partial options.
	 */
	Bar: any; //BarSeriesPartialOptions;
	/**
	 * The type of candlestick series partial options.
	 */
	Candlestick: any; //CandlestickSeriesPartialOptions;
	/**
	 * The type of area series partial options.
	 */
	Area: any; //AreaSeriesPartialOptions;
	/**
	 * The type of baseline series partial options.
	 */
	Baseline: any; //BaselineSeriesPartialOptions;
	/**
	 * The type of line series partial options.
	 */
	Line: any; //LineSeriesPartialOptions;
	/**
	 * The type of histogram series partial options.
	 */
	Histogram: any; //HistogramSeriesPartialOptions;
}
