import IUser from "./IUser";

export default interface IQuestion {
  id: string;
  order: number;
  title: string;
  score: number;
  is_answered: boolean;
  owner: IUser;
}
