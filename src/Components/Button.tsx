import React from "react";
import UIButton from "@material-ui/core/Button";

export interface ButtonProps {}

export class Button extends React.Component<ButtonProps> {
  /**
   *
   */
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return (
      <UIButton color="primary" variant="outlined">
        Add
      </UIButton>
    );
  }
}

export default Button;
