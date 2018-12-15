import React from "react";
import UIButton from "@material-ui/core/Button";

export interface ButtonProps {
  onClick?: () => void;
}

export class Button extends React.Component<ButtonProps> {
  /**
   *
   */
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    const { onClick, children } = this.props;
    return (
      <UIButton onClick={onClick} color="primary" variant="outlined">
        {children}
      </UIButton>
    );
  }
}

export default Button;
