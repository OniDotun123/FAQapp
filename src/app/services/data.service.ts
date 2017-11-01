import { Injectable } from '@angular/core';
import {Question} from '../models/question';

@Injectable()
export class DataService {
questions:Question[];

  constructor() {
   /*this.questions = [
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
    ];*/
  }



//Get Question from LS
  getQuestions(){
    if(localStorage.getItem('questions') === null){
      this.questions = [];
    }else{
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

//Add Question to local Storage
  addQuestion(question:Question){
      this.questions.unshift(question);

      //init local var
      let questions;

      if(localStorage.getItem('questions') === null){
        questions = [];
        //push new question
        questions.unshift(question);
        // Set new array to local storage
        localStorage.setItem('questions', JSON.stringify(questions));
      }else{
        questions = JSON.parse(localStorage.getItem('questions'));
       //Add new question
        questions.unshift(question);

        localStorage.setItem('questions',JSON.stringify(questions));


      }
    }

    //Remove question from local Storage
    removeQuestion(question:Question){
      for(let i=0;i < this.questions.length;i++){
        if(question == this.questions[i]){
          this.questions.splice(i,1);
        }
      }

    }

  }
