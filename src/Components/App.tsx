import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import QuestionsList from "./QuestionsList";
import QuestionsLoader from "./QuestionsLoader";
import DateControl from "./DateControl";
import IStore from "../Models/IStore";
import { SetData } from "../Actions/SetData";

export interface AppProps {}

export type AppInputs = AppProps & IStore;

const mapStateToProps = (state: IStore, panelProps: AppProps) => ({
  date: state.date,
  data: state.data
});

const mapDispatchToProps = {
  setData: SetData
};

export type AppContext = AppInputs & typeof mapDispatchToProps;

export class App extends React.Component<AppContext> {
  /**
   *
   */
  constructor(props: AppContext) {
    super(props);
  }

  render() {
    const { data, date, setData } = this.props;
    return (
      <Grid justify="center" container spacing={16}>
        <Grid item xs={4}>
          <Grid justify="flex-start" container>
            <DateControl date={date} />
          </Grid>
          <QuestionsLoader date={date} onLoad={setData} />
          <Paper>
            <QuestionsList questions={data} />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
