import React from 'react';
import {Ball} from './BirdsList';


function Score() {
  return (
    <div>
    <div className="header flex">
    <div className="panel flex">
    <div className="logo"></div>
    <h5>Score: <span className="score">{Ball}</span></h5>
    </div>
    <ul className="questions">
    <li className="question active"><a className="link" href="/#">Популярные</a></li>
    <li className="question"><a className="link" href="/#">Зарубежные сериалы</a></li>
    <li className="question"><a className="link" href="/#">Отечественные сериалы</a></li>
    <li className="question"><a className="link" href="/#">Зарубежные мультики</a></li>
    <li className="question"><a className="link" href="/#">Отечественные мультики</a></li>
    <li className="question"><a className="link" href="/#">ТВ-шоу</a></li>
    </ul>
    </div>
    </div>
  );
}

export default Score;
