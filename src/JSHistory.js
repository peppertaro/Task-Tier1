import React from "react";
class JSHistory extends React.Component {
  render() {
    return (
      <div className="js-history-box">
        <img src={this.props.JSimg} alt="" />
        <div className="js-content">{this.props.JScontent}</div>
        <div className="js-history-date">{this.props.JSdate} days ago</div>
      </div>
    );
  }
}

export default JSHistory;
