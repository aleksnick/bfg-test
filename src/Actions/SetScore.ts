import IAction from "../Models/IAction";

/**
 * Изменение рейтинга вопроса
 *
 * @export
 * @interface ISetScore
 * @extends {IAction}
 */
export interface ISetScore extends IAction {
  type: "SET_SCORE";
  questionId: number;
  score: number;
}

export const SetScore = (questionId: number, score: number): ISetScore => ({
  type: "SET_SCORE",
  questionId: questionId,
  score: score
});
