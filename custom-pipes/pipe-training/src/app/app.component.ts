import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe-training';

  user = [{

    firstname: 'Yanki',
    city: 'Warszawa',
    zip_code: 24122
  },
  {
    firstname: 'Wick',
    city: 'Morocco',
    zip_code: 11674
    
  }];
   
}
