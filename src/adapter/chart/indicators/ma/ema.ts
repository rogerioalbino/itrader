import { SMA } from "./sma";

export class EMA {

  /**
   *   Exponential Moving Average (EMA)
   *
   *   Descrição
   *   A Média Móvel Exponencial (MME) representa uma média de preços, dando peso aos preços recentes.
   *   A ponderação aplicada ao preço mais recente depende do período selecionado da média móvel.
   *   Quanto menor o período da EMA, mais peso será aplicado ao preço mais recente.
   *
   *   Fórmula
   *   EMA = ( P - EMAp ) * K + EMAp
   * 
   *   P = Preço para o período atual
   *   EMAp = a média móvel exponencial para o período anterior
   *   K = a constante de suavização, igual a 2 / (n + 1)
   *   n = o número de períodos em uma média móvel simples aproximada aproximadamente pela EMA
   *   
   *   observação
   *   O cálculo da EMA requer uma observação a mais do que a SMA. 
   *   Suponha que você use 20 periodos para a EMA. 
   *   Então, você deve esperar até o 20º dia para obter o SMA. 
   *   No dia 21, você pode usar a SMA do dia anterior como a primeira EMA.
   */

  private sma: SMA;
  private ema: void | number = 0;

  private readonly smoothing: number;

  public constructor(params: any) {
    this.sma = new SMA(params);
    this.smoothing = Number(2 / (Number(params.period) + 1));
  }

  update(params: any): void | number {
    if (this.sma.prices.length < params.period  && !this.ema) {
      this.ema = this.sma.update(params);
      return;
    }
    if (this.ema) {
      this.ema = Number((Number(params.source) - Number(this.ema)) * Number(this.smoothing) + Number(this.ema));
      return this.ema;
    }
  }

}
