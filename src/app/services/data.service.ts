import { Injectable } from '@angular/core';
import {Question} from '../models/question';

@Injectable()
export class DataService {
questions:Question[];

  constructor() {
    this.questions = [
      {
        text:"what is your name?",
        answer:"my name is dotun",
        hide:true
      },
      {
        text:"what is your favorite color?",
        answer:"my fav color is blue",
        hide:true
      },
      {
        text:"what is your favorite language?",
        answer:"my fav language is JS",
        hide:true
      }
    ];
  }

  getQuestions(){
    return this.questions;
  };

  addQuestion(question:Question){
      this.questions.unshift(question);
  };

}
