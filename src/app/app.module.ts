import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AngularComponent } from './angular/angular.component';
import { GitComponent } from './git/git.component';
import { TerminalesComponent } from './terminales/terminales.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AngularComponent,
    GitComponent,
    TerminalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
