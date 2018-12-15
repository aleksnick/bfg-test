import IAction from "../Models/IAction";
import IQuestion from "../Models/IQuestion";
import IData from "../Models/IData";

export interface ISetData extends IAction, IData {
  type: "SET_DATA";
}

export const SetData = (questions: Array<IQuestion>): ISetData => ({
  type: "SET_DATA",
  data: questions
});
