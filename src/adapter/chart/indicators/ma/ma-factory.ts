import { SMA, EMA, WMA } from '.';

import { TypeIndicator } from "../../common/types";

const InstanceMap = { SMA, EMA, WMA };

export default class MaFactory {

  private static _indicators: Array<any> = [];

  private static factory<T extends TypeIndicator>(type: T, args: any): any {
    return new InstanceMap[type](args);
  }

  private static isHasNoIndicator(args: any, type:string): boolean {
    return !this._indicators.some(indicator => indicator.period === args.period && indicator.type === type);
  }

  public static execute<T extends TypeIndicator>(type: T, args: any): number {
    if (this._indicators.length === 0) {
      this._indicators.push({
        instance: this.factory(type, args),
        period: args.period,
        type: args.type
      });
    }
    if (this.isHasNoIndicator(args, type)) {
      this._indicators.push({
        instance: this.factory(type, args),
        period: args.period,
        type: args.type
      });
      return this._indicators[this._indicators.length - 1].instance.update(args);
    }

    let value: number = 0;
    this._indicators.forEach((indicator) => {
      if (indicator.type === args.type && indicator.period === args.period) {
        value = indicator.instance.update(args);
        return;
      }
    });
    return value;
  }
}
