import React from "react";
import Grid from "@material-ui/core/Grid";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import IQuestion from "../Models/IQuestion";
import { Size } from "../Models/Size";
import UserInfo from "./UserInfo";
import Panel from "../UI/Panel";
import Chip from "../UI/Chip";
import { ButtonColor } from "../UI/Button";
import IconButton from "../UI/IconButton";

export interface QuestionProps {
  isOpen: boolean;
  question: IQuestion;
  onChangeScore?: (score: number) => void;
  onExpanded?: (expanded: boolean) => void;
}

export default class Question extends React.Component<QuestionProps> {
  constructor(props: QuestionProps) {
    super(props);
  }

  render() {
    const { isOpen, question } = this.props;
    const controls = (
      <Grid container>
        <Chip>{question.score}</Chip>
        <IconButton onClick={this.scoreUp} color={ButtonColor.Primary}>
          <ArrowUpward fontSize="small" />
        </IconButton>
        <IconButton onClick={this.scoreDown} color={ButtonColor.Secondary}>
          <ArrowDownward fontSize={Size.Small} />
        </IconButton>
      </Grid>
    );

    return (
      <Panel
        isOpen={isOpen}
        onExpanded={this.onExpanded}
        header={question.title}
        controls={controls}
      >
        <UserInfo user={question.owner} />
      </Panel>
    );
  }

  scoreUp = () => {
    const {question, onChangeScore} = this.props;
    if (onChangeScore) {
      onChangeScore(question.score + 1);
    }
  };

  scoreDown = () => {
    const {question, onChangeScore} = this.props;
    if (question.score > 0 && onChangeScore) {
      onChangeScore(question.score - 1);
    }
  };

  onExpanded = (expanded: boolean) => {
    const onExpanded = this.props.onExpanded;
    if (onExpanded) {
      onExpanded(expanded);
    }
  };
}
