import { Component,OnInit } from '@angular/core';
import { ButtonComponent } from './../../components/button/button.component';
import { Button3dComponent } from './../../components/button3d/button3d.component';
import { SidebarComponent } from './../../components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { ProjectsService } from './../../services/projects/projects.service';
import { ThemeService } from './../../services/theme/theme.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ButtonComponent,Button3dComponent,SidebarComponent,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(
    public themeService: ThemeService,
    public projectsService: ProjectsService,
    private router: Router,

  ) {
  }
    isDarkEnable=false;
    ngOnInit() {
    this.themeService.getCurrentTheme().subscribe(theme => {
      this.isDarkEnable = theme === 'theme-dark';
    });
  }
}
