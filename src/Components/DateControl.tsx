import React from "react";
import IDate from "../Models/IDate";
import DatePicker from "../UI/DatePicker";
import Button from "../UI/Button";

export interface DateControlProps extends IDate {}

export default class DateControl extends React.Component<DateControlProps> {
  /**
   *
   */
  constructor(props: DateControlProps) {
    super(props);
  }

  render() {
    const { date } = this.props;
    return (
      <DatePicker date={date}>
        <Button>Change Date</Button>
      </DatePicker>
    );
  }
}
