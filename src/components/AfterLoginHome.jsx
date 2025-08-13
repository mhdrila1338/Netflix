import React from 'react';
import './afterLoginHome.css';

const AfterLoginHome = () => {
  return (
    <div id="afterLoginPage">
      <header className="mainContainerNavbar">
        <div className="childContainerNavbar">
          <div className="nav1">
            <ul className="firstUl">
              <li className="liNavbar logo">
                <h2>NETFLIX</h2>
              </li>
              <li className="liNavbar">
                <a href="">Home</a>
              </li>
              <li className="liNavbar">
                <a href="">TV Shows</a>
              </li>
              <li className="liNavbar">
                <a href="">Movies</a>
              </li>
              <li className="liNavbar">
                <a href="">New & Popular</a>
              </li>
              <li className="liNavbar">
                <a href="">My List</a>
              </li>
            </ul>
          </div>

          <div className="nav2">
            <ul className="secondUl">
              <li className="liNavbar">
                <a href="">
                  <img src="./images/search.png" alt="Search" />
                </a>
              </li>
              <li className="liNavbar">
                <a href="">
                  <img src="./images/notification.png" alt="Notifications" />
                </a>
              </li>
              <li className="liNavbar">
                <a href="">
                  <img src="./images/user.png" alt="User" />
                </a>
              </li>
              <li className="liNavbar">
                <a href="">
                  <img src="./images/down-chevron.png" alt="Menu" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <div className="maincenetrParentContainer">
          <div className="mainSubContainer">
            <div className="content-areas-main">
              <div className="text-areas-main">
                <h1>Stranger Things</h1>

                <div className="mid-mini-section">
                  <span className="span-one">TV-14</span>
                  <span>2024</span>
                  <span>4 Seasons</span>
                  <span className="span-two">HD</span>
                </div>

                <p className='p-tag1'>
                  When a young boy vanishes, a small town uncovers a mystery
                  involving secret experiments, terrifying supernatural forces,
                  and one strange little girl.
                </p>
                <div className="buttons">
                  <button className="childButton1">
                    <img src="./images/play-button-arrowhead.png" alt="Play" />
                    <span>Play</span>
                  </button>
                  <button className="childButton2">
                    <img src="./images/information-24px.png" alt="More Info" />
                    <span>More Info</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AfterLoginHome;
