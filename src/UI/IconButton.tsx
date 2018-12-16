import React from "react";
import { withStyles } from "@material-ui/core/styles";
import IWithStyles from "../Models/IWithStyles";
import { SimpleButtonProps, ButtonColor } from "../UI/Button";
import UIIconButton from "@material-ui/core/IconButton";

export interface IconButtonProps extends SimpleButtonProps, IWithStyles {}

const styles = {
  icon: {
    margin: 0,
    marginLeft: 2,
    marginRight: 2,
    padding: 0,
    paddingLeft: 5,
    paddingRight: 5,
  }
};

export class IconButton extends React.Component<IconButtonProps> {
  constructor(props: IconButtonProps) {
    super(props);
  }

  render() {
    const { classes, color, href, disabled, children } = this.props;
    return (
      <UIIconButton
        className={classes["icon"]}
        color={color || ButtonColor.Default}
        disabled={!!disabled}
        href={href}
        onClick={this.onClick}
      >
        {children}
      </UIIconButton>
    );
  }

  onClick = (e: React.ChangeEvent<{}>) => {
    const onClick = this.props.onClick;
    if (onClick) {
      e.preventDefault();
      e.stopPropagation();
      onClick();
    }
  };
}

export default withStyles(styles)(IconButton);
