import React from "react";
class GitHubHistory extends React.Component {
  render() {
    return (
      <div className="GitHub-issues-History-box content-box">
        <div className="Git-repo gray">Repo: {this.props.repo}</div>
        <div className="Git-Issue yellow">Issue # {this.props.number}</div>
        <div className="Git-content">{this.props.content}</div>
      </div>
    );
  }
}

export default GitHubHistory;
