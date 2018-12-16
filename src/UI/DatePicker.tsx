import React from "react";
import IWithStyles from "../Models/IWithStyles";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = {
  container: {
    display: "flex",
    margin: 10
  },
  textField: {
    marginLeft: 10,
    marginRight: 10,
    width: 200
  }
};

export interface DatePickerProps extends IWithStyles {
  label: string;
  date: string;
  onChange?: (date: string) => void;
}

/**
 * Компонент выбора даты
 *
 * @export
 * @class DatePicker
 * @extends {React.Component<DatePickerProps>}
 */
export class DatePicker extends React.Component<DatePickerProps> {
  constructor(props: DatePickerProps) {
    super(props);
  }

  render() {
    const { classes, label, date } = this.props;
    return (
      <form className={classes["container"]} noValidate>
        <TextField
          id="date"
          label={label}
          type="date"
          defaultValue={date}
          onChange={this.onChange}
          className={classes["textField"]}
          InputLabelProps={{
            shrink: true
          }}
        />
        {this.props.children}
      </form>
    );
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onChange = this.props.onChange;
    if (onChange) {
      const newDate = e.currentTarget.value;
      onChange(newDate);
    }
  };
}

export default withStyles(styles)(DatePicker);
