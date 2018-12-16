import IUser from "./IUser";

export default interface IQuestion {
  question_id: number;
  order: number;
  title: string;
  score: number;
  creation_date: number;
  is_answered: boolean;
  owner: IUser;
}
