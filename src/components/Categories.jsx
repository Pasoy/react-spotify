import React from "react";

import Playlists from "./Playlists";

const Categories = (props) => {
  const dataCategories = [
    {
      id: 1,
      name: "Focus",
      tagline: "Music to help you concentrate.",
    },
    {
      id: 2,
      name: "Throwback",
      tagline: "Playlists full of favorites, still going strong.",
    },
    {
      id: 3,
      name: "Mood",
      tagline: "Playlists to match your mood.",
    },
    {
      id: 4,
      name: "Based on your recent listening",
      tagline: "",
    },
  ];
  return (
    <div className="mainInner">
      {dataCategories.map((category, id) => (
        <div className="cardsWrap" key={id}>
          <h2>
            <span>{category.name}</span>
          </h2>
          {/*<span className="seeALl">SEE ALL</span>*/}
          <p className="subtitle">{category.tagline}</p>
          <Playlists category_id={category.id} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
