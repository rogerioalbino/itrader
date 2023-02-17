import { AutoscaleInfo, AutoScaleMargins, DeepPartial, LastPriceAnimationMode, LineStyle, LineStyleOptions, LineType, LineWidth, PriceFormatBuiltIn, PriceLineSource, PriceRange, PriceScaleMargins, SeriesOptionsCommon } from "lightweight-charts";

const LineOptions = {
    /**
     * Line color.
     *
     * @defaultValue `'#2196f3'`
     */
    color: <string>'#2196f3',
    /**
     * Line style.
     *
     * @defaultValue {@link LineStyle.Solid}
     */
    lineStyle: <LineStyle>LineStyle.Solid,
    /**
     * Line width in pixels.
     *
     * @defaultValue `3`
     */
    lineWidth: <LineWidth>1,
    /**
     * Line type.
     *
     * @defaultValue {@link LineType.Simple}
     */
    lineType: <LineType>LineType.Simple,
    /**
     * Show the crosshair marker.
     *
     * @defaultValue `true`
     */
    crosshairMarkerVisible: <boolean>true,
    /**
     * Crosshair marker radius in pixels.
     *
     * @defaultValue `4`
     */
    crosshairMarkerRadius: <number>4,
    /**
     * Crosshair marker border color. An empty string falls back to the the color of the series under the crosshair.
     *
     * @defaultValue `''`
     */
    crosshairMarkerBorderColor: <string>'',
    /**
     * The crosshair marker background color. An empty string falls back to the the color of the series under the crosshair.
     *
     * @defaultValue `''`
     */
    crosshairMarkerBackgroundColor: <string>'',
    /**
     * Last price animation mode.
     *
     * @defaultValue {@link LastPriceAnimationMode.Disabled}
     */
    lastPriceAnimation: <LastPriceAnimationMode>LastPriceAnimationMode.Disabled
};

