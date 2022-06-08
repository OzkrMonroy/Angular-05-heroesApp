import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroeRequest';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {

  transform(hero: Hero): string {
    if(!hero.id && !hero.alt_img){
      return 'assets/no-image.png'
    }
    if(hero.alt_img){
      return hero.alt_img
    }
    if(!hero.id?.includes('dc') && !hero.id?.includes('marvel')){
      return 'assets/no-image.png'
    }

    return `assets/heroes/${hero.id}.jpg`;
  }

}
