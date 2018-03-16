import { Component, OnInit, Input  } from '@angular/core';
import { jokeModel } from '../../models/jokeModel';
import {Http, Response } from '@angular/http';
import { HttpClient,  HttpHeaders  } from '@angular/common/http';
import { take } from 'rxjs/operators/take';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})

export class JokeComponent implements OnInit {
  edit: boolean;
  url: string;
  @Input() jokeModel:jokeModel;
  
  constructor(private http: HttpClient) {
    this.edit = false;
    this.url = "http://127.0.0.1:5000";
  }

  ngOnInit() {
  }

  editJoke(){
    this.edit = !this.edit;
    console.log("edit the joke")
  }

  saveJoke(){

    this.edit = !this.edit;
  }

  deleteJoke(){
    console.log("delete the joke")
    //this._ref.destroy();
    this.http.delete(this.url + '/jokes/' + this.jokeModel.id, httpOptions).subscribe(
      res =>{
        window.location.reload();
      },
      err => {
        window.location.reload();
      }
    );
  }

}
