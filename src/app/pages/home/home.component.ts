import { Component,OnInit,AfterViewInit } from '@angular/core';
import { ButtonComponent } from './../../components/button/button.component';
import { Button3dComponent } from './../../components/button3d/button3d.component';
import { SidebarComponent } from './../../components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { ProjectsService } from './../../services/projects/projects.service';
import { ThemeService } from './../../services/theme/theme.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent,Button3dComponent,SidebarComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent implements OnInit, AfterViewInit{
  projects: any[] = [];


  constructor(
    public themeService: ThemeService,
    public projectsService: ProjectsService,
    private router: Router,

  ){

  }
  isDarkEnable=false;
  ngAfterViewInit(): void {
    const inputElement = document.querySelector('.type-word') as HTMLInputElement;
    if (inputElement) {
      inputElement.focus();  // Esto enfoca el input manualmente
    }
  }

  ngOnInit() {
    this.projects = this.projectsService.projectsData;
    this.themeService.getCurrentTheme().subscribe(theme => {
      this.isDarkEnable = theme === 'theme-dark';
    });
     setInterval(() => {
      if(this.time>0){
        console.log(this.time)
            this.time--
        }else if(this.time===0){
          //console.log('end')
        }
      }, 1000);
  }


  words = ['thing', 'sometimes', 'break', 'went', 'can\'t', 'been', 'question', 'quite', 'quit','hour', 'big', 'even', 'mountain', 'been', 'animal', 'long',];
  word:any;
  letters:any;
  letter:any;
  time=10;
  time_end=10;
  intervalo: any;
  word_index=0;
  letter_index=0;
  index=0;
  keydown(event: KeyboardEvent) {
    const key = event.key;

    //obtener la palabra las letras de la palabra y la letra que se tiene que escribir
    this.word = this.words[this.word_index];
    this.letters = this.word.split("");
    this.letter = this.letters[this.letter_index];
    let letter;

    //obtenemos la letra del DOM con el index que vamos incrementando
    letter = this.getComponentDom(this.index);
    this.handleLetterInput(key, letter);

    if (this.letters.length !== this.letter_index + 1) {
      this.advanceLetter();
    } else {
      if (event.code === "Space") {
      this.advanceWord();
      } else {
        this.markEndOfWord(letter);
      }
    }
  }

  getComponentDom(index:number){
    return document.querySelectorAll(".word-letter")[index];
  }
  
  handleLetterInput(key:string, letter:Element){
    if (letter) {
        //si al escribir la letra es incorrecta pintamos la letra de rojo
        if (key !== this.letter && ( this.letters.length !== this.letter_index + 1)) {
          letter.classList.add("text-red-300");
        }
        //borramos el | que se pinta con la clase word-letter-anim
        letter.classList.remove("word-letter-anim");
      }
  }
  
  advanceLetter(){
    this.letter_index++;
    this.index++;
    let letter = this.getComponentDom(this.index);
    if (letter) {
      letter.classList.add("word-letter-anim");
    }
  }
  
  advanceWord(){
     // También puedes usar event.key === ' '
    let letter = this.getComponentDom(this.index);
        console.log("Se presionó la barra espaciadora.");
        letter = document.querySelectorAll(".word-letter")[this.index];
        letter.classList.remove("word-letter-anim-end");
        this.word_index++;
        this.index++;
        this.letter_index = 0;
        letter = document.querySelectorAll(".word-letter")[this.letter_index + this.index];
        letter.classList.add("word-letter-anim");
  }

  markEndOfWord(letter: Element | null): void {
    if (letter) {
      letter.classList.add("word-letter-anim-end");
    }
  }
  keyup(event: KeyboardEvent): void {
    const teclaPresionada = event.key;
    //console.log('keyup Tecla presionada:', teclaPresionada);

    if (teclaPresionada === 'ArrowRight') {
      console.log('Flecha hacia arriba presionada');
    } else if (teclaPresionada === 'ArrowLeft') {
      console.log('Flecha hacia abajo presionada');
    }
  }

  restart(){
    this.word_index=0
    this.letter_index=0
    this.words = ['thisd', 'thing', 'sometimes', 'break', 'went', 'can\'t', 'been', 'question', 'quite', 'quit', 'from', 'form', 'forever', 'angry', 'limit', 'lucky', 'hours', 'records', 'oil', 'feed', 'won\'t', 'its', 'it\'s', 'old', 'many', 'place', 'time', 'experience', 'time', 'quest', 'just', 'computer', 'move', 'white', 'green', 'black', 'orange', 'different', 'hour', 'big', 'even', 'mountain', 'been', 'animal', 'long', 'after', 'page', 'tree', 'see', 'seen', 'right', 'left', 'has', 'went', 'above', 'said', 'good', 'long', 'it', 'why', 'that', 'learn', 'girl', 'boy', 'will', 'three', 'before', 'may', 'to', 'fine', 'flower', 'city', 'street'];

  }


}
