import { Injectable } from "@angular/core";
import { FLOP_DATA } from "./FLOP_DATA";

@Injectable({
  providedIn: 'root'
})
export class MovieService{
  flops:{title:string,stars:number,imageUrl:string}[];
  constructor(){
    this.flops = FLOP_DATA
  }


  getTwoRandomMovies():{title:string,stars:number,imageUrl:string}[]{
    let movie1 : {title:string,stars:number,imageUrl:string} = this.flops[Math.floor(Math.random() * this.flops.length)];
    let movie2 : {title:string,stars:number,imageUrl:string} = this.flops[Math.floor(Math.random() * this.flops.length)];

    while(movie2 === movie1){
      movie2  = this.flops[Math.floor(Math.random() * this.flops.length)];
    }
    return [movie1,movie2]

  }
}