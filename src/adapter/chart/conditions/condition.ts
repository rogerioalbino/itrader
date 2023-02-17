import { IndicatorCrossIndicator } from './implementation';

import { TypeCondition } from "../common/types";

const InstanceMap = { IndicatorCrossIndicator };

export default class Condition {

  private static _conditions: Array<any> = [];

  private static factory<T extends TypeCondition>(type: T, args: any): any {
    return new InstanceMap[type](args);
  }

  private static isHasNoCondition(args: any, type:string): boolean {
    return !this._conditions.some(condition => condition.period === args.period && condition.type === type);
  }

  public static execute<T extends TypeCondition>(type: T, args: any): number {
    if (this._conditions.length === 0) {
      this._conditions.push({
        instance: this.factory(type, args),
        period: args.period,
        type: args.type
      });
    }
    if (this.isHasNoCondition(args, type)) {
      this._conditions.push({
        instance: this.factory(type, args),
        period: args.period,
        type: args.type
      });
      return this._conditions[this._conditions.length - 1].instance.update(args);
    }

    let value: number = 0;
    this._conditions.forEach((condition) => {
      if (condition.type === args.type && condition.period === args.period) {
        value = condition.instance.update(args);
        return;
      }
    });
    return value;
  }
}
