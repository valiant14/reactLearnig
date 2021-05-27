import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddSignatureComponent } from './components/add-signature/add-signature.component';
import { SignatureDetailsComponent } from './components/signature-details/signature-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignatureListComponent } from './components/signature-list/signature-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SinglePageComponent } from './components/single-page/single-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSignatureComponent,
    SignatureDetailsComponent,
    SignatureListComponent,
    SinglePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
