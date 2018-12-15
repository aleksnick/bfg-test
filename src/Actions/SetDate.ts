import IAction from "../Models/IAction";
import IDate from "../Models/IDate";

export interface ISetDate extends IAction, IDate {
  type: "SET_DATE";
}

export const SetDate = (date: string): ISetDate => ({
  type: "SET_DATE",
  date: date
});
