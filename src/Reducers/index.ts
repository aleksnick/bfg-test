import { Map } from "immutable";
import { Actions } from "../Actions";

export default function init(state = Map(), action: Actions) {
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
        data: action.questions
      };
    case "SET_DATE":
      return {
        ...state,
        date: action.date
      };
    default:
      return state;
  }
}
