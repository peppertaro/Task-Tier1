import React from "react";
class Popular extends React.Component {
  render() {
    return (
      <div className="popular-box">
        <div className="popular content-box">
          <p className="popular-content">{this.props.PLcontent}</p>
          <p className="yellow popular-post">
            <span className="gray">Posted by:</span>
            {this.props.PLname}
          </p>
          <div className="gray popular-post">
            Reddit Score: {this.props.PLnumber}
          </div>
          <p className="pink popular-post">Link to comment</p>
        </div>
      </div>
    );
  }
}

export default Popular;
