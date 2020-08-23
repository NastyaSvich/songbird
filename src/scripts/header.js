import React from 'react';
import birdsData from "./birds";
import {level, Sort, ImgHeader, NameHeader, OtvetHeader, SoundHeader} from './BirdsList';
import pic from '../resources/pictures/default.png';
import AudioPlayer from 'react-h5-audio-player';
import '../css/player.css';
import 'react-h5-audio-player/lib/styles.css';

function Header() {
  console.log("Правильный ответ:", birdsData[level][Sort].name);

  return (
    <div className="bird-tittle output border">
    <img className="bird-image" src={OtvetHeader === 1 ? ImgHeader : pic} alt="bird"></img>
    <div>
    <ul className="roster roster-flush">
    <li className="roster-item" id = "name"><h3>{OtvetHeader === 1 ? NameHeader : '******'}</h3></li>
    <li className="roster-item">
    <div className="audio-player question">
    <AudioPlayer
      src={SoundHeader}
      autoPlayAfterSrcChange={false}
      onPlay={e => document.querySelector('.right div audio').pause()}
    />
    </div>
    </li>
    </ul>
    </div>
    </div>
  );
}

export default Header;
