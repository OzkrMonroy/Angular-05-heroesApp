import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../interfaces/heroeRequest';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`)
  }

  getHero(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
  }

  getSuggestions(name: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${name}&_limit=5`)
  }

  addHero(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero)
  }
  editHero(hero: Hero): Observable<Hero>{
    return this.http.put<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero)
  }
}
