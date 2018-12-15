import React from "react";
import UIButton from "@material-ui/core/Button";

export interface LinkProps {
  href?: string;
}

export class Link extends React.Component<LinkProps> {
  constructor(props: LinkProps) {
    super(props);
  }

  render() {
    const { href, children } = this.props;
    return (
      <UIButton href={href} color="primary">
        {children}
      </UIButton>
    );
  }
}

export default Link;
