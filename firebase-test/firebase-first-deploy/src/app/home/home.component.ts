import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit , EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseservice : FirebaseService) { }

  ngOnInit(): void {
  }
  logout(){
    this.firebaseservice.logout()
    this.isLogout.emit()
  }

}
