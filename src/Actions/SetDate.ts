import IAction from "../Models/IAction";

export interface ISetDate extends IAction {
  type: "SET_DATE";
  date: Date;
}

export const SetDate = (date: Date): ISetDate => ({
  type: "SET_DATE",
  date: date
});
