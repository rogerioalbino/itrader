export class SMA {

  /**
   *   Simple Moving Average (SMA)
   *
   *   Descrição
   *   A média móvel simples(MMS) é calculada adicionando o preço de um instrumento em vários períodos de tempo e dividindo 
   *   a soma pelo número de períodos de tempo. O SMA é basicamente o preço médio de um determinado período de tempo, 
   *   com igual peso dado ao preço de cada período.
   *
   *   Fórmula
   *   SMA = (Soma(Preço, n)) / n
   * 
   *   Onde: n = Período de tempo
   * 
   */

  private _period: number;
  private _prices: Array<number> = [];

  public constructor(params: any) {
    this._period = params.period;
  }

  public get prices(){
    return this._prices;
  }

  public update(params: any): void | number {
    this._prices.push(Number(params.source));

    if (this._prices.length > this._period) {
      this._prices.shift();
    }

    if (this._prices.length === this._period) {
      const sum = this._prices.reduce((previousValue: number, currentValue: number) =>
        Number(previousValue) + Number(currentValue), 0);

      return sum / this._period;
    }
  }

}
