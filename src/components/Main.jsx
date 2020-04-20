import React from "react";
import { Switch, Route } from "react-router-dom";

import Categories from "./Categories";
import PlaylistPage from "./pages/PlaylistPage";

const Main = () => {
  return (
    <div className="Main">
      <div className="upperNav">uppernav txt</div>
      <div className="mainContent">
        <Switch>
          <Route path="/" exact component={Categories} />
          <Route path="/search">Search</Route>
          <Route path="/library">Library</Route>
          <Route path="/playlist/:id" component={PlaylistPage} />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
