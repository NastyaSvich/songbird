import React from 'react';
import {Ball, Restart} from './BirdsList';
import win from '../resources/pictures/win.png';

function Finish() {
  return (
    <div className="output game-over">
    <h1 className="congratulate text-center">Поздравляем!</h1>
    <p className="results text-center">Вы прошли викторину и набрали {Ball} из 30 возможных баллов.</p>
    <hr className="line"></hr>
    <button className="btn btn-next btn-game-over" onClick = {Restart}>Попробовать еще раз!</button>
    </div>
  );
}

function FinishWin() {
  return (
    <div className="output game-win">
    <h1 className="congratulate text-center">Поздравляем!</h1>
    <p className="results text-center">Вы настоящий знаток!</p>
    <img className = 'img-win' src={win} alt='win'></img>
    </div>
  );
}

export {Finish , FinishWin};
