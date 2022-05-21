import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroeRequest';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {
  heroes: Hero[] = [];
  error: boolean = false;

  constructor(private heroService: HeroesService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe({
      next: (heroes) => {
        console.log({ heroes });
        
        this.heroes = heroes;
        this.error = false;
      },
      error: (err) => {
        console.log({ err });
        this.error = true;
        this.heroes = [];
      }
    })
  }

}
