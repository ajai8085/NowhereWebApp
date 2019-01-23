import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';

const routes: Routes = [{ path: 'button', component: ButtonsComponent },
{ path: '**', redirectTo: 'button' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
