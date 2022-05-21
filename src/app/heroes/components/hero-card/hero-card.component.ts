import { Component, Input } from '@angular/core';
import { Hero } from '../../interfaces/heroeRequest';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
    `
    mat-card {
      margin-top: 20px;
    }
    `
  ]
})
export class HeroCardComponent{

  @Input() hero!: Hero;
  constructor() { }
}
