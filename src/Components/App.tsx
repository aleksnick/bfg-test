import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "./Button";
import Panel from "./Panel";

export interface AppProps {}

export default class App extends React.Component<AppProps> {
  /**
   *
   */
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    return (
      <Grid justify="center" container spacing={16}>
        <Grid item xs={4}>
          <Button />
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <Panel />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
