import { SummaryPipe } from './summary.pipe';
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
import { TemplateVariablesComponent } from './mosh/template-variables/template-variables.component';
import { TwoWayBindingComponent } from './mosh/two-way-binding/two-way-binding.component';
import { PipesComponent } from './mosh/pipes/pipes.component';
import { CustomPipesComponent } from './mosh/custom-pipes/custom-pipes.component';
import { FavoriteComponent } from './mosh/exercise/favorite/favorite.component';
import { TitleCaseComponent } from './mosh/exercise/title-case/title-case.component';
import { TitleCasePipe } from './mosh/exercise/title-case.pipe';
import { NgContentComponent } from './mosh/ng-content/ng-content.component';
import { LikeComponent } from './mosh/like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSignatureComponent,
    SignatureDetailsComponent,
    SignatureListComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    EventFilteringComponent,
    TemplateVariablesComponent,
    TwoWayBindingComponent,
    PipesComponent,
    CustomPipesComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCaseComponent,
    TitleCasePipe,
    NgContentComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
