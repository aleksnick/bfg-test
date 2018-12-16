import React from "react";
import clickOutside from "react-click-outside";
import { Questions } from "../Models/IQuestion";
import Question from "./Question";

export interface QuestionsListProps {
  questions: Questions;
  onChangeScore?: (questionId: number, score: number) => void;
}

export interface QuestionsListState {
  openQuestionIndex: number;
}

/**
 * Компонент для отображения списка вопросов
 *
 * @export
 * @class QuestionsList
 * @extends {React.Component<QuestionsListProps, QuestionsListState>}
 */
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
    const questions = this.props.questions;
    let list = Array<React.ReactNode>();
    for (let key in questions) {
      const question = questions[key];
      const questionId = question.question_id;
      list.push(
        <Question
          key={questionId}
          isOpen={questionId == this.state.openQuestionIndex}
          question={question}
          onChangeScore={score =>
            this.onChangeScore(questionId, score)
          }
          onExpanded={expanded => this.onExpanded(questionId, expanded)}
        />
      )
    }
    return list;
  };

  onExpanded = (questionIndex: number, expanded: boolean) => {
    this.setState({
      openQuestionIndex: expanded ? questionIndex : -1
    });
  };

  onChangeScore = (questionId: number, score: number) => {
    const onChangeScore = this.props.onChangeScore;
    if (onChangeScore) {
      onChangeScore(questionId, score);
    }
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
