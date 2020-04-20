import React from "react";
import { ReactComponent as PlayIcon } from "../assets/svg/play.svg";

const Main = () => {
  return (
    <div className="Main">
      <div className="upperNav">uppernav txt</div>
      <div className="mainContent">
        <div className="cardsWrap">
          <h1>Uniquely yours</h1>
          <div className="card">
            <div className="cardImage">
              <img
                src="https://images.unsplash.com/photo-1504276048855-f3d60e69632f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                alt="cardImage"
              />
            </div>

            <div className="cardContent">
              <h3>Liked songs</h3>
            </div>
            <span className="playIcon">
              <PlayIcon />
            </span>
          </div>
        </div>
        <div className="cardsWrap">
          <h2>Focus</h2>
          <span className="seeALl">SEE ALL</span>
          <p className="subtitle">Music to help you concentrate.</p>
          <div className="cardsWrapInner">
            <div className="card">
              <div className="cardImage">
                <img
                  src="https://images.unsplash.com/photo-1504276048855-f3d60e69632f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  alt="cardImage"
                />
              </div>

              <div className="cardContent">
                <h3>Music for concentration.</h3>
                <span>Music to help you concentrate.</span>
              </div>
              <span className="playIcon">
                <PlayIcon />
              </span>
            </div>
            <div className="card">
              <div className="cardImage">
                <img
                  src="https://images.unsplash.com/photo-1504276048855-f3d60e69632f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  alt="cardImage"
                />
              </div>

              <div className="cardContent">
                <h3>Music for concentration.</h3>
                <span>Music to help you concentrate.</span>
              </div>
              <span className="playIcon">
                <PlayIcon />
              </span>
            </div>
            <div className="card">
              <div className="cardImage">
                <img
                  src="https://images.unsplash.com/photo-1504276048855-f3d60e69632f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  alt="cardImage"
                />
              </div>

              <div className="cardContent">
                <h3>Music for concentration.</h3>
                <span>Music to help you concentrate.</span>
              </div>
              <span className="playIcon">
                <PlayIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
