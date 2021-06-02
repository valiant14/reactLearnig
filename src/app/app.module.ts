import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddSignatureComponent } from './components/add-signature/add-signature.component';
import { SignatureDetailsComponent } from './components/signature-details/signature-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignatureListComponent } from './components/signature-list/signature-list.component';
import { ClassBindingComponent } from './mosh/class-binding/class-binding.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StyleBindingComponent } from './mosh/style-binding/style-binding.component';
import { EventBindingComponent } from './mosh/event-binding/event-binding.component';
import { EventFilteringComponent } from './mosh/event-filtering/event-filtering.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSignatureComponent,
    SignatureDetailsComponent,
    SignatureListComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    EventFilteringComponent
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
