import { Component, OnInit, Input, Output} from '@angular/core';
import {Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormGroup, FormControl, ReactiveFormsModule  } from '@angular/forms';
import { jokeModel } from './models/jokeModel';
import { JokeComponent } from './components/joke/joke.component';
import { HttpClient,  HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit  {
  jokeData =  new FormControl();
  url: string;
  jokes: Array<jokeModel>;
  joke: jokeModel;

  constructor(private http: HttpClient){
    this.url = "http://127.0.0.1:5000";
    this.jokes = new Array<jokeModel>();
    this.getJokes();
  }

  ngOnInit(){

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
      },
      err => {
        console.log("error getting all jokes");
      });
  }

  // Create joke
  addJoke(){
      
      var joke = { "joke": this.jokeData.value };
      this.http.post(this.url + "/jokes", joke, httpOptions)
      .subscribe(res =>{
        console.log(res)
        this.joke = new jokeModel();
        this.joke.content = res['joke'];
        this.jokes.push(this.joke);
        window.location.reload();
      }, 
      err =>{ 
        console.log("error adding joke")
      });
      console.log("posting jokes to : " + this.url + "/jokes");
      console.log(this.jokeData.value);
  }

 
}
