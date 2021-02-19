import { ServiceinjService } from './../serviceinj.service'; //Imported my service
import { Component, OnInit } from '@angular/core';
import { Character} from './character';  // character paramaters imported

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  
})
export class CharactersComponent implements OnInit {
  
  characters: Character[];
  
  constructor(private nservice : ServiceinjService ) { 

    this.characters = nservice.getCharacters();  // grabbed the characters attributes
  }
  

  ngOnInit(): void {
  }

}
