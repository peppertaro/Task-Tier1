import React from "react";
class LinkMenu extends React.Component {
  render() {
    return (
      <div className="menu-box">
        <a href="#" className="menu-font">
          <i className={this.props.classFA} />
          {this.props.MenuName}
        </a>
      </div>
    );
  }
}

export default LinkMenu;
