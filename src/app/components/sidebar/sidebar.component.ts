import {Component, Input, OnInit, HostListener} from "@angular/core";
import {SidebarService} from"./services/sidebar.service";
import {ThemeService} from "./../../services/theme/theme.service";
import {first} from "rxjs/operators";
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: "app-sidebar-blog",
  templateUrl: "./sidebar.component.html",
  styleUrls: ['./sidebar.component.css'],
      standalone: true,
  imports: [CommonModule,RouterModule], // Importa CommonModule aquí
    providers: [SidebarService], // Registra aquí el servicio

})
export class SidebarComponent implements OnInit {
  sidebarOpen= false;
  isDarkEnable=false;
  loginOpen = false;
  @Input() transparent = false;
  dark!:boolean;
  lastScrollPosition = 0;
  audio = new Audio('assets/sounds/mixkit-mouse-click-close-1113.wav');
  audio2 = new Audio('assets/sounds/mixkit-hard-pop-click-2364.wav');

  constructor(
    public sidebarService: SidebarService,
    public themeService: ThemeService,
    private router: Router,

  ) {
    this.sidebarOpen= false;
  }
  show_nav!:boolean;

  ngOnInit() {
    this.transparent=false;
      this.show_nav = true;

    this.sidebarService.getShow().subscribe(show_nav => {
      this.show_nav = true;
    });
    this.sidebarService.getSidebarState().subscribe(sidebarOpen => {
      this.sidebarOpen = sidebarOpen;
    });
    this.themeService.getCurrentTheme().subscribe(theme => {
      this.isDarkEnable = theme === 'theme-dark';
    });
    this.dark=this.isDarkEnable

    console.log(this.isDarkEnable)

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Aquí puedes manejar el evento de navegación
        console.log('Navegación a:', event.url);
        $('#navbar').removeClass('-translate-y-16');

      });
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  show_cat=false;
  showCategories(){
    this.audio2.load();
    this.audio2.play();
  }
  changeTheme() {
    this.audio.load();
    this.audio.play();
    this.isDarkEnable = !this.isDarkEnable;
    this.animationSunMoon();
    this.themeService.changeTheme(this.isDarkEnable);
  }
  animationSunMoon(){
    if(!this.isDarkEnable){
      $('.moon_sun').css("fill", "hsl(var(--twc-textPrimary))");
      $('.moon_sun g circle').css("transform", "scale(1)");
      // $('.moon_sun').css("transform", "rotate(-20deg)");
      setTimeout(function() {
        $('.moon_sun').css("transform", "rotate(90deg)");
        $('#moon-mask-main-nav circle').attr('r', '8');
      }, 500);
      $('#moon-mask-main-nav circle').attr('cx', '25');
      $('#moon-mask-main-nav circle').attr('cy', '0');
      $('#moon-mask-main-nav circle').attr('r', '8');
      $('.moon_sun circle').css("background", "green");
      $('.moon_sun > circle').attr("r", "5");
    }else{
      $('.moon_sun').css("fill", "hsl(var(--twc-textPrimary))");
      $('.moon_sun g circle').css("transform", "scale(0)");
      $('.moon_sun').css("transform", "rotate(90deg)");
      $('#moon-mask-main-nav circle').attr('cx', '10');
      $('#moon-mask-main-nav circle').attr('cy', '2');
      $('#moon-mask-main-nav circle').attr('r', '7');
      $('.moon_sun > circle').attr("r", "8");
      $('.moon_sun').css("transform", "rotate(100deg)");
      setTimeout(function() {
        $('.moon_sun').css("transform", "rotate(50deg)");
      }, 500);
    }
  }

  setLoginOpen() {
    this.loginOpen = !this.loginOpen;
  }

  logOut(){
    // this.authenticationService.logout();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    if(!this.sidebarOpen){
      this.detectScrollDirection()
    }
  }

  scroll = (): void => {

  }
  detectScrollDirection() {
    var currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var scrollDistance = document.documentElement.scrollTop;

    if (currentScrollPosition > this.lastScrollPosition && scrollDistance > 0) {
      $('#navbar').addClass('-translate-y-16');
    }
    if (currentScrollPosition < this.lastScrollPosition && scrollDistance > 0) {
      // Scroll hacia arriba
      $('#navbar').removeClass('-translate-y-16');
    }
    this.lastScrollPosition = currentScrollPosition;
  }


  goToLandings() {
    const route = ['/blog/bonus/landings'];
    this.router.navigate(route);

  }
}
