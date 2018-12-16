import { Questions } from "../Models/IQuestion";
import { getQuestions } from "../Store/Questions";

/**
 * Хэлпер для загрузки вопросов
 *
 * @export
 * @class QuestionsLoaderHelper
 */
export default class QuestionsLoaderHelper {
  static load = (
    date: string,
    onLoad: (questions: Questions) => void
  ) => {
    const limit = 10;
    const unixDate = new Date(date).getTime() / 1000;
    const data = getQuestions();
    let res = {};
    let resSize = 0;
    for (let i = 0; i < data.items.length; i++) {
      const item = data.items[i];
      if (item.creation_date > unixDate) {
        res[item.question_id] = item;
        resSize++;
        if (resSize >= limit) {
          break;
        }
      }
    }

    onLoad(res);
  };
}
