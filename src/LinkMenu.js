import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas, fab, faLightbulb);

class LinkMenu extends React.Component {
  render() {
    return (
      <div className="menu-box">
        <a
          href={this.props.Menulink}
          className="menu-font"
          style={{ color: this.props.color }}
        >
          <FontAwesomeIcon
            icon={this.props.FAicon}
            className="menu-i"
            style={{ backgroundColor: this.props.color }}
          />
          {this.props.MenuName}
          <FontAwesomeIcon icon={this.props.lock} />
        </a>
      </div>
    );
  }
}

export default LinkMenu;
