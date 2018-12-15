import React from "react";
import IQuestion from "../Models/IQuestion";
import Question from "./Question";

export interface QuestionsListProps {
  questions: Array<IQuestion>;
}

export default class QuestionsList extends React.Component<QuestionsListProps> {
  /**
   *
   */
  constructor(props: QuestionsListProps) {
    super(props);
  }

  render() {
    return <React.Fragment>{this.renderList()}</React.Fragment>;
  }

  renderList = (): React.ReactNode[] => {
    return this.props.questions.map(question => {
      return <Question key={question.id} question={question} />;
    });
  };
}
