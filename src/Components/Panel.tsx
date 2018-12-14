import React from "react";
import { connect } from "react-redux";

import UIPanel from "@material-ui/core/ExpansionPanel";
import UIPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import UIPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

import IDate from "../Models/IDate";
export interface PanelProps {}

export type PanelContext = PanelProps & IDate;

const mapStateToProps = (
  state: IDate,
  panelProps: PanelProps
): PanelContext => ({
  date: state.date
});

export class PanelComponent extends React.Component<PanelContext> {
  /**
   *
   */
  constructor(props: PanelContext) {
    super(props);
  }

  render() {
    return (
      <UIPanel color="primary">
        <UIPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{this.props.date.getDate() || "0"}</Typography>
        </UIPanelSummary>
        <UIPanelDetails>Hello</UIPanelDetails>
      </UIPanel>
    );
  }
}

export default connect(
  mapStateToProps,
  {}
)(PanelComponent);
