import IndicatorCrossIndicator from './implementation/indicator-cross-indicator';

export default class Condition {

  private static _conditions: Array<any> = [];

  static IndicatorCrossIndicator(conditionValue: number, crosses: string, type:number): void | boolean {
    if (crosses === 'over') {
      if (this._conditions.length === 0) {
        this._conditions.push({ instance: new IndicatorCrossIndicator(), crosses });
      }

      const exist = this._conditions.some(condition => condition.crosses === crosses);
      if (!exist) {
        this._conditions.push({ instance: new IndicatorCrossIndicator(), crosses });
        return this._conditions[this._conditions.length - 1].instance.under(conditionValue);
      }

      let valor: boolean = false;
      this._conditions.forEach((condition) => {
        if (condition.crosses === crosses) {
          valor = condition.instance.over(conditionValue, type);
          return;
        }
      });
      return valor;
    }
  }

}