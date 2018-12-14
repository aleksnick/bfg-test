import IAction from "../Models/IAction";

export interface ISetScore extends IAction {
  type: "SET_SCORE";
  question_id: number;
  score: number;
}

export const SetScore = (question_id: number, score: number): ISetScore => ({
  type: "SET_SCORE",
  question_id: question_id,
  score: score
});
