import IData from "./IData";
import IDate from "./IDate";

/**
 * Store
 *
 * @export
 * @interface IStore
 * @extends {IData}
 * @extends {IDate}
 */
export default interface IStore extends IData, IDate {
}

export type ReduxStore = {[key: string]: {}};
