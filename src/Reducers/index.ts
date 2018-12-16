import { Map } from "immutable";
import { Actions } from "../Actions";
import IStore from "../Models/IStore";

/**
 * Reducer
 *
 * @export
 * @param {IStore} state
 * @param {Actions} action
 * @returns
 */
export default function reducer(state: IStore, action: Actions) {
  switch (action.type) {
    case "INIT":
      const newStore = Map();
      return {
        ...newStore,
        data: action.data,
        date: action.date,
        update: 0
      };
    case "SET_DATA":
      return {
        ...state,
        data: action.data
      };
    case "SET_DATE":
      return {
        ...state,
        date: action.date
      };
    case "SET_SCORE":
      state.data[action.questionId].score = action.score;
      return {
        ...state,
        update: new Date().getTime()
      };

    default:
      return state;
  }
}
