import React, { Component } from 'react';
import birdsData from "./birds";
import {CheckAnswer, Otvet} from './CheckAnswer';
import {Random} from './random';
import Score from './score';
import Header from './header';
import Description from './description';
import {Finish, FinishWin} from './finish';
import pic from '../resources/pictures/default.png';

let Ball, ImgHeader, NameHeader, OtvetHeader, SoundHeader, Restart, level = 0, Img, Name, Species, Sound, Descript, NewLevel, Return;
let Sort = Random();

class Statet extends Component{
  constructor(props){
    super(props)

    this.state = {
      name: '',
      sound: '',
      img: '',
      descript: '',
      species: '',
      nameTittle: '******',
      imgTittle: pic,
      soundTittle: birdsData[0][Sort].audio,
      scopes: 0,
      level: 0,
      check: ''
    }

    this.handlClick = this.handlClick.bind(this);
    this.newLevel = this.newLevel.bind(this);
    this.restart = this.restart.bind(this);
}

handlClick(e){
  CheckAnswer(e);
  let nameTittle = birdsData[this.state.level][Sort].name;
  let imgTittle = birdsData[this.state.level][Sort].image;
  let id = e.target.dataset.id;
  let name = birdsData[this.state.level][id].name;
  let sound = birdsData[this.state.level][id].audio;
  let img = birdsData[this.state.level][id].image;
  let descript = birdsData[this.state.level][id].description;
  let species = birdsData[this.state.level][id].species;
  let scopes = sessionStorage.schet;
  let check = Otvet;
  let instruction = document.querySelector('.instruction');
  let card = document.querySelector('.card-body');
  let descr = document.querySelector('.bird-description');
  instruction.style.display = "none";
  card.style.display = "flex";
  descr.style.display = "initial";
  this.setState({
    name: name,
    sound: sound,
    img: img,
    descript: descript,
    species: species,
    nameTittle: nameTittle,
    imgTittle: imgTittle,
    scopes: scopes,
    check: check
  })
}

restart(){
  document.querySelector('.row').style.display = "flex";
  document.querySelector('.bird-tittle').style.display = "flex";
  document.querySelector('.game-over').style.display = "none";
  let firstElem = document.querySelectorAll('.questions li');
  firstElem[0].classList.add('active');
  sessionStorage.schet = 0;
  this.setState({
    soundTittle: birdsData[0][Sort].audio,
    scopes: 0
  })
}


newLevel(e){
  let prov=0;
  console.clear();
  document.querySelector('.right div audio').pause();
  Sort = Random();
  if(this.state.level === 5 && sessionStorage.flag === "1"){
    if(this.state.scopes === '30'){
     document.querySelector('.row').style.display = "none";
     document.querySelector('.bird-tittle').style.display = "none";
     document.querySelector('.game-win').style.display = "block";
    }
    else {
   document.querySelector('.row').style.display = "none";
   document.querySelector('.bird-tittle').style.display = "none";
   document.querySelector('.game-over').style.display = "block";
   level = -1;
   prov = 1;
 }
  }
  sessionStorage.flag = 0;
  sessionStorage.сount = 5;
  document.querySelector('.btn').classList.remove('btn-next');
  let arra = document.querySelectorAll('.questions li');
  arra.forEach(el => el.classList.remove('active'));
  if(level<5){
  level = level + 1;
  if(prov !== 1){
  arra[level].classList.add('active');
  }
}
let instruction = document.querySelector('.instruction');
let card = document.querySelector('.card-body');
let descr = document.querySelector('.bird-description');
let check = Otvet;
instruction.style.display = "block";
card.style.display = "none";
descr.style.display = "none";
let soundTittle = birdsData[level][Sort].audio;
this.setState({
  level: level,
  nameTittle: '******',
  imgTittle: pic,
  soundTittle: soundTittle,
  check: check
  })
}

return(){
return false;
}

    render(){
          let arr;
          let list = [];
          for (let i = 0; i < 6; i++){
            arr = birdsData[this.state.level][i].name;
            list.push(arr);
          }
          const listName = list.map((name, i) =>
              <li key={name.toString()} className="roster-item" data-id = {i} onClick={this.handlClick}><span className="li-btn"></span>{name}</li>
            );
            OtvetHeader = this.state.check;
            ImgHeader = this.state.imgTittle;
            NameHeader = this.state.nameTittle;
            SoundHeader = this.state.soundTittle;
            Ball = this.state.scopes;
            Restart = this.restart;
            Name = this.state.name;
            Img = this.state.img;
            Species = this.state.species;
            Sound = this.state.sound;
            Descript = this.state.descript;

      return(
            <div>
            <Score />
            <Header />
            <div className="row position">
            <div className="column">
             <ul  className="item-list roster">{listName}</ul>
            </div>
            <Description />
            <button className="btn" onClick={sessionStorage.flag === '1' ? this.newLevel : this.return}>Next Level</button>
            </div>
            <Finish />
            <FinishWin />
            </div>
      );
    }
  }

  export {Sort, Statet, Ball, ImgHeader, NameHeader, OtvetHeader, SoundHeader, level, Restart, Img, Name, Species, Sound, Descript, NewLevel, Return};
