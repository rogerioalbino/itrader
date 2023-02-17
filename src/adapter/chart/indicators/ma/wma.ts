
export class WMA {

  private _period: number;
  private _prices: Array<number> = [];
  private _initialValue: number = 0;

  public constructor(params: any) {
    this._period = Number(params.period);
  }

  public get prices() {
    return this._prices;
  }

  update(params: any): void | number {

    this._prices.push(Number(params.source))
    
    if (this._prices.length + 1 > this._period){
      this._initialValue = Number(Number(this._prices[0])) * Number(this._period);
      this._prices.shift();
    }

    if (this._prices.length + 1 === this._period) {
      const sum = this._prices.reduce((previousValue, currentValue) =>
      Number(Number(previousValue) + Number(Number(currentValue) * (this._period-1))), this._initialValue);

      return Number(sum / Number((Number(this._period) * (Number(this._period) + 1)) / 2))
    }
  }

}
