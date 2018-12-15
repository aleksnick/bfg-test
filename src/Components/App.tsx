import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import QuestionsList from "./QuestionsList";
import QuestionsLoader from "./QuestionsLoader";
import IStore from "../Models/IStore";
import { SetData } from "../Actions/SetData";

export interface AppProps {}

export type AppContext = AppProps & IStore;

const mapStateToProps = (state: IStore, panelProps: AppProps) => ({
  date: state.date,
  data: state.data
});

const mapDispatchToProps = {
  setData: SetData
};

export type AppState = AppContext & typeof mapDispatchToProps;

export class App extends React.Component<AppState> {
  /**
   *
   */
  constructor(props: AppState) {
    super(props);
  }

  render() {
    const { data, date, setData } = this.props;
    return (
      <Grid justify="center" container spacing={16}>
        <Grid item xs={4}>
          <QuestionsLoader fromDate={date} onLoad={setData} />
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
