import IData from "./IData";
import IDate from "./IDate";

export default interface IStore extends IData, IDate {
  update?: number;
}

export type ReduxStore = {[key: string]: {}};
