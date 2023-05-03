import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwagTestComponent } from './swag-test/swag-test.component';

const routes: Routes = [
  { path: 'swag', component: SwagTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
