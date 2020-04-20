import React from "react";
import { useParams } from "react-router-dom";

const PlaylistPage = () => {
  const { id } = useParams();

  return (
    <div className="playlistPage">
      <div className="mainInner">
        <div className="playlistInfo">
          <div className="playlistImage">
            <img
              src="https://i.scdn.co/image/ab67706f0000000229a474cf9edc5e08a2b66d48"
              alt="eminem"
            />
          </div>
          <h1>All Out 00s</h1>
          <p>Spotify {id}</p>
          <button>Play</button>
          <div className="icons">
            <div className="iconsHeart"></div>
            <div className="iconsDots"></div>
          </div>
          <p>
            Essential tracks from the decade that catapulted electronic music,
            hip hop and indie rock into the mainstream.
          </p>
        </div>
        <div className="playlistSongs">
          <ul>
            {[...Array(10)].map((x, i) => (
              <li>Song {i + 1}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
