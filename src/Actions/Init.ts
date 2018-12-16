import IAction from "../Models/IAction";
import IStore from "../Models/IStore";

/**
 * Инициализация приложения
 *
 * @export
 * @interface IInit
 * @extends {IAction}
 * @extends {IStore}
 */
export interface IInit extends IAction, IStore {
  type: "INIT";
}

export const Init = (): IInit => ({
  type: "INIT",
  date: "2018-12-01",
  data: {}
});
