import React from "react";
import IQuestion from "../Models/IQuestion";
import UserInfo from "./UserInfo";
import Panel from "../UI/Panel";

export interface QuestionProps {
  isOpen: boolean;
  question: IQuestion;
  onExpanded?: (expanded: boolean) => void;
}

export default class Question extends React.Component<QuestionProps> {
  /**
   *
   */
  constructor(props: QuestionProps) {
    super(props);
  }

  render() {
    const { isOpen, question } = this.props;
    return (
      <Panel isOpen={isOpen} onExpanded={this.onExpanded} header={question.title}>
        <UserInfo user={question.owner} />
      </Panel>
    );
  }

  onExpanded = (expanded: boolean) => {
    const onExpanded = this.props.onExpanded;
    if (onExpanded) {
      onExpanded(expanded);
    }
  }
}
