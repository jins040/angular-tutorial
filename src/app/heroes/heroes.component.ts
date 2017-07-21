import { Component, OnInit } from '@angular/core';
import {Hero} from "../domain/hero";
import {HeroService} from "../service/HeroService";
import {Router} from "@angular/router";

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  hero : Hero = {
    id: 1,
    name: 'WindStorm'
  };

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
      .subscribe(data => this.heroes = data);  //콜백 함수, JSON data, 람다식으로 변환(원래는 function(data) ... 형식)
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    //this.router.navigate(['/heroes', this.selectedHero.id]);
  }

  gotoDetail(): void {
    this.router.navigate(['/heroes', this.selectedHero.id]);
  }

}
