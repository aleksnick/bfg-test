import React from "react";
import IQuestion from "../Models/IQuestion";
import UserInfo from "./UserInfo";
import Panel from "../UI/Panel";

export interface QuestionProps {
  question: IQuestion;
}

export default class Question extends React.Component<QuestionProps> {
  /**
   *
   */
  constructor(props: QuestionProps) {
    super(props);
  }

  render() {
    const question = this.props.question;
    return (
      <Panel header={question.title}>
        <UserInfo user={question.owner} />
      </Panel>
    );
  }
}
