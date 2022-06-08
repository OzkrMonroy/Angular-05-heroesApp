import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Hero, Publisher } from '../../interfaces/heroeRequest';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `
  ]
})
export class AddHeroComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]
  defaultValues: Hero = {
    superhero: '',
    alt_img: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics
  }

  hero: Hero = this.defaultValues

  constructor(private activatedRoute: ActivatedRoute, private heroesServices: HeroesService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if(!this.router.url.includes('edit')){
      return
    }
    this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.heroesServices.getHero(id))
    ).subscribe({
      next: hero => this.hero = hero
    })
  }

  save(): void {
    if (this.hero.superhero.trim().length === 0) return;
    if (this.hero.id) {
      this.heroesServices.editHero(this.hero).subscribe({
        next: hero => {
          this.hero = hero
          this.showSnackBar('Hero updated');
        }
      })
    } else {
      this.heroesServices.addHero(this.hero).subscribe({
        next: hero => {
          this.showSnackBar('Hero created');
          this.router.navigate(['/heroes/edit', hero.id])
        }
      })
    }
  }

  delete():void {
    this.heroesServices.deleteHero(this.hero.id!).subscribe({
      next: () => {
        this.showSnackBar('Hero deleted');
        this.router.navigate(['/heroes'])
      }
    })
  }

  showSnackBar(message: string): void {
    this._snackBar.open(message, undefined, {
      duration: 2500
    })
  }

}
