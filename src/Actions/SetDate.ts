import IAction from "../Models/IAction";
import IDate from "../Models/IDate";

/**
 * Изменение даты начала
 *
 * @export
 * @interface ISetDate
 * @extends {IAction}
 * @extends {IDate}
 */
export interface ISetDate extends IAction, IDate {
  type: "SET_DATE";
}

export const SetDate = (date: string): ISetDate => ({
  type: "SET_DATE",
  date: date
});
