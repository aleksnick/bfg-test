import IUser from "./IUser";

/**
 * Модель данных вопроса
 *
 * @export
 * @interface IQuestion
 */
export default interface IQuestion {
  question_id: number;
  order: number;
  title: string;
  score: number;
  view_count: number;
  answer_count: number;
  creation_date: number;
  is_answered: boolean;
  owner: IUser;
}

export type Questions = { [key: string]: IQuestion };
