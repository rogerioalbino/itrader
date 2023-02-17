
export class TEMA {

  /**
   *   Triple Exponential Moving Average (TEMA)
   *
   *   Descrição
   *   A Média Móvel Exponencial Tripla (TEMA) de Patrick Mulloy oferece uma média móvel 
   *   com menos atraso do que a média móvel exponencial tradicional.
   *
   *   Fórmula 
   *   A Média Móvel Exponencial Tripla (TEMA) da série temporal 't' é:
   *   EMA1 = EMA(t,período)
   *   EMA2 = EMA(EMA1,período)
   *   EMA3 = EMA(EMA2,período))
   * 
   *   EMA = 3*EMA1 - 3*EMA2 + EMA3
   *
   */

  public constructor(params: any) {
  }

  update(params: any): void | number {
  }

}
