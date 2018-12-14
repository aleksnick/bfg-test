import IAction from "../Models/IAction";
import IStore from "../Models/IStore";
import IQuestion from "../Models/IQuestion";

export interface IInit extends IAction, IStore {
  type: "INIT";
}

export const Init = (): IInit => ({
  type: "INIT",
  date: new Date("2018-12-01"),
  data: new Array<IQuestion>()
});
