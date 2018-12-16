import React from "react";
import IWithStyles from "../Models/IWithStyles";
import { withStyles } from "@material-ui/core/styles";
import UIAvatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const styles = {
  avatar: {
    margin: 10
  }
};

export interface AvatarProps extends IWithStyles {
  src?: string;
}

/**
 * Изображение пользователя
 *
 * @export
 * @class Avatar
 * @extends {React.Component<AvatarProps>}
 */
export class Avatar extends React.Component<AvatarProps> {
  constructor(props: AvatarProps) {
    super(props);
  }

  render() {
    const { classes, src } = this.props;
    return (
      <Grid container justify="center" alignItems="center">
        <UIAvatar className={classes["avatar"]} src={src} />
      </Grid>
    );
  }
}

export default withStyles(styles)(Avatar);
