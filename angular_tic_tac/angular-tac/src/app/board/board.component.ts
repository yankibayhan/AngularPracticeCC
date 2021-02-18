import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  
  squares: any[]; 
  xIsNext: boolean;
  winner: string;

  constructor() { }

  ngOnInit(): void {

    this.newGame(); // new game initialization
  }

  newGame(){

    this.squares = Array(9).fill(null);   // 9 lines on board and the starting state is empty
    this.winner = null; 
    this.xIsNext = true; 
  }

  get player() {  // we are getting the player state with get method, who's next

    return this.xIsNext ? 'X': 'O'; // first starting as X after O
  }

  makeMove(idx: number) {

    if (!this.squares[idx]) {

       this.squares.splice(idx, 1, this.player); // we have spliced the element of x or o in order to be board clean and proceed to next player
       this.xIsNext = !this.xIsNext;
       
    }
    this.winner = this.calculateWinner();

  }

  calculateWinner() {

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // How the lines are built, checked on web
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) { // for loop to pass squares
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }


  }

}