const OptionsCommon = {
    /**
     * Visibility of the label with the latest visible price on the price scale.
     *
     * @defaultValue `true`
     */
    lastValueVisible: <boolean>true,
    /**
     * You can name series when adding it to a chart. This name will be displayed on the label next to the last value label.
     *
     * @defaultValue `''`
     */
    title: <string>'SMA 20',
    /**
     * Target price scale to bind new series to.
     *
     * @defaultValue `'right'` if right scale is visible and `'left'` otherwise
     */
    priceScaleId: <string>'right',
    /**
     * Visibility of the series.
     * If the series is hidden, everything including price lines, baseline, price labels and markers, will also be hidden.
     * Please note that hiding a series is not equivalent to deleting it, since hiding does not affect the timeline at all, unlike deleting where the timeline can be changed (some points can be deleted).
     *
     * @defaultValue `true`
     */
    visible: <boolean>true,
    /**
     * Show the price line. Price line is a horizontal line indicating the last price of the series.
     *
     * @defaultValue `true`
     */
    priceLineVisible: <boolean>true,
    /**
     * The source to use for the value of the price line.
     *
     * @defaultValue {@link PriceLineSource.LastBar}
     */
    priceLineSource: <PriceLineSource>PriceLineSource.LastBar,
    /**
     * Width of the price line.
     *
     * @defaultValue `1`
     */
    priceLineWidth: <LineWidth>1,
    /**
     * Color of the price line.
     * By default, its color is set by the last bar color (or by line color on Line and Area charts).
     *
     * @defaultValue `''`
     */
    priceLineColor: <string>'',
    /**
     * Price line style.
     *
     * @defaultValue {@link LineStyle.Dashed}
     */
    priceLineStyle: <LineStyle>LineStyle.Dashed,
    /**
     * Price format.
     *
     * @defaultValue `{ type: 'price', precision: 2, minMove: 0.01 }`
     */
    priceFormat: <PriceFormatBuiltIn>{
        /**
         * Built-in price formats:
         * - `'price'` is the most common choice; it allows customization of precision and rounding of prices.
         * - `'volume'` uses abbreviation for formatting prices like `1.2K` or `12.67M`.
         * - `'percent'` uses `%` sign at the end of prices.
         */
        type: <"price" | "volume" | "percent">"price",
        /**
         * Number of digits after the decimal point.
         * If it is not set, then its value is calculated automatically based on minMove.
         *
         * @defaultValue `2` if both {@link minMove} and {@link precision} are not provided, calculated automatically based on {@link minMove} otherwise.
         */
        precision: <number>2,
        /**
         * The minimum possible step size for price value movement. This value shouldn't have more decimal digits than the precision.
         *
         * @defaultValue `0.01`
         */
        minMove: <number>0.01,
    },
    /**
     * Visibility of base line. Suitable for percentage and `IndexedTo100` scales.
     *
     * @defaultValue `true`
     */
    baseLineVisible: <boolean>true,
    /**
     * Color of the base line in `IndexedTo100` mode.
     *
     * @defaultValue `'#B2B5BE'`
     */
    baseLineColor: <string>'#B2B5BE',
    /**
     * Base line width. Suitable for percentage and `IndexedTo10` scales.
     *
     * @defaultValue `1`
     */
    baseLineWidth: <LineWidth>1,
    /**
     * Base line style. Suitable for percentage and indexedTo100 scales.
     *
     * @defaultValue {@link LineStyle.Solid}
     */
    baseLineStyle: <LineStyle>LineStyle.Solid,
    /**
     * Override the default {@link AutoscaleInfo} provider.
     * By default, the chart scales data automatically based on visible data range.
     * However, for some reasons one could require overriding this behavior.
     *
     * @defaultValue `undefined`
     * @example Use price range from 0 to 100 regardless the current visible range
     * ```js
     * const firstSeries = chart.addLineSeries({
     *     autoscaleInfoProvider: () => ({
     *         priceRange: {
     *             minValue: 0,
     *             maxValue: 100,
     *         },
     *     }),
     * });
     * ```
     * @example Adding a small pixel margins to the price range
     * ```js
     * const firstSeries = chart.addLineSeries({
     *     autoscaleInfoProvider: () => ({
     *         priceRange: {
     *             minValue: 0,
     *             maxValue: 100,
     *         },
     *         margins: {
     *             above: 10,
     *             below: 10,
     *         },
     *     }),
     * });
     * ```
     * @example Using the default implementation to adjust the result
     * ```js
     * const firstSeries = chart.addLineSeries({
     *     autoscaleInfoProvider: original => {
     *         const res = original();
     *         if (res !== null) {
     *             res.priceRange.minValue -= 10;
     *             res.priceRange.maxValue += 10;
     *         }
     *         return res;
     *     },
     * });
     * ```
     */
    autoscaleInfoProvider: <AutoscaleInfo>{
        /**
         * Price range.
         */
        priceRange: <PriceRange>{
            /**
             * Maximum value in the range.
             */
            minValue: 0,
            /**
             * Minimum value in the range.
             */
            maxValue: 100,
        },
        /**
         * Scale margins.
         */
        margins: <AutoScaleMargins>{
            /** The number of pixels for bottom margin */
            below: <number>0,
            /** The number of pixels for top margin */
            above: <number>0,
        },
    },
    /**
     * @deprecated Use {@link ISeriesApi.priceScale} method of the series to apply options instead.
     */
    scaleMargins: <PriceScaleMargins>{
        /**
         * Top margin in percentages. Must be greater or equal to 0 and less than 1.
         */
        top: <number>0.1,
        /**
         * Bottom margin in percentages. Must be greater or equal to 0 and less than 1.
         */
        bottom: <number>0.3,
    },
};

export const PartialLineCommonOptions: DeepPartial<LineStyleOptions & SeriesOptionsCommon> = {
    ...LineOptions,
    // ...OptionsCommon
};
