import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public frutas: Array<{icon:string; title: string; rutaAudio: string; avatar: string; play:boolean}> = [];

  constructor(){
    this.frutas.push({icon:'play',title: 'Apple',rutaAudio: '../assets/sonidos/apple.mp3',avatar: '../assets/images/apple.jpg',play:false});
    this.frutas.push({icon:'play',title: 'Banana',rutaAudio: '../assets/sonidos/banana.mp3',avatar: '../assets/images/banana.jpg',play:false});
    this.frutas.push({icon:'play',title: 'Cherry',rutaAudio: '../assets/sonidos/cherries.mp3',avatar: '../assets/images/cherry.jpg',play:false});
    this.frutas.push({icon:'play',title: 'Grapes',rutaAudio: '../assets/sonidos/grapes.mp3',avatar: '../assets/images/grapes.jpg',play:false});
    this.frutas.push({icon:'play',title: 'Lemon',rutaAudio: '../assets/sonidos/lemon.mp3',avatar: '../assets/images/lemon.jpg',play:false});
    this.frutas.push({icon:'play',title: 'Orange',rutaAudio: '../assets/sonidos/orange.mp3',avatar: '../assets/images/orange.jpg',play:false});
    this.frutas.push({icon:'play',title: 'Pear',rutaAudio: '../assets/sonidos/pear.mp3',avatar: '../assets/images/pear.jpg',play:false});
    this.frutas.push({icon:'play',title: 'Pineapple',rutaAudio: '../assets/sonidos/pineapple.mp3',avatar: '../assets/images/pineapple.jpg',play:false});
    this.frutas.push({icon:'play',title: 'Plumb',rutaAudio: '../assets/sonidos/plumbs.mp3',avatar: '../assets/images/plumb.jpg',play:false});
    this.frutas.push({icon:'play',title: 'Straqberry',rutaAudio: '../assets/sonidos/strawberries.mp3',avatar: '../assets/images/strawberry.jpg',play:false});
  }
  
  async  reproducir(fruta){
    var au = new Audio(fruta.rutaAudio);
    if(fruta.play){
      au.pause();
      fruta.icon = 'play';
      fruta.play = false;
    }else{
      au.play();
      fruta.play = true;
      fruta.icon = 'pause';
      console.log('reproducir');
    }
  }
}
