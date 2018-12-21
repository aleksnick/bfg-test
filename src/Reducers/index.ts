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
      return {
        ...state,
        data: action.data,
        date: action.date
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
      return {
        ...state,
        data: {
          ...state.data,
          [action.questionId]: {
            ...state.data[action.questionId],
            score: action.score
          }
        }
      };

    default:
      return state;
  }
}
