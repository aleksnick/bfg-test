import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export interface MenuProps {}

export class Menu extends React.Component<MenuProps> {
  /**
   *
   */
  constructor(props: MenuProps) {
    super(props);
  }

  render() {
    return (
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button component="a" href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    );
  }
}

export default Menu;
