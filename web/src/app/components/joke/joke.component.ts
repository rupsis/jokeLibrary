import { Component, OnInit, Input  } from '@angular/core';
import { jokeModel } from '../../models/jokeModel';
import {Http, Response } from '@angular/http';
import { FormGroup, FormControl, ReactiveFormsModule  } from '@angular/forms';
import { HttpClient,  HttpHeaders  } from '@angular/common/http';
import { take } from 'rxjs/operators/take';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';

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
  jokeUpdate=  new FormControl();
  @Input() jokeModel:jokeModel;
  
  constructor(private http: HttpClient) {
    this.edit = false;
    this.url = "http://127.0.0.1:5000";
  }

  ngOnInit() {
  }

  toggleEdit(){
    this.edit = !this.edit;
  }

  updateJoke(){
    this.toggleEdit();
    this.jokeUpdate.setValue(this.jokeModel.content);
  }

  saveJoke(){
    this.jokeModel.content = this.jokeUpdate.value;
    var joke = {"joke": this.jokeUpdate.value}
    this.http.put(this.url + '/jokes/' + this.jokeModel.id, joke, httpOptions).subscribe(
      res => {
        window.location.reload();
      }, 
      err => {
        window.location.reload();
      }
    );
    
    this.edit = !this.edit;
  }

  deleteJoke(){
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
