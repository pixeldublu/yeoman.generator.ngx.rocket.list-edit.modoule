import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@app/shared';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@app/material.module';
import { ShellModule } from '@app/shell/shell.module';
import { <%= mainTitle %>RoutingModule } from './<%= secondaryTitle %>-routing.module';
import { <%= mainTitle %>Component } from './<%= secondaryTitle %>.component';
import { <%= mainTitle %>ListComponent } from './<%= secondaryTitle %>-list/<%= secondaryTitle %>-list.component';
import { <%= mainTitle %>ManageComponent } from './<%= secondaryTitle %>-manage/<%= secondaryTitle %>-manage.component';
import { <%= mainTitle %>Service } from '../core/services/api/<%= secondaryTitle %>.service';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule,
    MaterialModule,
    ShellModule,
    <%= mainTitle %>RoutingModule
  ],
  declarations: [
    <%= mainTitle %>Component,
    <%= mainTitle %>ListComponent,
    <%= mainTitle %>ManageComponent
  ],
  providers: [
    <%= mainTitle %>Service
  ]
})
export class <%= mainTitle %>Module { }
