import birdsData from "./birds";
import soundError from '../resources/audio/error.mp3';
import soundSuccess from '../resources/audio/correct.mp3';
import {level, Sort} from './BirdsList';

  let Otvet = 0;
  sessionStorage.schet = 0;
  sessionStorage.сount = 5;
  sessionStorage.flag = 0;
  function CheckAnswer(e) {
    let correct = birdsData[level][Sort].name;
    let answer = e.target.innerText;
    let audioCorrect = document.querySelector('.question div audio');
    if(answer === correct && sessionStorage.flag === '0'){
      e.target.classList.add('success');
      document.querySelector('.btn').classList.add('btn-next');
      let audio = new Audio(soundSuccess);
      audio.play();
      audioCorrect.pause();
      sessionStorage.flag = 1;
      Otvet = 1;
      sessionStorage.schet = Number(sessionStorage.schet) + Number(sessionStorage.сount);
    }
    else if(answer !== correct && sessionStorage.flag === '0' && !e.target.classList.contains('error')){
      e.target.classList.add('error');
      let audio = new Audio(soundError);
      audio.play();
      Otvet = 0;
      sessionStorage.сount = sessionStorage.сount - 1;
    }
  }
export {CheckAnswer, Otvet};
