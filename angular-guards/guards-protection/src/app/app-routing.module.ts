import { ActivationGuardGuard } from './activation-guard.guard';
import { AppComponent } from './app.component';
import { WalletComponent } from './wallet/wallet.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

   {path : 'user', component : UserComponent},
   {path: 'wallet', component : WalletComponent, canActivate : [ActivationGuardGuard]} // Restricting access to the wallet

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
