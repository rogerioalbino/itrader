
export class IndicatorCrossIndicator {

  private _prices: Array<{ value: number, indicator: string }> = [];
  private _period: number;
  
  public constructor(params: any) {
    this._period = params.period;
  }

  private update(): boolean {
    return true;
  }

  private over(value: number, indicator: string): boolean {
    if(this._prices[this._prices.length-1]['indicator'] !== indicator){
      this._prices.push({ value, indicator });
    }

    if (this._prices.length > this._period) {
      this._prices.shift();
    }

    if (this._prices.length === this._period) {
      const a = this._prices[0] > this._prices[1]
      const b = this._prices[2] === this._prices[3]
      const c = this._prices[4] < this._prices[5]
      return (a && b && c);
    }
    return false;
  }

  private under(): boolean {
    return true;
  }

}
