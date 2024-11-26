import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import { Injectable } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';
import { ProjectsService } from './services/projects/projects.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
    providers: [ThemeService,ProjectsService], // Registra aquí el servicio
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  isDarkEnable = false;
  sidebarOpen= false;

  constructor(
    public themeService: ThemeService,
    //public sidebarService: SidebarService
) {}

  ngOnInit(): void {
     this.themeService.getCurrentTheme().subscribe(theme => {
      this.isDarkEnable = theme === 'theme-dark';
    });
    //this.sidebarService.getSidebarState().subscribe(sidebarOpen => {
    //  this.sidebarOpen = sidebarOpen;
    //}); 
  }
}
