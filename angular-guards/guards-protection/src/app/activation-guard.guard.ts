import { ActivationService } from './activation.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivationGuardGuard implements CanActivate {

  constructor(private service : ActivationService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      // Logic
      if(this.service.isUserLogged()){
        return true
      }
      else {
        return false
      }
    
    
  }
  
  
}
