import { Component, OnInit } from '@angular/core';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  

  constructor(public translate : TranslateService) {

    translate.addLangs(['en','tr','nl']); // add wished language pack
    translate.setDefaultLang('en'); // default system language

    const browserLang = translate.getBrowserLang(); // returns the language code from browser
    translate.use(browserLang.match(/en|tr/)? browserLang : 'en'); 
    
   }

  ngOnInit(): void {

    
  }

  

}
