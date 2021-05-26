import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignatureDetailsComponent } from './components/signature-details/signature-details.component';
import { AddSignatureComponent } from './components/add-signature/add-signature.component';
import { SignatureListComponent } from 'src/app/components/signature-list/signature-list.component'
const routes: Routes = [

  { path: '', redirectTo: 'add', pathMatch: 'full' },
  { path: 'signature', component: SignatureListComponent },
  { path: 'signature/:id', component: SignatureDetailsComponent },
  { path: 'add', component: AddSignatureComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
