import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeroesRoutingModule } from './heroes-routing.module';

import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { SearchComponent } from './pages/search/search.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { MaterialModule } from '../material/material.module';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { ImagePipe } from './pipes/image.pipe';



@NgModule({
  declarations: [
    AddHeroComponent,
    SearchComponent,
    DetailComponent,
    HomeComponent,
    ListComponent,
    HeroCardComponent,
    ImagePipe,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
