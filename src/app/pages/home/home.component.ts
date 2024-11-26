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
  words = ['can\'t', 'thing', 'sometimes', 'break', 'went', 'can\'t', 'been', 'question', 'quite', 'quit', 'from', 'form', 'forever', 'angry', 'limit', 'lucky', 'hours', 'records', 'oil', 'feed', 'won\'t', 'its', 'it\'s', 'old', 'many', 'place', 'time', 'experience', 'time', 'quest', 'just', 'computer', 'move', 'white', 'green', 'black', 'orange', 'different', 'hour', 'big', 'even', 'mountain', 'been', 'animal', 'long', 'after', 'page', 'tree', 'see', 'seen', 'right', 'left', 'has', 'went', 'above', 'said', 'good', 'long', 'it', 'why', 'that', 'learn', 'girl', 'boy', 'will', 'three', 'before', 'may', 'to', 'fine', 'flower', 'city', 'street'];
  word:any;
  letters:any;
  letter:any;
  time=10;
  time_end=10;

  intervalo: any;
  word_index=0;
  letter_index=0;
  index=0;

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

  keydown(event: KeyboardEvent) {
  const key = event.key;

  this.word = this.words[this.word_index];
  this.letters= this.word.split('');
  this.letter = this.letters[this.letter_index];

  let letter;

  
  letter = document.querySelectorAll('.word-letter')[this.index];
  if (letter) {
    if(key===this.letter){
      letter.classList.add('bg-green-200');
    }
    letter.classList.remove('word-letter-anim');
  }

  if(this.letters.length  === this.letter_index+1){
    if (event.code === 'Space') { // También puedes usar event.key === ' '
        console.log('Se presionó la barra espaciadora.');
        letter = document.querySelectorAll('.word-letter')[this.index];
        letter.classList.remove('word-letter-anim-end');
        this.word_index++
        this.index++
        this.letter_index=0;
      const word = document.querySelectorAll('.word')[this.word_index];
      letter = document.querySelectorAll('.word-letter')[this.letter_index+this.index];
      letter.classList.add('word-letter-anim');

    }else{
      letter = document.querySelectorAll('.word-letter')[this.index];
    if (letter) {
      letter.classList.add('word-letter-anim-end');
    }
    }
    
  }else{
    this.letter_index++
    this.index++
    letter = document.querySelectorAll('.word-letter')[this.index];
    if (letter) {
      letter.classList.add('word-letter-anim');
      }
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
