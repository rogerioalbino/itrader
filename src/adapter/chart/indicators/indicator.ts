import MaFactory from './ma/ma-factory';

export default class Indicator {

  public static execute(type: any, args: any): number | void {
    let value: any;
    switch (type) {
      case 'SMA':
        value = MaFactory.execute(type, args);
        break;
      case 'EMA':
        value = MaFactory.execute(type, args);
        break;
      case 'WMA':
        value = MaFactory.execute(type, args);
        break;
    }
    return value;
  }
}
