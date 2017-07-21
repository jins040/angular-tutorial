import { Component, OnInit, Input } from '@angular/core';
import {Hero} from "../domain/hero";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from '@angular/common';
import {HeroService} from "../service/HeroService";

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //@Input()
  hero: Hero;
  sample: number;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params['id']);
    this.heroService.getHero(this.route.snapshot.params['id']).subscribe(data => {
      this.hero = data;
    });
  }


  goBack(): void {
    this.location.back();
  }

}
