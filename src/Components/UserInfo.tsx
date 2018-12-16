import React from "react";
import IUser from "../Models/IUser";
import Avatar from "../UI/Avatar";
import Button, { ButtonVariant, ButtonColor } from "../UI/Button";
import Grid from "@material-ui/core/Grid";

export interface UserInfoProps {
  user: IUser;
}

export default class UserInfo extends React.Component<UserInfoProps> {
  /**
   *
   */
  constructor(props: UserInfoProps) {
    super(props);
  }

  render() {
    const user = this.props.user;
    return (
      <Grid container spacing={16}>
        <Grid item>
          <Avatar src={user.profile_image} />
        </Grid>
        <Grid item xs>
          <Grid container>{user.display_name}</Grid>
          <Grid container>
            <Button
              variant={ButtonVariant.Outlined}
              color={ButtonColor.Secondary}
              href={user.link}
            >
              Открыть профиль
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
