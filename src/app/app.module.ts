import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatFormFieldModule, MatAutocompleteModule, MatDatepickerModule, MatNativeDateModule, MatStepperModule, MatTabsModule, MatToolbarModule, MatSidenavModule, MatListModule, MatMenuModule, MatProgressSpinnerModule, MatTableModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightsearchComponent } from './flightsearch/flightsearch.component';
import { StepperlayoutComponent } from './stepperlayout/stepperlayout.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeadersectionComponent } from './headersection/headersection.component';
import { NavlistComponent } from './navlist/navlist.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InfocontainersComponent } from './infocontainers/infocontainers.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FlightsearchComponent,
    StepperlayoutComponent,
    HeadersectionComponent,
    NavlistComponent,
    InfocontainersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule, 
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule, 
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSelectModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule, 
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule, 
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTableModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
