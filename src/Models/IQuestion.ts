import IUser from "./IUser";

export default interface IQuestion {
  id: string;
  order: number;
  title: string;
  score: number;
  creation_date: number;
  is_answered: boolean;
  owner: IUser;
}
