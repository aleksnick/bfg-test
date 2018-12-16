import React from "react";
import clickOutside from "react-click-outside";
import IQuestion from "../Models/IQuestion";
import Question from "./Question";
export interface QuestionsListProps {
  questions: Array<IQuestion>;
}

export interface QuestionsListState {
  openQuestionIndex: number;
}

export class QuestionsList extends React.Component<
  QuestionsListProps,
  QuestionsListState
> {
  constructor(props: QuestionsListProps) {
    super(props);
    this.state = {
      openQuestionIndex: -1
    };
  }

  render() {
    return <div>{this.renderList()}</div>;
  }

  renderList = (): React.ReactNode[] => {
    return this.props.questions.map((question, questionIndex) => {
      return (
        <Question
          key={question.id}
          isOpen={questionIndex == this.state.openQuestionIndex}
          question={question}
          onExpanded={expanded => this.onExpanded(questionIndex, expanded)}
        />
      );
    });
  };

  onExpanded = (questionIndex: number, expanded: boolean) => {
    this.setState({
      openQuestionIndex: expanded ? questionIndex : -1
    });
  };

  handleClickOutside = () => {
    if (this.state.openQuestionIndex !== -1) {
      this.setState({
        openQuestionIndex: -1
      });
    }
  };
}

export default clickOutside(QuestionsList);
