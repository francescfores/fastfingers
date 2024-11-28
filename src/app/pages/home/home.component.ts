import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ButtonComponent } from "./../../components/button/button.component";
import { Button3dComponent } from "./../../components/button3d/button3d.component";
import { SidebarComponent } from "./../../components/sidebar/sidebar.component";
import { CommonModule } from "@angular/common";
import { ProjectsService } from "./../../services/projects/projects.service";
import { ThemeService } from "./../../services/theme/theme.service";
import { Router } from "@angular/router";
import Chart from "chart.js/auto";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [ButtonComponent, Button3dComponent, SidebarComponent, CommonModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit, AfterViewInit {
  projects: any[] = [];

  constructor(
    public themeService: ThemeService,
    public projectsService: ProjectsService,
    private router: Router
  ) {}
  isDarkEnable = false;
  ngAfterViewInit(): void {
        this.focusInput();
        this.addKeyBar(this.chars_index);
  }



  ngOnInit() {
    this.projects = this.projectsService.projectsData;
    this.themeService.getCurrentTheme().subscribe((theme) => {
      this.isDarkEnable = theme === "theme-dark";
    });
    this.words= [
      "apple", "mountain", "river", "ocean", "forest", "house", "garden", "dream", "light", "night",
      "world", "flower", "friend", "family", "school", "travel", "bridge", "castle", "island", "memory",
      'thes', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog', 'quit', 'from', 'form', 'forever', 'angry', 'limit', 'lucky', 'hours',
        "raindrop", "cupboard", "meadow", "butter", "campfire", "backpack", 
      ];
  }

  time = 1;
  time_start = this.time;

  chars_index = 0;

  words = [""];
  word: string | undefined;
  word_index = 0;
  end_word = false;
  word_success = true;
  count_word_success = 0;

  letters: string[] = [];
  letter: string | null = null;
  letter_index = 0;
  letter_errors = 0;

  wpm = 0;
  raw = 0;
  charData: { time: number; wpm: number; raw: number }[] = [];
  finish = false;
  start = false;
  intervalId: number =0;


  resetState(){
     clearInterval(this.intervalId);
    this.time = this.time_start;
    this.time_start = this.time;
    this.start = false;
    this.finish = false;
    this.chars_index = 0;
    this.word_index = 0;
    this.end_word = false;
    this.word_success = true;
    this.count_word_success = 0;
    this.letter_index = 0;
    this.letter_errors = 0;
    this.wpm = 0;
    this.raw = 0;
    this.charData = [];
  }

  setDataChart(){
        this.wpm = Math.round( ((this.chars_index + this.word_index - this.letter_errors) / 5 / (this.time_start / 60)) * 100 ) / 100;
        this.raw =
          Math.round(
            ((this.chars_index + this.word_index) / 5 / (this.time_start / 60)) * 100 ) / 100;
        this.charData.push({
          time: this.time,
          wpm: this.wpm,
          raw: this.raw,
        });
  }
  initTime() {
    this.resetState();
    this.focusInput();
    this.intervalId = setInterval(() => {
      if (this.time > 0 && this.start == true) {
        this.setDataChart();
        this.time--;
      } else if (this.time === 0 && !this.finish) {
        this.finish = true;
        this.start = false;
        clearInterval(this.intervalId);
        this.setDataChart();
        this.loadChars();
      }
    }, 1000);
  }

  keydown(event: KeyboardEvent) {
    if (!this.start && !this.finish) this.initTime();
    this.start = true;
    const key = event.key;
    //obtener la palabra las letras de la palabra y la letra que se tiene que escribir
    this.word = this.words[this.word_index];
    this.letters = this.word.split("");
    this.letter = this.letters[this.letter_index];
    let letter;
    //obtenemos la letra del DOM con el index que vamos incrementando
    letter = this.getComponentDom(this.chars_index);

    if (this.letters.length !== this.letter_index + 1) {
      this.handleLetterInput(key, letter);
      this.advanceLetter();
    } else {
      if (event.code === "Space" && this.end_word) {
        this.end_word = false;
        this.advanceWord();
        if (this.word_success) this.count_word_success++;
        this.word_success = true;
      } else {
        this.handleLetterInput(key, letter);
        this.markEndOfWord(letter);
        this.end_word = true;
      }
    }
  }

  addKeyBar(index:number){
    let letter = this.getComponentDom(index);
    if (letter) {
      letter.classList.add("word-letter-anim");
    }
  }
  focusInput(): void {
    //this.inputElement.nativeElement.focus();
    const inputElement = document.querySelector( ".type-word" ) as HTMLInputElement;
    if (inputElement) {
      inputElement.focus(); // Esto enfoca el input manualmente
    }
  }

  shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Índice aleatorio
      [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
    }
    return array;
  }

  getComponentDom(index: number) {
    return document.querySelectorAll(".word-letter")[index];
  }

  handleLetterInput(key: string, letter: Element) {
    if (letter) {
      if (key !== this.letter) {
        letter.classList.add("text-red-300");
        this.word_success = false;
        this.letter_errors++;
      }
      letter.classList.remove("word-letter-anim");
    }
  }
  advanceLetter() {
    this.letter_index++;
    this.chars_index++;
    this.addKeyBar(this.chars_index);
  }
  advanceWord() {
    let letter = this.getComponentDom(this.chars_index);
    letter = document.querySelectorAll(".word-letter")[this.chars_index];
    letter.classList.remove("word-letter-anim-end");
    this.word_index++;
    this.chars_index++;
    this.letter_index = 0;
    this.addKeyBar(this.letter_index + this.chars_index);

  }
  markEndOfWord(letter: Element | null): void {
    if (letter) {
      letter.classList.add("word-letter-anim-end");
    }
  }
  keyup(event: KeyboardEvent): void {
    const teclaPresionada = event.key;
    if (teclaPresionada === "ArrowRight") {
      console.log("Flecha hacia arriba presionada");
    } else if (teclaPresionada === "ArrowLeft") {
      console.log("Flecha hacia abajo presionada");
    }
  }

  restart() {
    let letter = this.getComponentDom(this.chars_index);
    if (letter) {
      letter.classList.remove("word-letter-anim-end");
      letter.classList.remove("word-letter-anim");
    }
    setTimeout(() => {
      this.words = this.shuffleArray(this.words);
      this.initTime();
      const elements = document.querySelectorAll(".word-letter"); // Selecciona todos los elementos con la clase
      elements.forEach((element) => {
        element.classList.remove("text-red-300"); // Elimina la clase de cada elemento
        element.classList.remove("word-letter-anim"); // Elimina la clase de cada elemento
        element.classList.remove("word-letter-anim-end"); // Elimina la clase de cada elemento
      });
      setTimeout(() => {
        document
          .querySelectorAll(".word-letter")[0]
          ?.classList.add("word-letter-anim");

        const inputElement = document.querySelector(
          ".type-word"
        ) as HTMLInputElement;
        if (inputElement) {
          inputElement.focus(); // Esto enfoca el input manualmente
        }
      }, 5);
    }, 10);
  }

  configLineChart: any;
  loadChars() {
    let times: number[] = [];
    let data1: number[] = [];
    let data2: number[] = [];

    this.charData.forEach((data) => {
      times.push(data.time); // Agregamos cada valor de 'time' al array 'times'
      data1.push(data.wpm); // Agregamos cada valor de 'time' al array 'times'
      data2.push(data.raw); // Agregamos cada valor de 'time' al array 'times'
    });

    console.log(times);
    this.configLineChart = new Chart(
      document.getElementById("myChart") as HTMLCanvasElement,
      {
        options: {
        },
        type: "line",
        data: {
          labels: times,
          datasets: [
            {
              label: "WPM",
              data: data1,
              fill: false,
              borderColor: "#EC9832",
              tension: 0.4,
            },
            {
              label: "RAW",
              data: data2,
              fill: false,
              borderColor: "#ADFCF9",
              backgroundColor: "#ADFCF9",
              tension: 0.4,
            },
          ],
        },
      }
    );
    const canvas = document.getElementById("myChart") as HTMLCanvasElement;
    canvas.style.width = `${window.innerWidth}px`;;
    canvas.style.height = `${window.innerHeight/3}px`; // Calcula 100vh
    this.configLineChart.update();
  }
}
