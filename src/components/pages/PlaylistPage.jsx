import React from "react";
//import { useParams } from "react-router-dom";
import { ReactComponent as PlayIcon } from "../../assets/svg/play.svg";
import { ReactComponent as HeartIcon } from "../../assets/svg/heart.svg";
import { ReactComponent as NoteIcon } from "../../assets/svg/note.svg";

const PlaylistPage = () => {
  //const { id } = useParams();

  return (
    <div className="playlistPage">
      <div className="mainInner">
        <div className="playlistInfo">
          <div className="playlistImage">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favvesione.files.wordpress.com%2F2014%2F05%2Fjojos_bizarre_adventure_stardust_crusaders-06-jotaro-stoic-calm-wet-awesome-intimidating.jpg&f=1&nofb=1"
              alt="pic"
            />
          </div>
          <div className="playlistContent">
            <p className="smallText uppercase bold">Playlist</p>
            <h1>The New Alt</h1>

            <p className="tagline">Some cool playlist for yall.</p>
            <div className="playlistDesc">
              <p className="spotify">Spotify</p>
              <span>20,420 likes</span>
              <span>2hr 10 min</span>
            </div>
          </div>
        </div>
        <div className="playlistSongs">
          <div className="playlistButtons">
            <span className="playIcon">
              <PlayIcon />
            </span>
            <div className="icons">
              <div className="icon iconsHeart">
                <HeartIcon />
              </div>
              <div className="icon iconsDots"></div>
            </div>
          </div>

          <ul className="songList">
            <li>
              <div className="songIcon">
                <NoteIcon className="noteI" />
                <PlayIcon className="playI" />
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <NoteIcon className="noteI" />
                <PlayIcon className="playI" />
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <NoteIcon className="noteI" />
                <PlayIcon className="playI" />
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <NoteIcon className="noteI" />
                <PlayIcon className="playI" />
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <NoteIcon className="noteI" />
                <PlayIcon className="playI" />
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <NoteIcon className="noteI" />
                <PlayIcon className="playI" />
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
