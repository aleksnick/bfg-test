import axios from "axios";
import IQuestion, { Questions } from "../Models/IQuestion";
import { getQuestions } from "../Store/Questions";

const limit = 5;
const dateToUnix = (date: string) => new Date(date).getTime() / 1000;

/**
 * Хэлпер для загрузки вопросов
 *
 * @export
 * @class QuestionsLoaderHelper
 */
export default class QuestionsLoaderHelper {

  /**
   * Загрузить данные с stackexchange.com
   *
   * @static
   * @memberof QuestionsLoaderHelper
   */
  static loadFromWeb = (
    date: string,
    onLoad: (questions: Questions) => void
  ) => {
    const unixDate = dateToUnix(date);
    const url = `http://api.stackexchange.com/2.2/questions?pagesize=5&fromdate=${unixDate}&order=desc&sort=votes&tagged=react-redux&site=stackoverflow`;
    let res = {};
    axios.get(url).then(response => {
      const data = response.data["items"] as Array<IQuestion>;
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        res[item.question_id] = item;
      }
      onLoad(res);
    });
  };

  /**
   * Загрузить тестовые данные
   *
   * @static
   * @memberof QuestionsLoaderHelper
   */
  static loadFromTest = (
    date: string,
    onLoad: (questions: Questions) => void
  ) => {
    const unixDate = dateToUnix(date);
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
