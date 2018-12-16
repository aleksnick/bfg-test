import IStore from '../Models/IStore';
import IQuestion from '../Models/IQuestion';

export default class QuestionsScoreHelper {
  static setScore(store: IStore, questionId: number, score: number): IStore {
    const data = store.data as Array<IQuestion>;
    for (let i =0 ; i<data.length; i++) {
      if (store.data[i].question_id === questionId) {
        store.data[i].score = score;
      }
    }
    return store;
  }
}
