import axios from "axios";

export default class Questions {
  static load() {
    const url =
      "http://api.stackexchange.com//2.2/questions?pagesize=5&fromdate=1543622400&order=desc&sort=votes&tagged=react-redux&site=stackoverflow";
    window.console.log(axios.get(url));
  }
}
