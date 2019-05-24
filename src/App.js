import React from "react";
import "./App.scss";
import Popular from "./Popular";
import JSHistory from "./JSHistory";
import GithubHistory from "./GithubHistory";
import Date from "./Date";
import { PopularList, JSHistoryList, GithubHistoryList } from "./ListData";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faLightbulb, faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, fab, faLightbulb, faClock);

class App extends React.Component {
  render() {
    return (
      <div className="react-box">
        <div className="side-bar-section">
          <div className="menu-element">
            <ul>
              <li className="menu-font">
                <FontAwesomeIcon icon="wrench" className="menu-i" />
                SETTINGS
              </li>
              <li className="menu-font">
                <FontAwesomeIcon icon="code" className="menu-i" />
                GISTS
              </li>
              <li className="menu-font">
                <FontAwesomeIcon
                  icon={["fab", "stack-overflow"]}
                  className="menu-i"
                />
                STACK OVERFLOW
              </li>
              <li className="menu-font">
                <FontAwesomeIcon icon="chart-line" className="menu-i" />
                TRENDING
              </li>
              <li className="menu-font">
                <FontAwesomeIcon icon="pencil-alt" className="menu-i" />
                SEARCH PAD
              </li>
              <li className="menu-font">
                <FontAwesomeIcon
                  icon={["far", "lightbulb"]}
                  className="menu-i"
                />
                PLAYGROUND
                <FontAwesomeIcon icon="lock" />
              </li>
              <li className="menu-font">
                <FontAwesomeIcon icon="question" className="menu-i" />
                HELP/INTRO
              </li>
            </ul>
          </div>
          <div className="initab-element">
            <img className="initab-img" src="./img/initab_logo.png" alt="" />
            <div className="initab-icons">
              <FontAwesomeIcon icon={["fab", "facebook-f"]} className="sns-i" />
              <FontAwesomeIcon
                icon={["fab", "linkedin-in"]}
                className="sns-i"
              />
              <FontAwesomeIcon icon={["fab", "twitter"]} className="sns-i" />
              <FontAwesomeIcon
                icon={["fab", "reddit-alien"]}
                className="sns-i"
              />
            </div>
          </div>
        </div>
        <div className="Main">
          <div className="popular-section">
            <h2 className="popular-title title">
              <i>
                <FontAwesomeIcon icon={["fab", "reddit-alien"]} />
              </i>
              POPULAR ON R/JAVASCRIPT
            </h2>
            <div className="populars">
              <div className="popular content-box">
                <p className="popular-content">
                  The revolutionary project management tool is here and it's
                  visual. Start Your Free Trial Now.
                </p>
                <p className="yellow popular-post">Start Free Trial</p>
                <p className="pink">Sponsored by monday</p>
              </div>
              <div className="popular content-box">
                {PopularList.map(popularItem => {
                  return (
                    <Popular
                      PLcontent={popularItem.PLcontent}
                      PLname={popularItem.PLname}
                      PLnumber={popularItem.PLnumber}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="Center-section">
            <div className="History-section">
              <h2 className="js-history-title title">
                <i>
                  <FontAwesomeIcon icon={["far", "clock"]} />
                </i>
                RELEVANT JAVASCRIPT HISTORY
              </h2>
              <div className="js-histories">
                {JSHistoryList.map(JSHistoryItem => {
                  return (
                    <JSHistory
                      JSimg={JSHistoryItem.JSimg}
                      JScontent={JSHistoryItem.JScontent}
                      JSdate={JSHistoryItem.JSdate}
                    />
                  );
                })}
              </div>
            </div>
            <div className="Time-section">
              <Date />
            </div>
          </div>

          <div className="Right-Section">
            <div className="GitHub-issues-History-element">
              <h2 className="GitHub-issues-title title">
                <i>
                  <FontAwesomeIcon icon={["fab", "github-alt"]} />
                </i>
                GITHUB ISSUES HISTORY
              </h2>
              <p className="GitHub-issues-content">switch to gitlab</p>
              <div className="Github-tab-box">
                <div className="Github-tab yellow">ISSUES</div>
                <div className="Github-tab pink">PULL REQUESTS</div>
              </div>
              <div className="GitHub-issues-Histories">
                {GithubHistoryList.map(GithubHistoryItem => {
                  return (
                    <GithubHistory
                      GHrepo={GithubHistoryItem.GHrepo}
                      GHnumber={GithubHistoryItem.GHnumber}
                      GHcontent={GithubHistoryItem.GHcontent}
                    />
                  );
                })}
              </div>
            </div>
            <div className="ads-element content-box">
              <div className="ads-box">
                <div className="ads-img">
                  <img src="./img/ads-img.jpg" alt="" />
                  <p className="ads-title pink">ads via TA</p>
                </div>
                <div className="ads-content gray">
                  See what's new in this Ads!!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
