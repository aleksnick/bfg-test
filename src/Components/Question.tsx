import React from "react";
import Grid from "@material-ui/core/Grid";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import IQuestion from "../Models/IQuestion";
import { Size } from "../Models/Size";
import UserInfo from "./UserInfo";
import Panel, { PanelType } from "../UI/Panel";
import Chip from "../UI/Chip";
import { ButtonColor } from "../UI/Button";
import IconButton from "../UI/IconButton";
import QuestionDetails from "./QuestionDetails";

export interface QuestionProps {
  isOpen: boolean;
  question: IQuestion;
  onChangeScore?: (score: number) => void;
  onExpanded?: (expanded: boolean) => void;
}

/**
 * Компонент для отображения вопроса
 *
 * @export
 * @class Question
 * @extends {React.Component<QuestionProps>}
 */
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
        type={question.is_answered ? PanelType.Success : PanelType.Default}
        onExpanded={this.onExpanded}
        header={question.title}
        controls={controls}
      >
        <Grid container spacing={16}>
          <Grid item>
            <UserInfo user={question.owner} />
          </Grid>
          <Grid item xs>
            <QuestionDetails question={question} />
          </Grid>
        </Grid>
      </Panel>
    );
  }

  scoreUp = () => {
    const { question, onChangeScore } = this.props;
    if (onChangeScore) {
      onChangeScore(question.score + 1);
    }
  };

  scoreDown = () => {
    const { question, onChangeScore } = this.props;
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
