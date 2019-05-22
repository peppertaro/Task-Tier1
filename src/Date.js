import React from "react";
import dayjs from "dayjs";

class Date extends React.Component {
  state = {
    date: dayjs()
  };

  second() {
    setInterval(() => {
      this.setState({ date: dayjs() });
    }, 1000);
  }

  render() {
    return (
      <div className="Time-box">
        <div className="time">
          {this.state.date.format("h:mm")}
          <span>{this.state.date.format("A")}</span>
        </div>
        <div className="date">{this.state.date.format("MMM DD,YYYY")}</div>
        {this.second()}
        <div className="time-question">
          <p>
            <i className="fa fa-question-circle yellow" />
            Did you know you can CUSTOM LINKS to display in this section?{" "}
          </p>
          <p>
            Open the SETTINGS panel and add the URLs of your favorites sites to
            the 'CUSTOM LINKS' textarea.
          </p>
          <div className="time-close yellow">
            <i className="fa fa-times-circle" />
            Got it! Don't show me this again.
          </div>
        </div>
      </div>
    );
  }
}

export default Date;
