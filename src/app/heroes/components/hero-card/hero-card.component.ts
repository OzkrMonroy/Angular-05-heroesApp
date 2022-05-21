import { Component, Input } from '@angular/core';
import { Hero } from '../../interfaces/heroeRequest';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
  ]
})
export class HeroCardComponent{

  @Input() hero!: Hero;
  constructor() { }
}
