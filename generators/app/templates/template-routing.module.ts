import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { <%= mainTitle %>Component } from './<%= secondaryTitle %>.component';
import { <%= mainTitle %>ListComponent } from '@app/<%= secondaryTitle %>/<%= secondaryTitle %>-list/<%= secondaryTitle %>-list.component';
import { <%= mainTitle %>ManageComponent } from '@app/<%= secondaryTitle %>/<%= secondaryTitle %>-manage/<%= secondaryTitle %>-manage.component';


const routes: Routes = [{
  path: '',
  data: { title: extract('<%= mainTitle %>') },
  component: <%= mainTitle %>Component,
  children: [{
    path: '',
    data: { title: extract('<%= mainTitle %>') },
    component: <%= mainTitle %>ListComponent,
  }, {
    path: 'manage',
    data: { title: extract('<%= mainTitle %>') },
    component: <%= mainTitle %>ManageComponent,
  }, {
    path: 'manage/:id',
    data: { title: extract('<%= mainTitle %>') },
    component: <%= mainTitle %>ManageComponent,
  }],
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class <%= mainTitle %>RoutingModule { }


export const routedComponents = [
  <%= mainTitle %>Component,
  <%= mainTitle %>ListComponent
];

