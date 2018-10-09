import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleAnimationComponent } from './simple-animation/simple-animation.component';
import { AnimatedTextComponent } from './animated-text/animated-text.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleAnimationComponent,
    AnimatedTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
