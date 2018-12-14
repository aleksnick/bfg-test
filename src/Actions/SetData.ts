import IAction from "../Models/IAction";
import IQuestion from "../Models/IQuestion";

export interface ISetData extends IAction {
  type: "SET_DATA";
  questions: Array<IQuestion>;
}

export const SetData = (questions: Array<IQuestion>): ISetData => ({
  type: "SET_DATA",
  questions: questions
});
