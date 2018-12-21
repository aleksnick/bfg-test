import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import QuestionsList from "./QuestionsList";
import QuestionsLoaderHelper from "../Helpers/QuestionsLoader";
import DateControl from "./DateControl";
import IStore from "../Models/IStore";
import { SetData, SetDate, SetScore } from "../Actions";

export interface AppProps {}

export type AppInputs = AppProps & IStore;

const mapStateToProps = (state: IStore, props: AppProps) => ({
  date: state.date,
  data: state.data
});

const mapDispatchToProps = {
  setData: SetData,
  setDate: SetDate,
  setScore: SetScore
};

export type AppContext = AppInputs & typeof mapDispatchToProps;

/**
 * Основной компонент приложения
 *
 * @export
 * @class App
 * @extends {React.Component<AppContext>}
 */
export class App extends React.Component<AppContext> {
  constructor(props: AppContext) {
    super(props);
  }

  componentWillMount() {
    this.loadData(this.props.date);
  }

  render() {
    const { data, date } = this.props;
    return (
      <React.Fragment>
        <Grid justify="center" container spacing={16}>
          <Grid item xs={12} md={8} lg={6}>
            <Typography variant="h6">
              5 самых популярных вопросов на Stackoverflow, содержащих строку
              "react-redux"
            </Typography>
          </Grid>
        </Grid>
        <Grid justify="center" container spacing={16}>
          <Grid item xs={12} md={8} lg={6}>
            <Grid justify="flex-start" container>
              <DateControl date={date} onSetDate={this.loadData} />
            </Grid>
            <Grid justify="flex-start" container>
              <Grid item xs={12}>
                <QuestionsList
                  questions={data}
                  onChangeScore={this.onChangeScore}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  onChangeScore = (questionId: number, score: number) => {
    this.props.setScore(questionId, score);
  };

  loadData = (date: string) => {
    const { setData, setDate } = this.props;
    QuestionsLoaderHelper.loadFromWeb(date, data => {
      setDate(date);
      setData(data);
    });
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
