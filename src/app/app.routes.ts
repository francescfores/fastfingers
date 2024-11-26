import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {ProjectInfoComponent} from "./pages/project-info/project-info.component";

export const routes: Routes = [
	{
		path: '',
	    component: HomeComponent
	},
	{
		path: 'about',
	    component: AboutComponent
	},
	{
		path: 'contact',
	    component: ContactComponent
	},
	{ 
		path: 'project/:name', 
		component: ProjectInfoComponent
      },
    { path: '',redirectTo: "",  pathMatch: "full" },
  	{ path: "**", redirectTo: "", pathMatch: "full" },
];