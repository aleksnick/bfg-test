import IAction from "../Models/IAction";
import { Questions } from "../Models/IQuestion";
import IData from "../Models/IData";

/**
 * Обновление списка вопросов
 *
 * @export
 * @interface ISetData
 * @extends {IAction}
 * @extends {IData}
 */
export interface ISetData extends IAction, IData {
  type: "SET_DATA";
}

export const SetData = (questions: Questions): ISetData => ({
  type: "SET_DATA",
  data: questions
});
