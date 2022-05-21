import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Hero } from '../../interfaces/heroeRequest';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  searchWord: string = '';
  filteredOptions: Hero[] = [];
  selectedHero: Hero | undefined;

  constructor(private heroService: HeroesService) { }

  ngOnInit(): void {
  }

  initSearch(): void {
    this.heroService.getSuggestions(this.searchWord.trim()).subscribe({
      next: (data: Hero[]) => {
        this.filteredOptions = data;
      }
    })
  }

  setSelectedHero(hero: MatAutocompleteSelectedEvent): void {
    if(!hero.option.value) {
      this.selectedHero = undefined;
      return
    }
    const heroId: Hero = hero.option.value;
    console.log(heroId);
    
    this.searchWord = heroId.superhero;

    this.heroService.getHero(heroId.id!).subscribe({
      next: (data: Hero) => this.selectedHero = data
    })
  }
}
