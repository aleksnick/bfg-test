import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import QuestionsList from "./QuestionsList";
import QuestionsLoaderHelper from "../Helpers/QuestionsLoader";
import DateControl from "./DateControl";
import IStore from "../Models/IStore";
import { SetData } from "../Actions/SetData";
import { SetDate } from "../Actions/SetDate";

export interface AppProps {}

export type AppInputs = AppProps & IStore;

const mapStateToProps = (state: IStore, props: AppProps) => ({
  date: state.date,
  data: state.data
});

const mapDispatchToProps = {
  setData: SetData,
  setDate: SetDate
};

export type AppContext = AppInputs & typeof mapDispatchToProps;

export class App extends React.Component<AppContext> {
  /**
   *
   */
  constructor(props: AppContext) {
    super(props);
  }

  componentWillMount() {
    this.loadData(this.props.date);
  }

  render() {
    const { data, date } = this.props;
    return (
      <Grid justify="center" container spacing={16}>
        <Grid item xs={4}>
          <Grid justify="flex-start" container>
            <DateControl date={date} onSetDate={this.loadData} />
          </Grid>
          <Grid justify="flex-start" container>
            <Grid item xs={12}>
              <QuestionsList questions={data} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  loadData = (date: string) => {
    const { setData, setDate } = this.props;
    QuestionsLoaderHelper.load(date, data => {
      setDate(date);
      setData(data);
    });
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
