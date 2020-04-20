import React from "react";

const Main = () => {
  return (
    <div className="Main">
      <div className="upperNav">uppernav txt</div>
      <div className="mainContent">
        <h1>Uniquely yours</h1>
        <div className="cardsWrap">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
