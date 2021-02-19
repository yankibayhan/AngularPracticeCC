import { Character } from './characters/character';
import { CHARACTERS } from './character_attribute'; // imported from the CHARACTERS
import { Injectable } from '@angular/core';




@Injectable({

  // it declares and shows me that this service should activated within the root application injector
  providedIn: 'root'
})
export class ServiceinjService {
  
  constructor() { }
    
     getCharacters() { return CHARACTERS; } // forked from CHARACTERS detail attributes
  
}
