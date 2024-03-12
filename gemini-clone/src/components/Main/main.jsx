import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev</span>
          </p>
          <p>How can i Help You Today</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest Beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>breifle Explain the concept of Urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>brainstrome Team Building Activities</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder="Enter Your Prompt Here" />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className="bottom-info">
                Gemeni may display inaccurate  info,including about people.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
