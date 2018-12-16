import { Map } from "immutable";
import { Actions } from "../Actions";
import IStore from "../Models/IStore";
import QuestionsScoreHelper from "../Helpers/QuestionsScore";

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
      const newState = QuestionsScoreHelper.setScore(
        state,
        action.questionId,
        action.score
      );
      return {
        ...newState,
        update: new Date().getTime()
      };

    default:
      return state;
  }
}
