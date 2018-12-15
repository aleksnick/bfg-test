import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = {
  container: {
    display: "flex"
  },
  textField: {
    marginLeft: 10,
    marginRight: 10,
    width: 200
  }
};

export interface DatePickerProps {
  date: string;
  onChange?: (date: string) => void;
}

export class DatePicker extends React.Component<DatePickerProps> {
  /**
   *
   */
  constructor(props: DatePickerProps) {
    super(props);
  }

  render() {
    const { date } = this.props;
    return (
      <form className="container" noValidate>
        <TextField
          id="date"
          label="Questions start date"
          type="date"
          defaultValue={date}
          onChange={this.onChange}
          className="textfield"
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
