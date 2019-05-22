import React from "react";
class JSHistory extends React.Component {
  render() {
    return (
      <div className="js-history-box">
        <img src={this.props.img} alt="" />
        <div className="js-content">{this.props.content}</div>
        <div className="js-history-date">{this.props.date} days ago</div>
      </div>
    );
  }
}

export default JSHistory;
