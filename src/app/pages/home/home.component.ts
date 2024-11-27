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
          this.time--;
          this.wpmData.push({
            time: this.time,
            wpm: ((this.index + this.word_index - this.letter_errors) / 5) / (this.time_start / 60),
            raw: ((this.index + this.word_index) / 5) / (this.time_start / 60)
          });
        }else if(this.time===0 && !this.finish){
          console.log('end')
          console.log('caracteres', this.index+ this.word_index)
          console.log('tiempo',this.time_start)
          console.log('resultado',(this.index/5)/(this.time_start/60))
          console.log(this.wpmData)
          this.finish=true;
          this.wpm= ((this.index+ this.word_index)/5)/(this.time_start/60)
        }
      }, 1000);
  }

  time=15;
  time_start=this.time;

  index=0;

  words = ['no', 'wild', 'most', 'since', 'open', 'been', 'question', 'quite', 'quit','hour', 'big', 'even', 'mountain', 'been', 'animal', 'long',];
  word:any;
  word_index=0;
  end_word=false;
  word_success=true;
  count_word_success=0;

  letters:any;
  letter:any;
  letter_index=0;
  letter_errors=0;

  wpm=0;
  wpmData:{time:number, wpm:number, raw:number}[]=[];

  finish=false;
  keydown(event: KeyboardEvent) {
    const key = event.key;

    //obtener la palabra las letras de la palabra y la letra que se tiene que escribir
    this.word = this.words[this.word_index];
    this.letters = this.word.split("");
    this.letter = this.letters[this.letter_index];
    let letter;

    //obtenemos la letra del DOM con el index que vamos incrementando
    letter = this.getComponentDom(this.index);

    if (this.letters.length !== this.letter_index + 1) {
      this.handleLetterInput(key, letter);
      this.advanceLetter();
    } else {
      if (event.code === "Space" && this.end_word ) {
        this.end_word=false;
        this.advanceWord();
        if(this.word_success) this.count_word_success++;
        this.word_success=true;
      } else {
        this.handleLetterInput(key, letter);
        this.markEndOfWord(letter);
        this.end_word=true;
      }
    }
  }

  getComponentDom(index:number){
    return document.querySelectorAll(".word-letter")[index];
  }
  
  handleLetterInput(key:string, letter:Element){
    if (letter) {
        if (key !== this.letter ) {
          letter.classList.add("text-red-300");
          this.word_success=false;
        }else{
          this.letter_errors++;
        }
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
    let letter = this.getComponentDom(this.index);
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
