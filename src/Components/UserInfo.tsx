import React from "react";
import IUser from "../Models/IUser";
import Avatar from "../UI/Avatar";
import Link from "../UI/Link";
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
        <Grid item xs={4}>
          <Avatar src={user.profile_image} />
        </Grid>
        <Grid item xs={8}>
          <Grid container>{user.display_name}</Grid>
          <Grid container>
            <Link href={user.link}>Profile</Link>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
