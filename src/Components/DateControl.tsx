import React from "react";
import IDate from "../Models/IDate";
import DatePicker from "../UI/DatePicker";
import { Size } from "../Models/Size";
import Button, { ButtonVariant, ButtonColor } from "../UI/Button";

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
  constructor(props: DateControlProps) {
    super(props);
    this.state = {
      showChangeButton: false,
      newDate: this.props.date
    };
  }

  render() {
    return (
      <DatePicker
        label="Дата начала"
        date={this.state.newDate}
        onChange={this.onChangeDate}
      >
        <Button
          size={Size.Large}
          color={ButtonColor.Primary}
          variant={ButtonVariant.Contained}
          disabled={!this.state.showChangeButton}
          onClick={this.onClickButton}
        >
          Показать вопросы
        </Button>
      </DatePicker>
    );
  }

  onChangeDate = (newDate: string) => {
    this.setState({
      showChangeButton: newDate !== this.props.date,
      newDate: newDate
    });
  };

  onClickButton = () => {
    const onSetDate = this.props.onSetDate;
    if (onSetDate) {
      onSetDate(this.state.newDate);
    }
    this.setState({
      showChangeButton: false
    });
  };
}
