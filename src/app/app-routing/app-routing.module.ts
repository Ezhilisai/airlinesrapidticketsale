import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { FlightsearchComponent } from '../flightsearch/flightsearch.component';
import { StepperlayoutComponent } from '../stepperlayout/stepperlayout.component';

const routes: Routes = [
  {
    path: 'checkout',
    component: StepperlayoutComponent,
  },
  {
    path: '',
    component: FlightsearchComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
