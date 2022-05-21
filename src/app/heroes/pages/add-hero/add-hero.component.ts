import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styles: [
  ]
})
export class AddHeroComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log({params});
      }
    })
  }

}
