import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddSignatureComponent } from './components/add-signature/add-signature.component';
import { SignatureDetailsComponent } from './components/signature-details/signature-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignatureListComponent } from './components/signature-list/signature-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSignatureComponent,
    SignatureDetailsComponent,
    SignatureListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
