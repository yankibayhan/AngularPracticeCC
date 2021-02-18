import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
   
  @Input() value: 'X' | 'O';

   // rando_num = Math.random(); // test for generation of number

  constructor() {
    
    
    /// setInterval(() => this.rando_num = Math.random(), 400); // I set up an interval to change random number every 400 nanosec
   }
    
  ngOnInit(): void {
  }

}
