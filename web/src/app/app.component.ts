import { Component, OnInit, Input, Output} from '@angular/core';
import {Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { jokeModel } from './models/jokeModel';
import { JokeComponent } from './components/joke/joke.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  url: string;
  jokes: Array<jokeModel>;
  joke: jokeModel;

  constructor(private http: HttpClient){
    this.url = "http://127.0.0.1:5000";
    this.jokes = new Array<jokeModel>();
    this.getJokes();
  }

  // Return get all of the jokes from the server
  getJokes(){
    console.log("getting all of the jokes from: " + this.url + "/jokes");
    this.http.get(this.url + "/jokes").subscribe(data => {
      for(var i in data){
        this.joke = new jokeModel();
        this.joke.id = +data[i][0];
        this.joke.content = data[i][1]
        this.jokes.push(this.joke);
      }
    });

  }

}
