import { Component, OnInit } from '@angular/core';
import { Todo } from './../models/Todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[]; // imported from models/Todo to be create this array

  inputTodo:string = "";;


  constructor() { }

  ngOnInit(): void {

    this.todos = [
      {
        content: 'Study and train basic concepts for Angular ',
        completed: true
      },
      
      {
        content: 'Dependency Injection training',
        completed: true
      },

      {
        content: 'Study the concepts of Angular materials(Better than bootstrap)',
        completed: true
      },

      {
        content: "Logan's task that he will give me tomorrow",
        completed: false
      }

        

    ]
  }

  toggleDone (id:number) {   // method to toggle the task complete or incomplete

     this.todos.map((v,i) => {

      if (i == id) v.completed = !v.completed;

      return v;
     })
  }

  deleteTodo(id:number) {  // method to delete the task

    this.todos = this.todos.filter((v,i) => i !== id) ;
  }

  addTodo () {

    this.todos.push({

      content: this.inputTodo,
      completed: false
    })
  }
}
