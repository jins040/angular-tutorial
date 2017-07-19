/**
 * Created by danawacomputer on 2017-07-18.
 */
import {Injectable} from "@angular/core";
import {Hero} from "../domain/hero";
import {HEROES} from "../mock-data/mock-heroes";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class HeroService {
  ObservableHero: Observable<Hero>;

  constructor(private http: HttpClient) {}  //클라이언트와 서버 주소 충돌 문제 해결하기 위해

  // 1. 모든 영웅 목록 가져오기
  getHeroes(): Observable<Hero[]> {

    // this.http.get("http://localhost:8080/heroes").subscribe(data => {
    //   this.heroes = data;
    // });

    //return this.heroes;

    //GET 방식으로 가져오기
    return this.http.get("http://localhost:8080/heroes");   //기본적으로 JSON으로 가져오는 것을 간주하기 때문에
                                                            //리턴 타입을 Observable로 wrapping하여 넘긴다
                                                            //JSON 맵핑은 자동, subscribe 하는 순간에 data를 실제로 가져온다.
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get("http://localhost:8080/heroes/" + id);
  }

  // 2. 영웅 등록하기
  addHero(hero: Hero): void {

  }

  // 3. 영웅 삭제하기
  removeHero(id: number): void {

  }
}
