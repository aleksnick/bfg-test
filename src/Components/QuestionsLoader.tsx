import React from "react";
import axios from "axios";
import IQuestion from "../Models/IQuestion";
import IDate from "../Models/IDate";

export interface QuestionLoaderProps extends IDate {
  onLoad?: (questions: Array<IQuestion>) => void;
}

export default class QuestionLoader extends React.Component<
  QuestionLoaderProps
> {
  /**
   *
   */
  constructor(props: QuestionLoaderProps) {
    super(props);
  }

  render() {
    this.load();
    return <React.Fragment />;
  }

  load = () => {
    const { date, onLoad } = this.props;
    if (!onLoad) {
      return;
    }
    const unixDate = new Date(date).getTime() / 1000;
    const url = `http://api.stackexchange.com//2.2/questions?pagesize=5&fromdate=${unixDate}&order=desc&sort=votes&tagged=react-redux&site=stackoverflow`;
    window.console.log("url", url);
    axios.get(url).then(res => {
      const data = res.data["items"] as Array<IQuestion>;
      window.console.log("data", data);
      if (onLoad) {
        onLoad(data);
      }
    });
  };
}
