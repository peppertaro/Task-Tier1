import React from "react";
import "./App.scss";
import Popular from "./Popular";
import JSHistory from "./JSHistory";
import GithubHistory from "./GithubHistory";
import Date from "./Date";
import { PopularList, JSHistoryList, GithubHistoryList } from "./ListData";

class App extends React.Component {
  render() {
    return (
      <div className="react-box">
        <div className="side-bar-section">
          <div className="menu-element">
            <ul>
              <li className="menu-font">
                <i className="fas fa-wrench" />
                SETTINGS
              </li>
              <li className="menu-font">
                <i className="fas fa-code" />
                GISTS
              </li>
              <li className="menu-font">
                <i className="fab fa-stack-overflow" />
                STACK OVERFLOW
              </li>
              <li className="menu-font">
                <i className="fas fa-chart-line" />
                TRENDING
              </li>
              <li className="menu-font">
                <i className="fas fa-pencil-alt" />
                SEARCH PAD
              </li>
              <li className="menu-font">
                <i className="far fa-lightbulb" />
                PLAYGROUND
                <i className="fas fa-lock" />
              </li>
              <li className="menu-font">
                <i className=" fas fa-question" />
                HELP/INTRO
              </li>
            </ul>
          </div>
          <div className="initab-element">
            <img className="initab-img" src="./img/initab_logo.png" alt="" />
            <div className="initab-icons">
              <i className="fab fa-facebook-f" />
              <i className="fab fa-linkedin-in" />
              <i className="fab fa-twitter" />
              <i className="fab fa-reddit-alien" />
            </div>
          </div>
        </div>
        <div className="Main">
          <div className="popular-section">
            <h2 className="popular-title title">
              <i className="fab fa-reddit-alien" />
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
                      content={popularItem.PLcontent}
                      name={popularItem.PLname}
                      number={popularItem.PLnumber}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="Center-section">
            <div className="History-section">
              <h2 className="js-history-title title">
                <i className="far fa-clock" />
                RELEVANT JAVASCRIPT HISTORY
              </h2>
              <div className="js-histories">
                {JSHistoryList.map(JSHistoryItem => {
                  return (
                    <JSHistory
                      img={JSHistoryItem.img}
                      content={JSHistoryItem.content}
                      date={JSHistoryItem.date}
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
                <i className="fab fa-github-alt" />
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
                      repo={GithubHistoryItem.img}
                      number={GithubHistoryItem.number}
                      content={GithubHistoryItem.content}
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
                  See what's new Me in this Ads!!
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
