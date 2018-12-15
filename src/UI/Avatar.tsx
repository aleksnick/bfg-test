import React from "react";
import { withStyles } from "@material-ui/core/styles";
import UIAvatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const styles = {
  avatar: {
    margin: 10
  }
};

export interface AvatarProps {
  src?: string;
}

export class Avatar extends React.Component<AvatarProps> {
  /**
   *
   */
  constructor(props: AvatarProps) {
    super(props);
  }

  render() {
    return (
      <Grid container justify="center" alignItems="center">
        <UIAvatar className="avatar" src={this.props.src} />
      </Grid>
    );
  }
}

export default withStyles(styles)(Avatar);
