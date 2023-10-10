import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AngularComponent } from './angular/angular.component';
import { GitComponent } from './git/git.component';
import { TerminalesComponent } from './terminales/terminales.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'git', component: GitComponent },
  { path: 'terminales', component: TerminalesComponent },
  { path: "", redirectTo: "/inicio", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
