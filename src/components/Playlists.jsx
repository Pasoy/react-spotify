import React from "react";
import { ReactComponent as PlayIcon } from "../assets/svg/play.svg";

const Playlists = (props) => {
  const dataPlaylists = [
    {
      id: 101,
      category_id: 3,
      name: "Mood playlist 1",
      img:
        "https://vignette.wikia.nocookie.net/jjba/images/1/19/Giorno_Giovanna_Anime.png/revision/latest?cb=20200310175513",
      description: "Giorno Giovanna",
    },
    {
      id: 102,
      category_id: 3,
      name: "Mood playlist 2",
      img:
        "https://vignette.wikia.nocookie.net/jjba/images/a/af/Bruno_Bucciarati_Anime.png/revision/latest?cb=20180925021111",
      description: "Bruno Bucciarati",
    },
    {
      id: 103,
      category_id: 3,
      name: "Mood playlist 3",
      img:
        "https://vignette.wikia.nocookie.net/jjba/images/0/0e/Leone_Anime-0.png/revision/latest?cb=20190716224830",
      description: "Leone Abbacchio",
    },
    {
      id: 104,
      category_id: 1,
      name: "Focus playlist 1",
      img:
        "https://vignette.wikia.nocookie.net/jjba/images/1/11/Mista_Anime.png/revision/latest?cb=20191227010238",
      description: "Guido Mista",
    },
    {
      id: 105,
      category_id: 4,
      name: "Listening playlist 1",
      img:
        "https://vignette.wikia.nocookie.net/jjba/images/3/3b/Narancia_Ghirga_Anime.png/revision/latest?cb=20181116030838",
      description: "Narancia Ghirga",
    },
    {
      id: 106,
      category_id: 2,
      name: "Throwback playlist 1",
      img:
        "https://vignette.wikia.nocookie.net/jjba/images/4/4b/Pannacotta_Fugo_Anime.png/revision/latest?cb=20181104005228",
      description: "Pannacotta Fugo",
    },
    {
      id: 107,
      category_id: 2,
      name: "Throwback playlist 1",
      img:
        "https://vignette.wikia.nocookie.net/jjba/images/f/f6/Trish_Una_-_Anime.png/revision/latest?cb=20190617021603",
      description: "Trish Una",
    },
  ];

  const matchedPlaylists = dataPlaylists.filter(
    (playlist) => playlist.category_id === props.category_id
  );

  return (
    <div className="cardsWrapInner">
      {matchedPlaylists.map((playlist) => (
        <div className="card">
          <div className="cardImage">
            <img src={playlist.img} alt={playlist.name} />
          </div>

          <div className="cardContent">
            <h3>{playlist.name}</h3>
            <span>{playlist.description}</span>
          </div>
          <span className="playIcon">
            <PlayIcon />
          </span>
        </div>
      ))}
    </div>
  );
};

export default Playlists;
