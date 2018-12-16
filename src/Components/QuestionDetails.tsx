import React from "react";
import Grid from "@material-ui/core/Grid";
import IQuestion from "../Models/IQuestion";
import Typography from "@material-ui/core/Typography";

export interface QuestionDetailsProps {
  question: IQuestion;
}

/**
 * Дополнительные данные о вопросе
 *
 * @export
 * @class QuestionDetails
 * @extends {React.Component<QuestionDetailsProps>}
 */
export default class QuestionDetails extends React.Component<
  QuestionDetailsProps
> {
  constructor(props: QuestionDetailsProps) {
    super(props);
  }

  render() {
    const question = this.props.question;
    return (
      <React.Fragment>
        <Grid item xs>
          <Typography>Просмотров: {question.view_count}</Typography>
        </Grid>
        <Grid item xs>
          <Typography>Ответов: {question.answer_count}</Typography>
        </Grid>
      </React.Fragment>
    );
  }
}
