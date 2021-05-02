import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageStatusComponent } from './manage-status.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [ManageStatusComponent],
  imports: [CommonModule, SharedModule, MaterialModule],
  exports: [ManageStatusComponent],
})
export class ManageStatusModule {}
