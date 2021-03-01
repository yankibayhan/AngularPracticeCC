import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false
  constructor(public firebaseAuth : AngularFireAuth) { }
  async signin(email: string, password : string){ // Implemented Firebase signin func
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }
  async signup(email: string, password : string){ // Implemented Firebase signup func
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }
  logout(){ // Implemented Firebase logout func
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
}
