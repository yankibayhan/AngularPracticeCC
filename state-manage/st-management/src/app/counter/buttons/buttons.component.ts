import { MatButtonModule } from '@angular/material/button';
import { decrement, increment, reset } from './../state/counter.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor(private main_store: Store<{counter : {counter : number}}>) { }  // injecting the store to constructor, counter property is from app.module StoreModule

  ngOnInit(): void {
  }

  onIncrement(){
    this.main_store.dispatch(increment()); // I'm dispatching the action through the store
  }
  onDecrement(){
    this.main_store.dispatch(decrement());
  }
  onReset(){
    this.main_store.dispatch(reset());
  }

}
