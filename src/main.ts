import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [AppModule],
  template: `
    <app-parent></app-parent>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
