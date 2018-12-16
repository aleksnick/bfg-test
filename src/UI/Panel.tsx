import React from "react";
import IWithStyles from "../Models/IWithStyles";
import { withStyles } from "@material-ui/core/styles";
import UIPanel from "@material-ui/core/ExpansionPanel";
import UIPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import UIPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export enum PanelType {
  Default = "default",
  Success = "success"
}

const styles = {
  success: {
    background: "#4caf50"
  },
  default: {
    background: "#eeeeee"
  }
};

/**
 * Панель
 *
 * @export
 * @interface PanelProps
 * @extends {IWithStyles}
 */
export interface PanelProps extends IWithStyles {
  isOpen?: boolean;
  type?: PanelType;
  header?: React.ReactNode;
  controls?: React.ReactNode;
  onExpanded?: (expanded: boolean) => void;
}

export class Panel extends React.Component<PanelProps> {
  constructor(props: PanelProps) {
    super(props);
  }

  render() {
    const { type, classes, isOpen, header, controls, children } = this.props;

    return (
      <UIPanel expanded={!!isOpen} onChange={this.onChange} color="primary">
        <UIPanelSummary className={type === PanelType.Success ? classes["success"] : classes["default"]} expandIcon={<ExpandMoreIcon />}>
          <Grid container xs={12}>
            <Grid item xs>
              <Typography>{header}</Typography>
            </Grid>
            <Grid item>{controls}</Grid>
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

export default withStyles(styles)(Panel);
