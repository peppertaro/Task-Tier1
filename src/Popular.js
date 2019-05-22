import React from "react";
class Popular extends React.Component {
  render() {
    return (
      <div className="popular content-box">
        <p className="popular-content">{this.props.content}</p>
        <p className="yellow popular-post">
          <span className="gray">Posted by:</span>
          {this.props.name}
        </p>
        <p className="gray popular-post">Reddit Score: {this.props.Number}</p>
        <p className="pink popular-post">Link to comment</p>
      </div>
    );
  }
}

export default Popular;
