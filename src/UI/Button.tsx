import React from "react";
import UIButton from "@material-ui/core/Button";
import { Size } from "../Models/Size";

export interface SimpleButtonProps {
  color?: ButtonColor;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export enum ButtonColor {
  Default = "default",
  Primary = "primary",
  Secondary = "secondary"
}

export enum ButtonVariant {
  Flat = "flat",
  Outlined = "outlined",
  Contained = "contained"
}

export interface ButtonProps extends SimpleButtonProps {
  variant?: ButtonVariant;
  size?: Size;
}

/**
 * Кнопка
 *
 * @export
 * @class Button
 * @extends {React.Component<ButtonProps>}
 */
export default class Button extends React.Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    const { variant, color, size, href, disabled, children } = this.props;
    return (
      <UIButton
        variant={variant || ButtonVariant.Outlined}
        color={color || ButtonColor.Default}
        disabled={!!disabled}
        href={href}
        size={size || Size.Small}
        onClick={this.onClick}
      >
        {children}
      </UIButton>
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
