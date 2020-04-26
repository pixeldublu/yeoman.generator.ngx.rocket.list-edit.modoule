import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import { ConfirmationDialog } from './dialogs/confirmation/confirmation-dialog.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, CommonModule, TranslateModule],
  declarations: [LoaderComponent, ConfirmationDialog],
  exports: [LoaderComponent, ConfirmationDialog],
})
export class SharedModule {}
