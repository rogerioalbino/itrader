/**
* Interface IDataSeries
*
*/

export interface IDataSeries {
  time: {
    year: string,
    month: string,
    day: string
  },
  open: string,
  high: string,
  low: string,
  close: string
};

/**
* Type DataSeries
*
*/
export declare type DataSeries = IDataSeries;
