import React from "react";
import UIChip from "@material-ui/core/Chip";

export interface ChipProps {}

/**
 * Badge
 *
 * @export
 * @class Chip
 * @extends {React.Component<ChipProps>}
 */
export default class Chip extends React.Component<ChipProps> {
  constructor(props: ChipProps) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return <UIChip label={children} />;
  }
}
