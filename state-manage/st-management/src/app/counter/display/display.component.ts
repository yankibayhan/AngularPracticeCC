import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit { // So I'm injecting the current store here
  
  counter: number;
  constructor(private main_store: Store<{counter: {counter: number}}>) {}

  ngOnInit(): void {
    this.main_store.select('counter').subscribe(data => {
       this.counter = data.counter;

    }); // Subscribing the data
  }

}
