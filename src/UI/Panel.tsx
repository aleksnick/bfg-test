import React from "react";
import UIPanel from "@material-ui/core/ExpansionPanel";
import UIPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import UIPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

export interface PanelProps {
  header?: React.ReactNode;
  controls?: React.ReactNode;
  content?: React.ReactNode;
}

export default class Panel extends React.Component<PanelProps> {
  constructor(props: PanelProps) {
    super(props);
  }

  render() {
    const { header, controls, children } = this.props;

    return (
      <UIPanel color="primary">
        <UIPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{header}</Typography>
          {controls}
        </UIPanelSummary>
        <UIPanelDetails>{children}</UIPanelDetails>
      </UIPanel>
    );
  }
}
