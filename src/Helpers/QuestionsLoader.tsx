import IQuestion from "../Models/IQuestion";
import { getQuestions } from "../Store/Questions";

export default class QuestionsLoaderHelper {
  static load = (
    date: string,
    onLoad: (questions: Array<IQuestion>) => void
  ) => {
    const limit = 10;
    const unixDate = new Date(date).getTime() / 1000;
    const data = getQuestions();
    let res = Array<IQuestion>();
    for (let i = 0; i < data.items.length; i++) {
      const item = data.items[i];
      if (item.creation_date > unixDate) {
        res.push(item);
        if (res.length >= limit) {
          break;
        }
      }
    }

    onLoad(res);
  };
}
