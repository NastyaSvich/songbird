import React from 'react';
import {Img, Name, Species, Sound, Descript} from './BirdsList';
import AudioPlayer from 'react-h5-audio-player';
import '../css/player.css';
import 'react-h5-audio-player/lib/styles.css';

function Description() {

  return (
    <div className="column">
    <div className="bird-details card">
    <p className="instruction" >
    <span>Послушайте плеер.</span>
    <span>Выберите заставку из сериала или мультика!</span>
    </p>
    <div className="card-body">
    <img className="bird-image" src={Img} alt={Name}></img>
    <ul className="roster roster-flush">
    <li className="roster-item"><h4>{Name}</h4></li>
    <li className="roster-item"><span>{Species}</span></li>
    <li className="roster-item">
    <div className="audio-player right">
    <AudioPlayer
      src={Sound}
      autoPlayAfterSrcChange={false}
      onPlay={e => document.querySelector('.question div audio').pause()}
    />
    </div>
    </li>
    </ul>
    </div>
    <span className="bird-description">{Descript}</span>
    </div>
    </div>
  );
}

export default Description;
