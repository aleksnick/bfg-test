import React from "react";
import IDate from "../Models/IDate";
import DatePicker from "../UI/DatePicker";
import Button from "../UI/Button";

export interface DateControlProps extends IDate {
  onSetDate?: (date: string) => void;
}

export interface DateControlState {
  showChangeButton: boolean;
  newDate: string;
}

export default class DateControl extends React.Component<
  DateControlProps,
  DateControlState
> {
  /**
   *
   */
  constructor(props: DateControlProps) {
    super(props);
    this.state = {
      showChangeButton: false,
      newDate: this.props.date
    };
  }

  render() {
    return (
      <DatePicker date={this.state.newDate} onChange={this.onChangeDate}>
        {this.renderButton()}
      </DatePicker>
    );
  }

  renderButton = () => {
    if (!this.state.showChangeButton) {
      return null;
    }
    return <Button onClick={this.onClickButton}>Change Date</Button>;
  };

  onChangeDate = (newDate: string) => {
    this.setState({
      showChangeButton: newDate !== this.props.date,
      newDate: newDate
    });
  };

  onClickButton = () => {
    const onSetDate = this.props.onSetDate;
    if (onSetDate) {
      window.console.log("click button", this.state.newDate);
      onSetDate(this.state.newDate);
    }
    this.setState({
      showChangeButton: false
    });
  };
}
