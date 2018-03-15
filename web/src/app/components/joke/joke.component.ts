import { Component, OnInit, Input  } from '@angular/core';
import { jokeModel } from '../../models/jokeModel';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  @Input() jokeModel:jokeModel;
  
  constructor() {

   }

  ngOnInit() {
  }

  editJoke(){
    console.log("edit the joke")
  }

  deleteJoke(){
    console.log("delete the joke")
  }

}
