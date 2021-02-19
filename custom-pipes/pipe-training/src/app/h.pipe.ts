import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser'; // Helps to clean document object model, to be more secure


@Pipe({
  name: 'h'
})
export class HPipe implements PipeTransform {

  constructor(private dom : DomSanitizer){ }
  transform(value: string, firstname: string, postcode: number): any {    // I can change which value or arguments will transform the data
    
    
    return this.dom.bypassSecurityTrustHtml("MY NAME : " + firstname);
    
    
    
    /* if (firstname == 'Yanki'){  // Messing around with the manipulation of the data

      return 'My name manipulated into John';
    }

    else {

      return 'manipulated into No Name';
    */

  
    
  }

}
