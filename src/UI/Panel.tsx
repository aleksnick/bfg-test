import React from "react";
import UIPanel from "@material-ui/core/ExpansionPanel";
import UIPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import UIPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export interface PanelProps {
  isOpen?: boolean;
  header?: React.ReactNode;
  controls?: React.ReactNode;
  onExpanded?: (expanded: boolean) => void;
}

export default class Panel extends React.Component<PanelProps> {
  constructor(props: PanelProps) {
    super(props);
  }

  render() {
    const { isOpen, header, controls, children } = this.props;

    return (
      <UIPanel expanded={!!isOpen} onChange={this.onChange} color="primary">
        <UIPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Grid container xs={12}>
            <Grid item xs>
              <Typography>{header}</Typography>
            </Grid>
            <Grid item>
              {controls}
            </Grid>
          </Grid>
        </UIPanelSummary>
        <UIPanelDetails>{children}</UIPanelDetails>
      </UIPanel>
    );
  }

  onChange = (e: React.ChangeEvent<{}>, expanded: boolean) => {
    const onExpanded = this.props.onExpanded;
    if (onExpanded) {
      onExpanded(expanded);
    }
  };
}
