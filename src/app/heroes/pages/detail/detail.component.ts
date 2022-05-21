import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Hero } from '../../interfaces/heroeRequest';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [
    `
    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }
    `
  ]
})
export class DetailComponent implements OnInit {
  hero: Hero = {} as Hero;
  isLoading: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.heroesService.getHero(id))
    ).subscribe({
      next: (hero) => {
        this.hero = hero;
        this.isLoading = false;
      },
      error: (err) => {
        console.error({ err });
        this.isLoading = false;
      }
    })
  }

  goBack(): void {
    this.router.navigate(['/heroes/list']);
  }

}
