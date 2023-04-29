import { Component } from '@angular/core';
import { FLOP_DATA } from './FLOP_DATA';
import { MovieService } from './movie.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 flops:{title:string,stars:number,imageUrl:string}[];
 chosen = false; 
 message : string;



  constructor(public movieService:MovieService) {
    this.flops = movieService.getTwoRandomMovies();
    console.log(this.flops)
  }

  // Feel free to put your own data here if you have other favorite flops
  
	choice(movie:{title:string,stars:number,imageUrl:string}){
    if(movie === this.flops[0]){

      this.chosen = true;
      if(this.flops[0].stars > this.flops[1].stars){
          this.message = "correct"
          
      }else{
        this.message = "Incorrect"
      }
      
    }else{
      if(this.flops[1].stars > this.flops[0].stars){
        this.message = "correct"
      }else{
      this.message = "Incorrect"
      }
    }

    this.chosen = true;

  }

  playAgain(){
    this.chosen = false;
    this.message = ""
    this.flops = this.movieService.getTwoRandomMovies();
  }



}
